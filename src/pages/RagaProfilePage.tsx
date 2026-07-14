import { Navigate, useParams } from 'react-router-dom'
import { RagaProfile } from '../components/raga/RagaProfile'
import { ragas } from '../data/ragas'

export function RagaProfilePage() {
  const { slug } = useParams()
  const index = ragas.findIndex((raga) => raga.slug === slug)
  if (index < 0) return <Navigate to="/not-found" replace />
  return <RagaProfile raga={ragas[index]} index={index} />
}
