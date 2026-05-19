import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { supabase } from '../lib/supabase'

const ProgressContext = createContext(null)

const STORAGE_KEY = 'ait_progress'
const USERNAME_KEY = 'ait_username'

function getLocalProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}
  } catch {
    return {}
  }
}

function saveLocalProgress(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

function deriveStatus(mod) {
  const tabs = [mod.lessonComplete, mod.quizComplete, mod.practiceComplete, mod.examComplete]
  const count = tabs.filter(Boolean).length
  if (count === 0) return 'not_started'
  if (count === 4) return 'complete'
  return 'in_progress'
}

function derivePercent(mod) {
  const tabs = [mod.lessonComplete, mod.quizComplete, mod.practiceComplete, mod.examComplete]
  return tabs.filter(Boolean).length * 25
}

export function ProgressProvider({ children }) {
  const [username, setUsernameState] = useState(() => localStorage.getItem(USERNAME_KEY) || '')
  const [progress, setProgress] = useState(getLocalProgress)
  const [showUsernameModal, setShowUsernameModal] = useState(false)

  useEffect(() => {
    if (!username) {
      setShowUsernameModal(true)
    }
  }, [username])

  const setUsername = useCallback((name) => {
    const trimmed = name.trim()
    if (!trimmed) return
    localStorage.setItem(USERNAME_KEY, trimmed)
    setUsernameState(trimmed)
    setShowUsernameModal(false)
  }, [])

  const getModuleProgress = useCallback((moduleId) => {
    return progress[moduleId] || {
      lessonComplete: false,
      quizComplete: false,
      quizScore: null,
      practiceComplete: false,
      practiceScore: null,
      examComplete: false,
      examScore: null,
    }
  }, [progress])

  const getModuleStatus = useCallback((moduleId) => {
    return deriveStatus(getModuleProgress(moduleId))
  }, [getModuleProgress])

  const getModulePercent = useCallback((moduleId) => {
    return derivePercent(getModuleProgress(moduleId))
  }, [getModuleProgress])

  const updateModuleProgress = useCallback(async (moduleId, updates) => {
    const current = getModuleProgress(moduleId)
    const updated = { ...current, ...updates }

    const newProgress = { ...progress, [moduleId]: updated }
    setProgress(newProgress)
    saveLocalProgress(newProgress)

    if (username) {
      const status = deriveStatus(updated)
      try {
        await supabase.from('progress').upsert({
          username,
          module_id: moduleId,
          status,
          quiz_score: updated.quizScore,
          self_mark: updated.practiceScore ?? updated.examScore,
          updated_at: new Date().toISOString(),
        }, { onConflict: 'username,module_id' })
      } catch {
        // Supabase sync is best-effort; local state is source of truth
      }
    }
  }, [progress, username, getModuleProgress])

  return (
    <ProgressContext.Provider value={{
      username,
      setUsername,
      showUsernameModal,
      setShowUsernameModal,
      progress,
      getModuleProgress,
      getModuleStatus,
      getModulePercent,
      updateModuleProgress,
    }}>
      {children}
    </ProgressContext.Provider>
  )
}

export function useProgress() {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress must be used inside ProgressProvider')
  return ctx
}
