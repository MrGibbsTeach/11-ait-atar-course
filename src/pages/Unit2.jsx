import Navbar from '../components/Navbar'
import ModuleCard from '../components/ModuleCard'
import UsernameModal from '../components/UsernameModal'
import { unit2Modules } from '../data/modules'

export default function Unit2() {
  return (
    <>
      <UsernameModal />
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className="mb-8">
          <p className="text-xs font-medium text-indigo-600 mb-1 uppercase tracking-wide">Unit 2</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-3">
            Digital Technologies in Business
          </h1>
          <p className="text-sm text-neutral-600 leading-relaxed max-w-2xl">
            This unit focuses on the skills, principles and practices associated with various types of documents and communications. Students identify the components and configuration of networks to meet the needs of a business. They design digital solutions for clients, being mindful of the various impacts of technologies within legal, ethical and social boundaries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {unit2Modules.map(module => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </main>
    </>
  )
}
