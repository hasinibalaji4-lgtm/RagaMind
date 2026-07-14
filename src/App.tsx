import { Route, Routes } from 'react-router-dom'
import { SiteLayout } from './layouts/SiteLayout'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Evidence } from './pages/Evidence'
import { Experts } from './pages/Experts'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Pilot } from './pages/Pilot'
import { Ragas } from './pages/Ragas'
import { RagaProfilePage } from './pages/RagaProfilePage'
import { Resources } from './pages/Resources'

export default function App() {
  return <Routes><Route element={<SiteLayout />}><Route index element={<Home />} /><Route path="about" element={<About />} /><Route path="evidence" element={<Evidence />} /><Route path="ragas" element={<Ragas />} /><Route path="ragas/:slug" element={<RagaProfilePage />} /><Route path="experts" element={<Experts />} /><Route path="pilot" element={<Pilot />} /><Route path="resources" element={<Resources />} /><Route path="contact" element={<Contact />} /><Route path="*" element={<NotFound />} /></Route></Routes>
}
