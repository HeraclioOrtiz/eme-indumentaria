import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageSquareQuote } from 'lucide-react'
import { fadeInUp, scaleIn, staggerContainer, staggerFast, defaultViewport } from '@/utils/motion'
import { TESTIMONIALS, GALLERY_IMAGES } from '@/utils/constants'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Skeleton from '@/components/ui/Skeleton'

function TestimonialCard({ testimonial }) {
  return (
    <motion.blockquote
      variants={fadeInUp}
      className="group flex h-full flex-col rounded-2xl border border-border-subtle bg-surface p-6 lg:p-8 transition-all duration-300 hover:border-eme-red/20 hover:bg-surface-elevated"
    >
      <MessageSquareQuote className="mb-4 h-7 w-7 flex-shrink-0 text-eme-red/30 transition-colors duration-300 group-hover:text-eme-red/60" />
      <p className="flex-1 text-base italic leading-relaxed text-text-secondary">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <footer className="mt-5 border-t border-border-subtle pt-4 flex items-center gap-3">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-eme-red/10 font-heading text-sm font-bold text-eme-red">
          {testimonial.author.charAt(0)}
        </div>
        <div>
          <p className="font-heading text-sm font-bold uppercase">{testimonial.author}</p>
          <p className="text-xs text-text-muted">{testimonial.role}</p>
        </div>
      </footer>
    </motion.blockquote>
  )
}

function GalleryImage({ image }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <motion.div
      variants={scaleIn}
      className="group relative aspect-[3/4] overflow-hidden rounded-xl"
    >
      {!loaded && <Skeleton className="absolute inset-0" />}
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-all duration-500 group-hover:scale-110 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
      {/* Hover overlay — texto elevado para no chocar con logos del catálogo */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="px-4 text-center text-xs font-medium text-white leading-relaxed">{image.alt}</p>
      </div>
    </motion.div>
  )
}

export default function SocialProof() {
  return (
    <section id="trabajos" className="py-(--spacing-section-mobile) lg:py-(--spacing-section) bg-surface/30">
      <Container>
        {/* Testimonios */}
        <SectionHeading
          badge="Confianza comprobada"
          title="Lo Que Dicen Nuestros Clientes"
          subtitle="Empresas y clubes que confían en EME."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-20 grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto"
        >
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.author} testimonial={t} />
          ))}
        </motion.div>

        {/* Galería */}
        <SectionHeading
          badge="Portfolio"
          title="Nuestros Trabajos"
          subtitle="Una selección de proyectos recientes."
        />

        <motion.div
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {GALLERY_IMAGES.map((image) => (
            <GalleryImage key={image.src} image={image} />
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
