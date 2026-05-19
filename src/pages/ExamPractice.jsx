import Navbar from '../components/Navbar'
import UsernameModal from '../components/UsernameModal'

const sections = [
  {
    number: 1,
    title: 'Multiple Choice',
    description: 'Select the correct answer from four options. Each question is worth one mark.',
  },
  {
    number: 2,
    title: 'Short Answer',
    description: 'Answer questions using concise written responses. Marks are allocated per question.',
  },
  {
    number: 3,
    title: 'Extended Answer',
    description: 'Write detailed responses demonstrating in-depth understanding. Higher mark questions.',
  },
  {
    number: 4,
    title: 'Scenario',
    description: 'Apply your knowledge to a given scenario. Analyse, evaluate, and recommend solutions.',
  },
]

export default function ExamPractice() {
  return (
    <>
      <UsernameModal />
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-2">Exam Practice</h1>
          <p className="text-sm text-neutral-600">
            Practice under exam conditions. Content coming soon for all sections.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {sections.map(section => (
            <div
              key={section.number}
              className="bg-neutral-50 border border-neutral-200 rounded-xl p-6"
            >
              <p className="text-xs font-medium text-neutral-400 mb-1 uppercase tracking-wide">
                Section {section.number}
              </p>
              <h2 className="text-base font-semibold text-neutral-900 mb-2">{section.title}</h2>
              <p className="text-sm text-neutral-500 mb-4 leading-relaxed">{section.description}</p>
              <span className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-500">
                Coming soon
              </span>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
