import type { AudioRecording } from '../../types/raga'

export function RagaAudio({ recording, ragaName }: { recording: AudioRecording; ragaName: string }) {
  return <section aria-labelledby={`${ragaName}-recording-title`}>
    <h3 className="font-display text-2xl font-bold" id={`${ragaName}-recording-title`}>{recording.title}</h3>
    {recording.status === 'available' && recording.src ? <><audio aria-label={`${ragaName} recording`} className="mt-5 w-full" controls preload="metadata"><source src={recording.src} />Your browser does not support the audio element.</audio><dl className="mt-6 grid gap-5 sm:grid-cols-2">
      <div><dt className="font-bold">Duration</dt><dd className="mt-1 text-teal-700">{recording.duration ?? 'Not provided'}</dd></div>
      <div><dt className="font-bold">Performer</dt><dd className="mt-1 text-teal-700">{recording.performer}</dd></div>
      <div><dt className="font-bold">Recording credits</dt><dd className="mt-1 text-teal-700">{recording.credits}</dd></div>
      <div><dt className="font-bold">Transcript or listening notes</dt><dd className="mt-1 text-teal-700">{recording.listeningNotes}</dd></div>
    </dl></> : <div className="mt-5 border-l-2 border-gold-700 bg-sage-100/45 p-6"><p className="font-bold">The listening library is growing</p><p className="mt-2 text-sm leading-6 text-teal-700">Approved recordings, performer credits, and listening notes will be added here as they become available. Audio will use keyboard-accessible controls and will never play automatically.</p></div>}
  </section>
}
