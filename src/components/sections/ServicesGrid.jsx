import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, scaleOnHover } from '@/utils/motion'
import { cn } from '@/utils/cn'
import SectionHeading from '@/components/ui/SectionHeading'
import Container from '@/components/ui/Container'
import { SERVICES } from '@/utils/constants'

function ServiceCard({ service }) {
  const Icon = service.icon

  return (
    <motion.article
      variants={fadeInUp}
      className={cn(
        'group relative overflow-hidden rounded-2xl',
        'min-h-[280px] lg:min-h-[320px]',
        service.span
      )}
    >
      {/* Background image */}
      <motion.div
        whileHover={scaleOnHover}
        className="absolute inset-0"
      >
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 transition-all duration-300 group-hover:from-black/95 group-hover:via-black/60" />

      {/* Content */}
      <div className="relative flex h-full flex-col justify-end p-6 lg:p-8">
        <Icon className="mb-3 h-8 w-8 text-eme-red" />
        <h3 className="font-heading text-xl font-bold uppercase tracking-tight lg:text-2xl">
          {service.title}
        </h3>
        <p className="mt-2 max-w-sm text-sm text-text-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {service.description}
        </p>
      </div>
    </motion.article>
  )
}

export default function ServicesGrid() {
  return (
    <section id="servicios" className="py-(--spacing-section-mobile) lg:py-(--spacing-section)">
      <Container>
        <SectionHeading
          title="Nuestros Servicios"
          subtitle="Soluciones integrales de producción textil para tu marca."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2"
        >
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
