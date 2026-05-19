export default function ProgressBar({ percent, className = '' }) {
  return (
    <div className={`w-full bg-neutral-200 rounded-full h-1.5 ${className}`}>
      <div
        className="bg-indigo-600 h-1.5 rounded-full transition-all duration-500"
        style={{ width: `${Math.min(100, Math.max(0, percent))}%` }}
      />
    </div>
  )
}
