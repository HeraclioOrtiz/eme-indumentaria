import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'
import { fadeInUp, staggerContainer, defaultViewport } from '@/utils/motion'
import { NAV_LINKS, CONTACT_INFO } from '@/utils/constants'
import Container from '@/components/ui/Container'

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="relative border-t border-border-subtle bg-surface/50">
      {/* Gradient top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-eme-red/20 to-transparent" />

      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:py-16"
        >
          {/* Logo + Descripción */}
          <motion.div variants={fadeInUp}>
            <img
              src="/assets/brand/eme-logo.png"
              alt="EME Indumentaria"
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm leading-relaxed text-text-muted max-w-xs">
              Fábrica textil industrial en Bahía Blanca. Indumentaria deportiva
              y corporativa a medida con más de 18 años de trayectoria.
            </p>
          </motion.div>

          {/* Links rápidos */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-text-muted transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 bg-eme-red transition-all duration-200 group-hover:w-3" />
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/assets/catalog/catalogo-eme-2024.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-sm text-text-muted transition-colors hover:text-white"
                >
                  <span className="h-px w-0 bg-eme-red transition-all duration-200 group-hover:w-3" />
                  Catálogo PDF
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contacto + Redes */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider mb-4">
              Contacto
            </h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>{CONTACT_INFO.address}</li>
              <li>{CONTACT_INFO.phone}</li>
              <li>{CONTACT_INFO.email}</li>
              <li>{CONTACT_INFO.hours}</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de EME Indumentaria"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle text-text-muted transition-all duration-200 hover:border-eme-red/30 hover:text-white hover:scale-110"
              >
                <Instagram size={16} />
              </a>
              <a
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp de EME Indumentaria"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle text-text-muted transition-all duration-200 hover:border-eme-red/30 hover:text-white hover:scale-110"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <div className="border-t border-border-subtle py-6 text-center text-xs text-text-muted">
          &copy; {new Date().getFullYear()} EME Indumentaria. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  )
}
