import { TimelineMilestone } from './TimelineMilestone'

const milestones = [
  { title: 'Childhood music', note: '[FOUNDER-REVIEWED CONTEXT NEEDED]' },
  { title: '13+ years of Carnatic vocal training', note: '[TRAINING DETAILS AND CONTEXT NEEDED]' },
  { title: 'Interest in neuroscience', note: '[FOUNDER-REVIEWED CONTEXT NEEDED]' },
  { title: 'Research', note: '[APPROVED RESEARCH-JOURNEY SUMMARY NEEDED]' },
  { title: 'Expert interviews', note: '[APPROVED, NON-CONFIDENTIAL SUMMARY NEEDED]' },
  { title: 'Senior living pilot', note: '[PLANNED FUTURE MILESTONE — DETAILS NEEDED]' },
  { title: 'RagaMind', note: '[FOUNDER-REVIEWED PROJECT REFLECTION NEEDED]' },
]

export function JourneyTimeline() {
  return <ol className="mt-12 max-w-4xl">{milestones.map((milestone, index) => <TimelineMilestone key={milestone.title} index={index} title={milestone.title} note={milestone.note} isLast={index === milestones.length - 1} />)}</ol>
}
