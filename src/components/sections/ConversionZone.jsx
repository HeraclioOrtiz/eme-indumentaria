import { motion } from 'framer-motion'
import { MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, scaleInBounce, defaultViewport } from '@/utils/motion'
import { CONTACT_INFO } from '@/utils/constants'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import useFormSubmit from '@/hooks/useFormSubmit'

function FormField({ label, name, type = 'text', formData, errors, onChange, ...props }) {
  const isTextarea = type === 'textarea'
  const Component = isTextarea ? 'textarea' : 'input'

  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-text-secondary">
        {label}
      </label>
      <Component
        id={name}
        name={name}
        type={isTextarea ? undefined : type}
        value={formData[name]}
        onChange={onChange}
        rows={isTextarea ? 4 : undefined}
        className={`w-full rounded-lg border bg-surface px-4 py-3 text-sm text-text-primary placeholder:text-text-muted transition-all duration-300 focus:outline-none focus:border-eme-red focus:shadow-[0_0_0_3px_oklch(0.55_0.24_27/0.15)] ${
          errors[name] ? 'border-red-500 shadow-[0_0_0_3px_oklch(0.6_0.2_25/0.15)]' : 'border-border-subtle'
        } ${isTextarea ? 'resize-none' : ''}`}
        {...props}
      />
      {errors[name] && (
        <motion.p
          role="alert"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1 text-xs font-medium text-red-300"
        >
          {errors[name]}
        </motion.p>
      )}
    </div>
  )
}

export default function ConversionZone() {
  const { formData, errors, status, handleChange, handleSubmit } = useFormSubmit()

  return (
    <section id="contacto" className="relative py-(--spacing-section-mobile) lg:py-(--spacing-section)">
      {/* Diagonal top divider */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-surface/30 clip-diagonal" />

      <Container className="relative">
        <SectionHeading
          badge="Hablemos"
          title="Contactanos"
          subtitle="Contanos tu proyecto y te asesoramos sin compromiso."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid gap-8 lg:grid-cols-2 lg:gap-12"
        >
          {/* Info + Mapa */}
          <motion.div variants={slideInLeft} className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-eme-red/10 transition-colors group-hover:bg-eme-red/20">
                  <MapPin className="h-4 w-4 text-eme-red" />
                </div>
                <div>
                  <p className="font-medium text-text-primary">{CONTACT_INFO.address}</p>
                  <p className="text-sm text-text-muted">{CONTACT_INFO.phone}</p>
                  <p className="text-sm text-text-muted">{CONTACT_INFO.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-eme-red/10 transition-colors group-hover:bg-eme-red/20">
                  <Clock className="h-4 w-4 text-eme-red" />
                </div>
                <p className="text-text-secondary pt-1.5">{CONTACT_INFO.hours}</p>
              </div>
            </div>

            {/* Google Maps */}
            <div className="overflow-hidden rounded-xl border border-border-subtle aspect-video">
              <iframe
                src={CONTACT_INFO.mapEmbedUrl}
                title="Ubicación EME Indumentaria en Google Maps"
                className="h-full w-full grayscale invert"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.div variants={slideInRight}>
            {status === 'success' ? (
              <motion.div
                variants={scaleInBounce}
                initial="hidden"
                animate="visible"
                className="flex h-full flex-col items-center justify-center rounded-2xl border border-green-500/20 bg-surface p-8 text-center"
              >
                <CheckCircle className="mb-4 h-16 w-16 text-green-500" />
                <h3 className="font-heading text-xl font-bold uppercase">
                  Mensaje Enviado
                </h3>
                <p className="mt-2 text-text-muted">
                  Nos pondremos en contacto con vos a la brevedad.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 rounded-2xl border border-border-subtle bg-surface p-6 lg:p-8 transition-colors duration-300 hover:border-eme-red/20"
                noValidate
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    label="Nombre *"
                    name="name"
                    formData={formData}
                    errors={errors}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                  />
                  <FormField
                    label="Empresa"
                    name="company"
                    formData={formData}
                    errors={errors}
                    onChange={handleChange}
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    label="Email *"
                    name="email"
                    type="email"
                    formData={formData}
                    errors={errors}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                  />
                  <FormField
                    label="Teléfono *"
                    name="phone"
                    type="tel"
                    formData={formData}
                    errors={errors}
                    onChange={handleChange}
                    placeholder="+54 291..."
                  />
                </div>
                <FormField
                  label="Mensaje *"
                  name="message"
                  type="textarea"
                  formData={formData}
                  errors={errors}
                  onChange={handleChange}
                  placeholder="Contanos sobre tu proyecto..."
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Enviando...
                    </span>
                  ) : (
                    <>
                      <Send size={18} />
                      Enviar Mensaje
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
