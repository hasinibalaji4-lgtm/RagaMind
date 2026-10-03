import type { Raga, RagaTheme } from '../types/raga'

const scientificContext = 'Research on music more broadly suggests that familiarity, personalization, attention, active participation, and emotional meaning can shape the listening experience. Current evidence does not establish that this specific raga produces a particular clinical outcome.'

const limitations = 'These descriptions reflect traditional and teacher-informed perspectives. They do not establish a predictable medical or psychological effect, and individual responses may differ.'

const listeningGuidance = [
  'Find a comfortable, quiet setting.',
  'Listen without needing to identify every musical detail.',
  'Notice changes in attention, imagery, memory, emotion, or physical tension.',
  'There is no correct emotional response.',
  'Stop listening if the experience is uncomfortable.',
]

const reflectionPrompts = [
  'What emotions or memories arose while listening?',
  'Did the music feel calming, energizing, unfamiliar, or something else?',
  'Which musical qualities stood out?',
  'Did your response change during the recording?',
  'Did cultural familiarity affect your experience?',
]

const ragaSeeds: { slug: string; name: string; experienceTheme: RagaTheme; association: string; teacherNotes: string }[] = [
  { slug: 'neelambari', name: 'Neelambari', experienceTheme: 'Rest and Relaxation', association: 'Traditionally associated with rest, lullabies, and relaxation in Carnatic musical practice.', teacherNotes: 'Traditionally associated with sleep and relaxation.' },
  { slug: 'bowli', name: 'Bowli', experienceTheme: 'Morning and Renewal', association: 'Traditionally associated with sunrise, renewal, and the beginning of the day.', teacherNotes: 'Traditionally associated with sunrise and the beginning of the day.' },
  { slug: 'anandabhairavi', name: 'Anandabhairavi', experienceTheme: 'Joy and Warmth', association: 'Traditionally associated with happiness, warmth, and expressive tenderness.', teacherNotes: 'Traditionally associated with happiness.' },
  { slug: 'sahana', name: 'Sahana', experienceTheme: 'Compassion and Calm', association: 'Associated with karuna rasa and often described as calming, compassionate, or consoling.', teacherNotes: 'Associated with karuna rasa, calming, and placation.' },
  { slug: 'atana', name: 'Atana', experienceTheme: 'Strength and Confidence', association: 'Associated with veera rasa and often described as strong, confident, energetic, or challenging.', teacherNotes: 'Associated with veeram, strength, power, and challenge.' },
]

export const ragas: Raga[] = ragaSeeds.map((seed, index) => ({
  id: `raga-${index + 1}`,
  ...seed,
  shortDescription: seed.association,
  traditionalBackground: 'This section will continue to grow as teacher-reviewed historical and cultural context becomes available.',
  traditionalAssociations: [
    { type: 'Traditional association', text: seed.association },
    { type: 'Teacher insight', text: seed.teacherNotes },
  ],
  musicalCharacteristics: 'Detailed musical characteristics will be added after teacher review. Scale, lineage, compositions, tala, performance time, and history are intentionally withheld until verified.',
  scientificContext,
  limitations,
  listeningGuidance,
  reflectionPrompts,
  audio: {
    status: 'coming-soon',
    title: `${seed.name} listening experience`,
    performer: 'Published with the approved recording',
    credits: 'Published with the approved recording',
    listeningNotes: 'Published with the approved recording',
  },
  references: [],
  imageStatus: 'awaiting-approved-visual',
}))
