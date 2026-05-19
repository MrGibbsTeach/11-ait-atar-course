import Navbar from '../components/Navbar'
import UsernameModal from '../components/UsernameModal'

export default function CommandWords() {
  return (
    <>
      <UsernameModal />
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-3">SCSA Command Words</h1>
          <p className="text-sm text-neutral-500">
            Understanding what each command word requires you to do in an exam response.
          </p>
        </div>
        <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-8 text-center">
          <p className="text-sm text-neutral-500">Content coming soon.</p>
        </div>
      </main>
    </>
  )
}
