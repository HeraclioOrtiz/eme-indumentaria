import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { staggerFast, fadeInUp, fadeIn, blurIn } from '@/utils/motion'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'

function SplitText({ text, className }) {
  const words = text.split(' ')
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 40, rotateX: 40 },
            visible: {
              opacity: 1,
              y: 0,
              rotateX: 0,
              transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 },
            },
          }}
          className="inline-block mr-[0.25em]"
          style={{ perspective: '600px' }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

export default function HeroSection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 0.85])

  return (
    <section ref={sectionRef} className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image — parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: imageY, scale: imageScale }}
      >
        <img
          src="/assets/hero/hero-athletic-green.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-right"
        />
      </motion.div>

      {/* Gradient overlay — más oscuro a la izquierda para legibilidad del texto */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-primary/30"
        style={{ opacity: overlayOpacity }}
      />
      {/* Gradient vertical adicional para fade inferior */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary/70" />

      {/* Grain texture */}
      <div className="grain-overlay absolute inset-0 pointer-events-none" />

      {/* Fade to black bottom — seamless transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-primary via-primary/80 to-transparent" />

      {/* Decorative geometric elements */}
      <div className="absolute top-1/4 right-8 lg:right-16 w-px h-32 bg-gradient-to-b from-transparent via-eme-red/40 to-transparent" />
      <div className="absolute bottom-1/3 left-8 lg:left-16 w-24 h-px bg-gradient-to-r from-eme-red/40 to-transparent" />

      {/* Content */}
      <Container className="relative z-10 py-32">
        <motion.div
          variants={staggerFast}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div variants={fadeIn} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-eme-red/30 bg-eme-red/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-eme-red animate-pulse-glow">
              <span className="h-1.5 w-1.5 rounded-full bg-eme-red animate-pulse" />
              Fábrica Textil Industrial — Bahía Blanca
            </span>
          </motion.div>

          {/* Headline — split text reveal */}
          <motion.h1
            variants={fadeInUp}
            className="font-heading text-5xl font-black uppercase italic leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl"
          >
            <SplitText text="Tu Marca," />
            <br />
            <SplitText text="Nuestra Pasión" className="text-eme-red" />
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={blurIn}
            className="mt-8 max-w-xl text-lg text-text-secondary sm:text-xl leading-relaxed"
          >
            Diseñamos y fabricamos indumentaria deportiva y corporativa
            a medida. Del concepto al producto terminado, con la calidad
            que tu marca merece.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button href="#contacto" size="lg" glow>
              Pedí tu Presupuesto
            </Button>
            <Button
              href="/assets/catalog/catalogo-eme-2024.pdf"
              variant="secondary"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Descargar Catálogo
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={fadeIn}
            className="mt-12 flex items-center gap-6 text-sm text-text-muted"
          >
            <span className="flex items-center gap-2">
              <span className="font-heading text-2xl font-bold text-text-primary">+18</span>
              años de experiencia
            </span>
            <span className="h-4 w-px bg-border-subtle" />
            <span className="flex items-center gap-2">
              <span className="font-heading text-2xl font-bold text-text-primary">+120</span>
              clientes activos
            </span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
