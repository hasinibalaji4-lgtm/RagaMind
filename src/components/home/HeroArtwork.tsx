export function HeroArtwork() {
  return <div className="relative mx-auto aspect-square w-full max-w-lg" aria-hidden="true">
    <div className="absolute inset-[8%] rounded-full border border-teal-900/15" />
    <div className="absolute inset-[18%] rounded-full border border-gold/50" />
    <div className="absolute left-[13%] top-[24%] h-[32%] w-[32%] rounded-full bg-sage-300/70" />
    <div className="absolute bottom-[16%] right-[12%] h-[38%] w-[38%] rounded-full bg-teal-900" />
    <div className="absolute right-[20%] top-[12%] h-[18%] w-[18%] rounded-full border-2 border-gold bg-ivory" />
    <svg className="absolute inset-0 h-full w-full text-gold" viewBox="0 0 500 500" fill="none">
      <path d="M65 300c62-98 113 68 174-36s120-96 196 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M91 330c57-56 96 40 149-17s104-65 168-16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity=".55" />
    </svg>
  </div>
}
