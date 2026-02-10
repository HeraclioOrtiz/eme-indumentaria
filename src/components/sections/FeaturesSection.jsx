import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/utils/motion'
import { FEATURES } from '@/utils/constants'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import useAnimatedCounter from '@/hooks/useAnimatedCounter'

function FeatureCard({ feature }) {
  const Icon = feature.icon
  const hasCounter = feature.counter != null
  const { count, ref } = useAnimatedCounter(hasCounter ? feature.counter : 0)

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      className="rounded-2xl border border-border-subtle bg-surface p-6 lg:p-8"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-eme-red/10">
        <Icon className="h-6 w-6 text-eme-red" />
      </div>
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
    </motion.div>
  )
}

export default function FeaturesSection() {
  return (
    <section id="nosotros" className="py-(--spacing-section-mobile) lg:py-(--spacing-section) bg-primary">
      <Container size="narrow">
        <SectionHeading
          title="¿Por Qué EME?"
          subtitle="Más de 18 años fabricando indumentaria que hace la diferencia."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
