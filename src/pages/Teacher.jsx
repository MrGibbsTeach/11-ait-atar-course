import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { supabase } from '../lib/supabase'
import { modules } from '../data/modules'

const PIN_HASH_KEY = 'teacher_pin_hash'

async function sha256(text) {
  const encoder = new TextEncoder()
  const data = encoder.encode(text)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}

// ── PIN screen ────────────────────────────────────────────────────────────────

function PinScreen({ onAuthenticated }) {
  const storedHash = localStorage.getItem(PIN_HASH_KEY)
  const isSetup = !storedHash

  const [pin, setPin] = useState('')
  const [confirmPin, setConfirmPin] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (pin.length !== 6 || !/^\d{6}$/.test(pin)) {
      setError('PIN must be exactly 6 digits.')
      return
    }
    setLoading(true)
    try {
      if (isSetup) {
        if (pin !== confirmPin) {
          setError('PINs do not match.')
          setLoading(false)
          return
        }
        const hash = await sha256(pin)
        localStorage.setItem(PIN_HASH_KEY, hash)
        onAuthenticated()
      } else {
        const hash = await sha256(pin)
        if (hash === storedHash) {
          onAuthenticated()
        } else {
          setError('Incorrect PIN.')
        }
      }
    } finally {
      setLoading(false)
    }
  }

  function handleResetPin() {
    if (window.confirm('Reset your teacher PIN? You will need to set a new one.')) {
      localStorage.removeItem(PIN_HASH_KEY)
      setPin('')
      setConfirmPin('')
      setError('')
      window.location.reload()
    }
  }

  return (
    <div className="max-w-sm mx-auto px-4 py-16">
      <h1 className="text-xl font-bold text-neutral-900 mb-1">Teacher Dashboard</h1>
      <p className="text-sm text-neutral-500 mb-8">
        {isSetup ? 'Set a 6-digit PIN to protect the teacher dashboard.' : 'Enter your 6-digit PIN to continue.'}
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1.5">
            {isSetup ? 'Choose PIN' : 'PIN'}
          </label>
          <input
            type="password"
            inputMode="numeric"
            maxLength={6}
            value={pin}
            onChange={e => { setPin(e.target.value.replace(/\D/g, '')); setError('') }}
            placeholder="••••••"
            className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent tracking-widest text-center"
            autoFocus
          />
        </div>
        {isSetup && (
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1.5">
              Confirm PIN
            </label>
            <input
              type="password"
              inputMode="numeric"
              maxLength={6}
              value={confirmPin}
              onChange={e => setConfirmPin(e.target.value.replace(/\D/g, ''))}
              placeholder="••••••"
              className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent tracking-widest text-center"
            />
          </div>
        )}
        {error && <p className="text-xs text-red-600">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 px-4 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 disabled:opacity-60 transition-colors"
        >
          {loading ? 'Checking…' : isSetup ? 'Set PIN' : 'Unlock'}
        </button>
      </form>
      {!isSetup && (
        <button
          onClick={handleResetPin}
          className="mt-4 w-full text-xs text-neutral-400 hover:text-neutral-600 transition-colors"
        >
          Reset PIN
        </button>
      )}
    </div>
  )
}

// ── Student row for individual search ────────────────────────────────────────

function StudentDetailTable({ rows }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-neutral-200">
      <table className="min-w-full divide-y divide-neutral-200 text-sm">
        <thead className="bg-neutral-50">
          <tr>
            {['Module', 'Status', 'Quiz Score', 'Self Mark', 'Last Updated'].map(h => (
              <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-neutral-500 uppercase tracking-wide">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-100 bg-white">
          {rows.map(row => (
            <tr key={row.module_id}>
              <td className="px-4 py-3 font-medium text-neutral-800">
                {modules[row.module_id]?.title ?? `Module ${row.module_id}`}
              </td>
              <td className="px-4 py-3">
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                  row.status === 'complete' ? 'bg-green-50 text-green-700' :
                  row.status === 'in_progress' ? 'bg-indigo-50 text-indigo-600' :
                  'bg-neutral-100 text-neutral-500'
                }`}>
                  {row.status === 'not_started' ? 'Not started' :
                   row.status === 'in_progress' ? 'In progress' : 'Complete'}
                </span>
              </td>
              <td className="px-4 py-3 text-neutral-600">
                {row.quiz_score != null ? `${row.quiz_score}%` : '—'}
              </td>
              <td className="px-4 py-3 text-neutral-600">
                {row.self_mark != null ? row.self_mark : '—'}
              </td>
              <td className="px-4 py-3 text-neutral-500 text-xs">
                {row.updated_at ? new Date(row.updated_at).toLocaleDateString('en-AU') : '—'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// ── Summary table for all students ───────────────────────────────────────────

function SummaryTable({ students }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-neutral-200">
      <table className="min-w-full divide-y divide-neutral-200 text-sm">
        <thead className="bg-neutral-50">
          <tr>
            {['Username', 'Modules Complete', 'Avg Quiz Score', 'Last Active'].map(h => (
              <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-neutral-500 uppercase tracking-wide">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-100 bg-white">
          {students.map(s => (
            <tr key={s.username}>
              <td className="px-4 py-3 font-medium text-neutral-800">{s.username}</td>
              <td className="px-4 py-3 text-neutral-600">{s.modulesComplete}/10</td>
              <td className="px-4 py-3 text-neutral-600">
                {s.avgQuizScore != null ? `${s.avgQuizScore}%` : '—'}
              </td>
              <td className="px-4 py-3 text-neutral-500 text-xs">{s.lastActive}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// ── Dashboard ─────────────────────────────────────────────────────────────────

function Dashboard() {
  const [searchInput, setSearchInput] = useState('')
  const [studentRows, setStudentRows] = useState(null)
  const [searchError, setSearchError] = useState('')
  const [searchLoading, setSearchLoading] = useState(false)

  const [allStudents, setAllStudents] = useState(null)
  const [allLoading, setAllLoading] = useState(false)
  const [allError, setAllError] = useState('')

  async function handleSearch(e) {
    e.preventDefault()
    const username = searchInput.trim()
    if (!username) return
    setSearchLoading(true)
    setSearchError('')
    setStudentRows(null)
    try {
      const { data, error } = await supabase
        .from('progress')
        .select('*')
        .eq('username', username)
        .order('module_id')
      if (error) throw error
      if (data.length === 0) {
        setSearchError(`No progress found for "${username}".`)
      } else {
        setStudentRows(data)
      }
    } catch (err) {
      setSearchError('Failed to load data. Check your Supabase connection.')
    } finally {
      setSearchLoading(false)
    }
  }

  async function handleLoadAll() {
    setAllLoading(true)
    setAllError('')
    setAllStudents(null)
    try {
      const { data, error } = await supabase
        .from('progress')
        .select('*')
        .order('updated_at', { ascending: false })
      if (error) throw error

      // Group by username
      const map = {}
      data.forEach(row => {
        if (!map[row.username]) {
          map[row.username] = { username: row.username, rows: [], lastDate: row.updated_at }
        }
        map[row.username].rows.push(row)
        if (row.updated_at > map[row.username].lastDate) {
          map[row.username].lastDate = row.updated_at
        }
      })

      const summary = Object.values(map).map(s => {
        const modulesComplete = s.rows.filter(r => r.status === 'complete').length
        const quizScores = s.rows.map(r => r.quiz_score).filter(v => v != null)
        const avgQuizScore = quizScores.length
          ? Math.round(quizScores.reduce((a, b) => a + b, 0) / quizScores.length)
          : null
        return {
          username: s.username,
          modulesComplete,
          avgQuizScore,
          lastActive: s.lastDate ? new Date(s.lastDate).toLocaleDateString('en-AU') : '—',
        }
      })

      summary.sort((a, b) => b.modulesComplete - a.modulesComplete)
      setAllStudents(summary)
    } catch {
      setAllError('Failed to load student data.')
    } finally {
      setAllLoading(false)
    }
  }

  function handleExportCSV() {
    if (!allStudents?.length) return
    const headers = ['Username', 'Modules Complete', 'Average Quiz Score', 'Last Active']
    const rows = allStudents.map(s => [
      `"${s.username}"`,
      `${s.modulesComplete}/10`,
      s.avgQuizScore != null ? `${s.avgQuizScore}%` : '',
      s.lastActive,
    ])
    const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n')
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `ait-student-progress-${new Date().toISOString().slice(0, 10)}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      <div>
        <h1 className="text-2xl font-bold text-neutral-900 mb-1">Teacher Dashboard</h1>
        <p className="text-sm text-neutral-500">View and export student progress data.</p>
      </div>

      {/* Student search */}
      <section>
        <h2 className="text-base font-semibold text-neutral-900 mb-3">Search Student</h2>
        <form onSubmit={handleSearch} className="flex gap-2 mb-4 max-w-md">
          <input
            type="text"
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
            placeholder="Enter username or student number"
            className="flex-1 px-3.5 py-2.5 rounded-lg border border-neutral-200 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <button
            type="submit"
            disabled={searchLoading}
            className="px-4 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 disabled:opacity-60 transition-colors whitespace-nowrap"
          >
            {searchLoading ? 'Searching…' : 'Search'}
          </button>
        </form>
        {searchError && <p className="text-sm text-neutral-500 mb-3">{searchError}</p>}
        {studentRows && (
          <div>
            <p className="text-sm font-medium text-neutral-700 mb-2">
              Results for: <span className="text-indigo-600">{searchInput.trim()}</span>
            </p>
            <StudentDetailTable rows={studentRows} />
          </div>
        )}
      </section>

      {/* All students */}
      <section>
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-base font-semibold text-neutral-900">All Students</h2>
          <button
            onClick={handleLoadAll}
            disabled={allLoading}
            className="text-sm font-medium px-3.5 py-2 rounded-lg border border-neutral-200 text-neutral-700 hover:border-neutral-300 disabled:opacity-60 transition-colors"
          >
            {allLoading ? 'Loading…' : 'Load all students'}
          </button>
          {allStudents && (
            <button
              onClick={handleExportCSV}
              className="text-sm font-medium px-3.5 py-2 rounded-lg border border-neutral-200 text-neutral-700 hover:border-neutral-300 transition-colors flex items-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Export CSV
            </button>
          )}
        </div>
        {allError && <p className="text-sm text-red-600 mb-3">{allError}</p>}
        {allStudents && (
          allStudents.length === 0 ? (
            <p className="text-sm text-neutral-500">No student data found.</p>
          ) : (
            <SummaryTable students={allStudents} />
          )
        )}
      </section>
    </div>
  )
}

// ── Page entry point ──────────────────────────────────────────────────────────

export default function Teacher() {
  const [authenticated, setAuthenticated] = useState(false)

  return (
    <>
      <Navbar />
      {authenticated ? (
        <Dashboard />
      ) : (
        <PinScreen onAuthenticated={() => setAuthenticated(true)} />
      )}
    </>
  )
}
