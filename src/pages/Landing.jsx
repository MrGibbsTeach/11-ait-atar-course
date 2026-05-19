import { Link } from 'react-router-dom'
import UsernameModal from '../components/UsernameModal'

export default function Landing() {
  return (
    <>
      <UsernameModal />
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-indigo-600 mb-3 tracking-wide uppercase">
              Applied Information Technology
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-4">
              Year 11 AIT ATAR
            </h1>
            <p className="text-base text-neutral-500 max-w-lg mx-auto">
              Course content aligned to the SCSA Year 11 AIT ATAR syllabus for Unit 1 and Unit 2.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Link
              to="/unit/1"
              className="group block bg-neutral-50 border border-neutral-200 rounded-xl p-8 hover:border-indigo-300 hover:shadow-md transition-all"
            >
              <div className="text-xs font-medium text-neutral-400 mb-2 uppercase tracking-wide">
                Unit 1
              </div>
              <h2 className="text-xl font-semibold text-neutral-900 group-hover:text-indigo-600 transition-colors mb-3 leading-snug">
                Media Information and Communication Technologies
              </h2>
              <p className="text-sm text-neutral-500 leading-relaxed mb-5">
                Digital media creation, hardware, social impacts, and project management.
              </p>
              <div className="flex items-center text-sm font-medium text-indigo-600 gap-1.5">
                View modules
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link
              to="/unit/2"
              className="group block bg-neutral-50 border border-neutral-200 rounded-xl p-8 hover:border-indigo-300 hover:shadow-md transition-all"
            >
              <div className="text-xs font-medium text-neutral-400 mb-2 uppercase tracking-wide">
                Unit 2
              </div>
              <h2 className="text-xl font-semibold text-neutral-900 group-hover:text-indigo-600 transition-colors mb-3 leading-snug">
                Digital Technologies in Business
              </h2>
              <p className="text-sm text-neutral-500 leading-relaxed mb-5">
                Data management, networks, cybersecurity, and digital business solutions.
              </p>
              <div className="flex items-center text-sm font-medium text-indigo-600 gap-1.5">
                View modules
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              { to: '/exam-practice', label: 'Exam Practice' },
              { to: '/glossary', label: 'Glossary' },
              { to: '/command-words', label: 'Command Words' },
            ].map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-neutral-600 px-4 py-2 rounded-lg border border-neutral-200 hover:border-neutral-300 hover:text-neutral-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
