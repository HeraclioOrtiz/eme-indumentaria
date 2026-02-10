import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/utils/motion'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image + overlay */}
      <div className="absolute inset-0">
        <img
          src="/assets/hero/hero-poster.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/60 to-primary" />
      </div>

      {/* Content */}
      <Container className="relative z-10 py-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p
            variants={fadeInUp}
            className="mb-4 text-sm font-medium uppercase tracking-widest text-eme-red"
          >
            Fábrica Textil Industrial — Bahía Blanca
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="font-heading text-5xl font-black uppercase italic leading-none tracking-tight sm:text-6xl lg:text-7xl"
          >
            Tu Marca,
            <br />
            <span className="text-eme-red">Nuestra Pasión</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-xl text-lg text-text-secondary sm:text-xl"
          >
            Diseñamos y fabricamos indumentaria deportiva y corporativa
            a medida. Del concepto al producto terminado, con la calidad
            que tu marca merece.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button href="#contacto" size="lg">
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
        </motion.div>
      </Container>
    </section>
  )
}
