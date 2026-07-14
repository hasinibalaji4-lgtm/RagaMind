import { Navigate, useParams } from 'react-router-dom'
import { ExpertProfile } from '../components/expert/ExpertProfile'
import { experts } from '../data/experts'

export function ExpertProfilePage() {
  const { slug } = useParams()
  const expert = experts.find((item) => item.slug === slug)
  if (!expert) return <Navigate to="/not-found" replace />
  return <ExpertProfile expert={expert} />
}
