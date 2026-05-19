import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { username } = useProgress()
  const location = useLocation()

  const navLinks = [
    { to: '/unit/1', label: 'Unit 1' },
    { to: '/unit/2', label: 'Unit 2' },
    { to: '/exam-practice', label: 'Exam Practice' },
    { to: '/glossary', label: 'Glossary' },
    { to: '/command-words', label: 'Command Words' },
  ]

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors px-1 py-0.5 border-b-2 ${
      isActive
        ? 'text-indigo-600 border-indigo-600'
        : 'text-neutral-600 border-transparent hover:text-neutral-900 hover:border-neutral-300'
    }`

  return (
    <nav className="bg-white border-b border-neutral-200 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link
            to="/"
            className="text-sm font-semibold text-neutral-900 whitespace-nowrap shrink-0"
          >
            Year 11 AIT ATAR
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <NavLink key={link.to} to={link.to} className={linkClass} end>
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            {username && (
              <span className="text-xs text-neutral-500 truncate max-w-[120px]">
                {username}
              </span>
            )}
            <NavLink
              to="/teacher"
              className={({ isActive }) =>
                `text-xs font-medium px-2.5 py-1.5 rounded-lg border transition-colors ${
                  isActive
                    ? 'bg-neutral-900 text-white border-neutral-900'
                    : 'text-neutral-500 border-neutral-200 hover:border-neutral-400 hover:text-neutral-700'
                }`
              }
            >
              Teacher
            </NavLink>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-600'
                      : 'text-neutral-700 hover:bg-neutral-100'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/teacher"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-neutral-900 text-white'
                    : 'text-neutral-500 hover:bg-neutral-100'
                }`
              }
            >
              Teacher
            </NavLink>
            {username && (
              <p className="px-3 py-2 text-xs text-neutral-400">
                Signed in as: {username}
              </p>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
