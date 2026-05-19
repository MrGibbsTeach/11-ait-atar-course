import Navbar from '../components/Navbar'
import UsernameModal from '../components/UsernameModal'

export default function Glossary() {
  return (
    <>
      <UsernameModal />
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-3">AIT Glossary</h1>
          <p className="text-sm text-neutral-500">Key terms and definitions for Year 11 AIT ATAR.</p>
        </div>
        <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-8 text-center">
          <p className="text-sm text-neutral-500">Glossary content coming soon.</p>
        </div>
      </main>
    </>
  )
}
