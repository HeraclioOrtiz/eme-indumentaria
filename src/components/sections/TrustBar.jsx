import { CLIENTS } from '@/utils/constants'

export default function TrustBar() {
  // Duplicar logos 2x para efecto marquee continuo
  const logos = [...CLIENTS, ...CLIENTS]

  return (
    <section className="border-y border-border-subtle bg-surface/50 py-6 overflow-hidden">
      <div
        className="flex w-max items-center gap-12 animate-marquee hover:[animation-play-state:paused]"
      >
        {logos.map((client, i) => (
          <img
            key={`${client.name}-${i}`}
            src={client.logo}
            alt={`Logo ${client.name}`}
            className="h-10 w-auto object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-12"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  )
}
