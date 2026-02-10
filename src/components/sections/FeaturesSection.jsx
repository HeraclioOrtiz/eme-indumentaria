import { motion } from 'framer-motion'
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, defaultViewport } from '@/utils/motion'
import { FEATURES } from '@/utils/constants'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import useAnimatedCounter from '@/hooks/useAnimatedCounter'

function FeatureCard({ feature, index }) {
  const Icon = feature.icon
  const hasCounter = feature.counter != null
  const { count, ref } = useAnimatedCounter(hasCounter ? feature.counter : 0)
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      variants={isEven ? slideInLeft : slideInRight}
      className="group rounded-2xl border border-border-subtle bg-surface p-6 lg:p-8 transition-all duration-300 hover:border-eme-red/20 hover:bg-surface-elevated"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-eme-red/10 transition-all duration-300 group-hover:bg-eme-red/20 group-hover:scale-110">
          <Icon className="h-6 w-6 text-eme-red" />
        </div>

        <div className="flex-1">
          <h3 className="font-heading text-lg font-bold uppercase tracking-tight">
            {hasCounter ? (
              <>+{count} Años de Trayectoria</>
            ) : (
              feature.title
            )}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-text-muted">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function FeaturesSection() {
  return (
    <section id="nosotros" className="relative py-(--spacing-section-mobile) lg:py-(--spacing-section) bg-primary">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-dots opacity-30" />

      <Container size="narrow" className="relative">
        <SectionHeading
          badge="Nuestra propuesta"
          title="¿Por Qué EME?"
          subtitle="Más de 18 años fabricando indumentaria que hace la diferencia."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid gap-4 sm:grid-cols-2"
        >
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
