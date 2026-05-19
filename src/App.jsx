import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProgressProvider } from './context/ProgressContext'
import Landing from './pages/Landing'
import Unit1 from './pages/Unit1'
import Unit2 from './pages/Unit2'
import Module from './pages/Module'
import ExamPractice from './pages/ExamPractice'
import Glossary from './pages/Glossary'
import CommandWords from './pages/CommandWords'
import Teacher from './pages/Teacher'

export default function App() {
  return (
    <ProgressProvider>
      <BrowserRouter basename="/11-ait-atar-course">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/unit/1" element={<Unit1 />} />
          <Route path="/unit/2" element={<Unit2 />} />
          <Route path="/module/:id" element={<Module />} />
          <Route path="/exam-practice" element={<ExamPractice />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/command-words" element={<CommandWords />} />
          <Route path="/teacher" element={<Teacher />} />
        </Routes>
      </BrowserRouter>
    </ProgressProvider>
  )
}
