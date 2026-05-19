import Navbar from '../components/Navbar'
import ModuleCard from '../components/ModuleCard'
import UsernameModal from '../components/UsernameModal'
import { unit1Modules } from '../data/modules'

export default function Unit1() {
  return (
    <>
      <UsernameModal />
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className="mb-8">
          <p className="text-xs font-medium text-indigo-600 mb-1 uppercase tracking-wide">Unit 1</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-3">
            Media Information and Communication Technologies
          </h1>
          <p className="text-sm text-neutral-600 leading-relaxed max-w-2xl">
            This unit focuses on the use of digital technologies to create and manipulate digital media. Students use a range of applications to create visual and audio communications. They examine trends in digital media transmissions and implications arising from the use of these technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {unit1Modules.map(module => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </main>
    </>
  )
}
