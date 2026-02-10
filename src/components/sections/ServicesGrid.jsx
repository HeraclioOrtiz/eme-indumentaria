import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { cardReveal, staggerSlow, defaultViewport } from '@/utils/motion'
import { cn } from '@/utils/cn'
import SectionHeading from '@/components/ui/SectionHeading'
import Container from '@/components/ui/Container'
import { SERVICES } from '@/utils/constants'

function ServiceCard({ service, index }) {
  const Icon = service.icon
  const cardRef = useRef(null)
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [5, -5]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-5, 5]), { stiffness: 200, damping: 20 })

  function handleMouseMove(e) {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width)
    mouseY.set((e.clientY - rect.top) / rect.height)
  }

  function handleMouseLeave() {
    mouseX.set(0.5)
    mouseY.set(0.5)
  }

  return (
    <motion.article
      ref={cardRef}
      variants={cardReveal}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={cn(
        'group relative overflow-hidden rounded-2xl',
        'min-h-[280px] lg:min-h-[340px]',
        'border border-transparent hover:border-eme-red/30 focus-visible:ring-2 focus-visible:ring-eme-red/50 focus-visible:outline-none transition-colors duration-500',
        service.span
      )}
    >
      {/* Background image */}
      <motion.div
        className="absolute inset-0"
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-all duration-500 group-hover:from-black/95 group-hover:via-black/60" />

      {/* Index number — top right, no interfiere con contenido */}
      <span className="absolute top-3 right-4 font-heading text-5xl font-black text-white/[0.03] group-hover:text-eme-red/[0.08] transition-colors duration-500 select-none pointer-events-none">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Content — padding-bottom mayor para separar del borde */}
      <div className="relative flex h-full flex-col justify-end p-6 pb-8 lg:p-8 lg:pb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-eme-red/20 transition-all duration-300 group-hover:bg-eme-red/30 group-hover:scale-110 group-hover:rotate-3">
            <Icon className="h-5 w-5 text-eme-red" />
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-eme-red/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        <h3 className="font-heading text-xl font-bold uppercase tracking-tight lg:text-2xl">
          {service.title}
        </h3>

        <p className="mt-2 max-w-sm text-sm leading-relaxed text-text-secondary translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {service.description}
        </p>
      </div>
    </motion.article>
  )
}

export default function ServicesGrid() {
  return (
    <section id="servicios" className="relative py-(--spacing-section-mobile) lg:py-(--spacing-section)">
      {/* Subtle grid dots background */}
      <div className="absolute inset-0 grid-dots opacity-50" />

      <Container className="relative">
        <SectionHeading
          badge="Lo que hacemos"
          title="Nuestros Servicios"
          subtitle="Soluciones integrales de producción textil para tu marca."
        />

        <motion.div
          variants={staggerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2"
        >
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
