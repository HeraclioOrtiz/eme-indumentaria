import { CLIENTS } from '@/utils/constants'

export default function TrustBar() {
  const logos = [...CLIENTS, ...CLIENTS]

  return (
    <section className="relative overflow-hidden py-8">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-eme-red/30 to-transparent" />

      {/* Bottom gradient border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />

      {/* Label */}
      <p className="mb-5 text-center text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
        Confían en nosotros
      </p>

      {/* Marquee */}
      <div className="flex w-max items-center gap-16 animate-marquee hover:[animation-play-state:paused]">
        {logos.map((client, i) => (
          <img
            key={`${client.name}-${i}`}
            src={client.logo}
            alt={`Logo ${client.name}`}
            className="h-10 w-auto object-contain opacity-40 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 hover:scale-110 sm:h-12"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  )
}
