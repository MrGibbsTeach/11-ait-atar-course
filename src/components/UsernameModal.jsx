import { useState } from 'react'
import { useProgress } from '../context/ProgressContext'

export default function UsernameModal() {
  const { showUsernameModal, setUsername } = useProgress()
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  if (!showUsernameModal) return null

  function handleSubmit(e) {
    e.preventDefault()
    const trimmed = value.trim()
    if (!trimmed) {
      setError('Please enter a name or student number.')
      return
    }
    setUsername(trimmed)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-8">
        <h2 className="text-xl font-semibold text-neutral-900 mb-2">
          Welcome to Year 11 AIT ATAR
        </h2>
        <p className="text-sm text-neutral-600 mb-6">
          Enter a username to track your progress. Use your student number or any name — no email required.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-neutral-700 mb-1.5">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={value}
              onChange={e => { setValue(e.target.value); setError('') }}
              placeholder="e.g. student12345"
              className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              autoFocus
            />
            {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
          </div>
          <button
            type="submit"
            className="w-full py-2.5 px-4 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Start Learning
          </button>
        </form>
      </div>
    </div>
  )
}
