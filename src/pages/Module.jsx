import { useState, useEffect, useRef, useCallback } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ProgressBar from '../components/ProgressBar'
import UsernameModal from '../components/UsernameModal'
import { modules } from '../data/modules'
import { useProgress } from '../context/ProgressContext'

// ── Lesson content renderer ──────────────────────────────────────────────────

function LessonContent({ module, onComplete, isComplete }) {
  const sentinelRef = useRef(null)
  const [reachedBottom, setReachedBottom] = useState(isComplete)

  useEffect(() => {
    if (isComplete) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReachedBottom(true)
          onComplete()
        }
      },
      { threshold: 0.1 }
    )
    const el = sentinelRef.current
    if (el) observer.observe(el)
    return () => { if (el) observer.unobserve(el) }
  }, [isComplete, onComplete])

  return (
    <div className="prose-like space-y-6 text-sm text-neutral-700 leading-relaxed">
      {module.lesson.map((block, i) => {
        if (block.type === 'intro') {
          return (
            <p key={i} className="text-base text-neutral-800 font-medium leading-relaxed">
              {block.text}
            </p>
          )
        }
        if (block.type === 'section') {
          return (
            <div key={i}>
              <h3 className="text-base font-semibold text-neutral-900 mb-2">{block.title}</h3>
              <div className="space-y-2">
                {block.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </div>
          )
        }
        if (block.type === 'keyTerms') {
          return (
            <div key={i}>
              <h3 className="text-base font-semibold text-neutral-900 mb-3">Key Terms</h3>
              <div className="space-y-2">
                {block.items.map((item, j) => (
                  <div key={j} className="bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3">
                    <span className="font-semibold text-neutral-900">{item.term}</span>
                    <span className="text-neutral-500"> — {item.definition}</span>
                  </div>
                ))}
              </div>
            </div>
          )
        }
        return null
      })}

      <div ref={sentinelRef} className="py-2">
        {reachedBottom && (
          <div className="flex items-center gap-2 text-green-700 text-sm font-medium">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Lesson complete
          </div>
        )}
      </div>
    </div>
  )
}

// ── Quiz tab ─────────────────────────────────────────────────────────────────

function QuizTab({ module, onComplete, isComplete, savedScore }) {
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(isComplete)
  const [score, setScore] = useState(savedScore)

  function handleSelect(qId, optionIndex) {
    if (submitted) return
    setAnswers(a => ({ ...a, [qId]: optionIndex }))
  }

  function handleSubmit() {
    const total = module.quiz.length
    let correct = 0
    module.quiz.forEach(q => {
      if (answers[q.id] === q.correct) correct++
    })
    const pct = Math.round((correct / total) * 100)
    setScore(pct)
    setSubmitted(true)
    onComplete(pct)
  }

  const allAnswered = module.quiz.every(q => answers[q.id] !== undefined)

  return (
    <div className="space-y-6">
      <p className="text-sm text-neutral-600">
        Answer all questions then click Submit. You can only submit once.
      </p>

      {module.quiz.map((q, qi) => (
        <div key={q.id} className="space-y-2">
          <p className="text-sm font-medium text-neutral-900">
            {qi + 1}. {q.question}
          </p>
          <div className="space-y-1.5">
            {q.options.map((opt, oi) => {
              const selected = answers[q.id] === oi
              const isCorrect = oi === q.correct
              let cls = 'flex items-start gap-3 px-4 py-3 rounded-lg border text-sm cursor-pointer transition-colors '
              if (!submitted) {
                cls += selected
                  ? 'border-indigo-500 bg-indigo-50 text-indigo-900'
                  : 'border-neutral-200 bg-white hover:border-neutral-300 text-neutral-700'
              } else {
                if (isCorrect) {
                  cls += 'border-green-500 bg-green-50 text-green-900'
                } else if (selected && !isCorrect) {
                  cls += 'border-red-300 bg-red-50 text-red-800'
                } else {
                  cls += 'border-neutral-200 bg-white text-neutral-400'
                }
              }
              return (
                <div key={oi} className={cls} onClick={() => handleSelect(q.id, oi)}>
                  <span className="shrink-0 mt-0.5 w-4 h-4 rounded-full border-2 flex items-center justify-center text-xs font-bold"
                    style={{
                      borderColor: !submitted && selected ? '#4f46e5' : submitted && isCorrect ? '#16a34a' : submitted && selected && !isCorrect ? '#dc2626' : '#d4d4d4',
                    }}
                  >
                    {submitted && isCorrect && (
                      <svg className="w-2.5 h-2.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </span>
                  {opt}
                </div>
              )
            })}
          </div>
        </div>
      ))}

      {!submitted ? (
        <button
          onClick={handleSubmit}
          disabled={!allAnswered}
          className="px-5 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          Submit answers
        </button>
      ) : (
        <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-5">
          <p className="text-sm font-semibold text-neutral-900 mb-1">
            Score: {score}%
          </p>
          <p className="text-sm text-neutral-600">
            {score === 100
              ? 'Perfect score! Excellent work.'
              : score >= 67
              ? 'Good effort. Review any incorrect answers above.'
              : 'Review the lesson content and try the practice questions.'}
          </p>
        </div>
      )}
    </div>
  )
}

// ── Written question tab (shared by Practice Questions + Exam Practice) ──────

function WrittenTab({ questions, onComplete, isComplete, savedScore }) {
  const [responses, setResponses] = useState(() => Object.fromEntries(questions.map(q => [q.id, ''])))
  const [revealed, setRevealed] = useState(() => Object.fromEntries(questions.map(q => [q.id, false])))
  const [selfMarks, setSelfMarks] = useState(() => Object.fromEntries(questions.map(q => [q.id, null])))
  const [completed, setCompleted] = useState(isComplete)

  function handleReveal(qId) {
    setRevealed(r => ({ ...r, [qId]: true }))
  }

  function handleSelfMark(qId, marks, maxMarks) {
    const value = Math.max(0, Math.min(maxMarks, Number(marks)))
    const updated = { ...selfMarks, [qId]: value }
    setSelfMarks(updated)
    if (!completed) {
      setCompleted(true)
      const avg = Math.round(
        Object.values(updated).filter(v => v !== null).reduce((a, b) => a + b, 0) /
        Object.values(updated).filter(v => v !== null).length
      )
      onComplete(avg)
    }
  }

  return (
    <div className="space-y-8">
      <p className="text-sm text-neutral-600">
        Write your response then reveal the model answer. Self-mark honestly using whole numbers only.
      </p>

      {questions.map((q, qi) => (
        <div key={q.id} className="space-y-3">
          <div className="flex items-start justify-between gap-3">
            <p className="text-sm font-medium text-neutral-900 leading-relaxed">
              {qi + 1}. {q.question}
            </p>
            <span className="shrink-0 text-xs text-neutral-400 font-medium mt-0.5">
              {q.marks} marks
            </span>
          </div>

          <textarea
            value={responses[q.id]}
            onChange={e => setResponses(r => ({ ...r, [q.id]: e.target.value }))}
            placeholder="Type your response here..."
            rows={5}
            className="w-full px-3.5 py-3 rounded-lg border border-neutral-200 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-y leading-relaxed"
          />

          {!revealed[q.id] && (
            <button
              onClick={() => handleReveal(q.id)}
              disabled={!responses[q.id].trim()}
              className="text-sm font-medium text-indigo-600 border border-indigo-200 px-4 py-2 rounded-lg hover:bg-indigo-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Reveal model answer
            </button>
          )}

          {revealed[q.id] && (
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-5 space-y-4">
              <div>
                <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">
                  Model answer
                </p>
                <p className="text-sm text-neutral-700 whitespace-pre-line leading-relaxed">
                  {q.modelAnswer}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">
                  Self-mark (0–{q.marks})
                </p>
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: q.marks + 1 }, (_, i) => i).map(n => (
                    <button
                      key={n}
                      onClick={() => handleSelfMark(q.id, n, q.marks)}
                      className={`w-9 h-9 rounded-lg text-sm font-semibold border transition-colors ${
                        selfMarks[q.id] === n
                          ? 'bg-indigo-600 text-white border-indigo-600'
                          : 'bg-white text-neutral-700 border-neutral-200 hover:border-indigo-300'
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
                {selfMarks[q.id] !== null && (
                  <p className="text-xs text-neutral-500 mt-2">
                    You marked yourself {selfMarks[q.id]}/{q.marks}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      ))}

      {completed && (
        <div className="flex items-center gap-2 text-green-700 text-sm font-medium">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Section complete
        </div>
      )}
    </div>
  )
}

// ── Main Module page ──────────────────────────────────────────────────────────

const TABS = ['Lesson', 'Check Your Understanding', 'Practice Questions', 'Exam Practice']

export default function Module() {
  const { id } = useParams()
  const moduleId = parseInt(id, 10)
  const module = modules[moduleId]
  const [activeTab, setActiveTab] = useState(0)
  const { getModuleProgress, getModulePercent, updateModuleProgress } = useProgress()

  const progress = getModuleProgress(moduleId)
  const percent = getModulePercent(moduleId)

  const handleLessonComplete = useCallback(() => {
    if (!progress.lessonComplete) {
      updateModuleProgress(moduleId, { lessonComplete: true })
    }
  }, [progress.lessonComplete, updateModuleProgress, moduleId])

  const handleQuizComplete = useCallback((score) => {
    if (!progress.quizComplete) {
      updateModuleProgress(moduleId, { quizComplete: true, quizScore: score })
    }
  }, [progress.quizComplete, updateModuleProgress, moduleId])

  const handlePracticeComplete = useCallback((score) => {
    if (!progress.practiceComplete) {
      updateModuleProgress(moduleId, { practiceComplete: true, practiceScore: score })
    }
  }, [progress.practiceComplete, updateModuleProgress, moduleId])

  const handleExamComplete = useCallback((score) => {
    if (!progress.examComplete) {
      updateModuleProgress(moduleId, { examComplete: true, examScore: score })
    }
  }, [progress.examComplete, updateModuleProgress, moduleId])

  if (!module) return <Navigate to="/" replace />

  const backTo = module.unit === 1 ? '/unit/1' : '/unit/2'
  const backLabel = module.unit === 1 ? 'Unit 1' : 'Unit 2'

  const tabComplete = [
    progress.lessonComplete,
    progress.quizComplete,
    progress.practiceComplete,
    progress.examComplete,
  ]

  return (
    <>
      <UsernameModal />
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {/* Breadcrumb */}
        <Link
          to={backTo}
          className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-900 transition-colors mb-6"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to {backLabel}
        </Link>

        {/* Header */}
        <div className="mb-6">
          <p className="text-xs font-medium text-neutral-400 mb-1">Module {module.id}</p>
          <h1 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4">{module.title}</h1>

          {/* Progress bar */}
          <div className="flex items-center gap-3">
            <ProgressBar percent={percent} className="flex-1" />
            <span className="text-xs font-medium text-neutral-500 shrink-0 w-12 text-right">
              {percent}%
            </span>
          </div>
          <div className="flex gap-3 mt-2">
            {TABS.map((tab, i) => (
              <div key={i} className="flex items-center gap-1">
                <div className={`w-2 h-2 rounded-full ${tabComplete[i] ? 'bg-indigo-600' : 'bg-neutral-200'}`} />
              </div>
            ))}
            <span className="text-xs text-neutral-400">
              {tabComplete.filter(Boolean).length}/4 tabs complete
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-neutral-200 mb-6">
          <div className="flex gap-1 overflow-x-auto scrollbar-thin">
            {TABS.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`shrink-0 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === i
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-neutral-500 hover:text-neutral-800 hover:border-neutral-300'
                }`}
              >
                <span className="flex items-center gap-1.5">
                  {tab}
                  {tabComplete[i] && (
                    <svg className="w-3.5 h-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <div className="pb-16">
          {activeTab === 0 && (
            <LessonContent
              module={module}
              onComplete={handleLessonComplete}
              isComplete={progress.lessonComplete}
            />
          )}
          {activeTab === 1 && (
            <QuizTab
              module={module}
              onComplete={handleQuizComplete}
              isComplete={progress.quizComplete}
              savedScore={progress.quizScore}
            />
          )}
          {activeTab === 2 && (
            <WrittenTab
              questions={module.practiceQuestions}
              onComplete={handlePracticeComplete}
              isComplete={progress.practiceComplete}
              savedScore={progress.practiceScore}
            />
          )}
          {activeTab === 3 && (
            <WrittenTab
              questions={module.examPractice}
              onComplete={handleExamComplete}
              isComplete={progress.examComplete}
              savedScore={progress.examScore}
            />
          )}
        </div>
      </main>
    </>
  )
}
