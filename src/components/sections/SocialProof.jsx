import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageSquareQuote } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/utils/motion'
import { TESTIMONIALS, GALLERY_IMAGES } from '@/utils/constants'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Skeleton from '@/components/ui/Skeleton'

function TestimonialCard({ testimonial }) {
  return (
    <motion.blockquote
      variants={fadeInUp}
      className="rounded-2xl border border-border-subtle bg-surface p-6 lg:p-8"
    >
      <MessageSquareQuote className="mb-4 h-8 w-8 text-eme-red/40" />
      <p className="text-base italic leading-relaxed text-text-secondary">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <footer className="mt-4 border-t border-border-subtle pt-4">
        <p className="font-heading text-sm font-bold uppercase">{testimonial.author}</p>
        <p className="text-xs text-text-muted">{testimonial.role}</p>
      </footer>
    </motion.blockquote>
  )
}

function GalleryImage({ image }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
      {!loaded && <Skeleton className="absolute inset-0" />}
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  )
}

export default function SocialProof() {
  return (
    <section id="trabajos" className="py-(--spacing-section-mobile) lg:py-(--spacing-section) bg-surface/30">
      <Container>
        {/* Testimonios */}
        <SectionHeading
          title="Lo Que Dicen Nuestros Clientes"
          subtitle="Empresas y clubes que confían en EME."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-20 grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto"
        >
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.author} testimonial={t} />
          ))}
        </motion.div>

        {/* Galería */}
        <SectionHeading
          title="Nuestros Trabajos"
          subtitle="Una selección de proyectos recientes."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
        >
          {GALLERY_IMAGES.map((image) => (
            <motion.div key={image.src} variants={fadeInUp}>
              <GalleryImage image={image} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
