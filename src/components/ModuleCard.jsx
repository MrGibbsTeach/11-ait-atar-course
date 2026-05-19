import { Link } from 'react-router-dom'
import { useProgress } from '../context/ProgressContext'
import ProgressBar from './ProgressBar'

const statusConfig = {
  not_started: { label: 'Not started', className: 'bg-neutral-100 text-neutral-500' },
  in_progress: { label: 'In progress', className: 'bg-indigo-50 text-indigo-600' },
  complete: { label: 'Complete', className: 'bg-green-50 text-green-700' },
}

export default function ModuleCard({ module }) {
  const { getModuleStatus, getModulePercent } = useProgress()
  const status = getModuleStatus(module.id)
  const percent = getModulePercent(module.id)
  const { label, className } = statusConfig[status]

  return (
    <Link
      to={`/module/${module.id}`}
      className="block bg-neutral-50 border border-neutral-200 rounded-xl p-5 hover:border-indigo-300 hover:shadow-sm transition-all group"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <p className="text-xs font-medium text-neutral-400 mb-0.5">
            Module {module.id}
          </p>
          <h3 className="text-sm font-semibold text-neutral-900 group-hover:text-indigo-600 transition-colors leading-snug">
            {module.title}
          </h3>
        </div>
        <span className={`shrink-0 text-xs font-medium px-2 py-1 rounded-full ${className}`}>
          {label}
        </span>
      </div>
      <p className="text-xs text-neutral-500 mb-3 leading-relaxed">
        {module.shortDescription}
      </p>
      <ProgressBar percent={percent} />
      <p className="text-xs text-neutral-400 mt-1.5">{percent}% complete</p>
    </Link>
  )
}
