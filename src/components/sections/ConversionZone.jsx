import { motion } from 'framer-motion'
import { MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/utils/motion'
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
        className={`w-full rounded-lg border bg-surface px-4 py-3 text-sm text-text-primary placeholder:text-text-muted transition-colors focus:outline-none focus:border-eme-red ${
          errors[name] ? 'border-red-500' : 'border-border-subtle'
        } ${isTextarea ? 'resize-none' : ''}`}
        {...props}
      />
      {errors[name] && (
        <p className="mt-1 text-xs text-red-400">{errors[name]}</p>
      )}
    </div>
  )
}

export default function ConversionZone() {
  const { formData, errors, status, handleChange, handleSubmit } = useFormSubmit()

  return (
    <section id="contacto" className="py-(--spacing-section-mobile) lg:py-(--spacing-section)">
      <Container>
        <SectionHeading
          title="Contactanos"
          subtitle="Contanos tu proyecto y te asesoramos sin compromiso."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-8 lg:grid-cols-2 lg:gap-12"
        >
          {/* Info + Mapa */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-eme-red" />
                <div>
                  <p className="font-medium text-text-primary">{CONTACT_INFO.address}</p>
                  <p className="text-sm text-text-muted">{CONTACT_INFO.phone}</p>
                  <p className="text-sm text-text-muted">{CONTACT_INFO.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-eme-red" />
                <p className="text-text-secondary">{CONTACT_INFO.hours}</p>
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
          <motion.div variants={fadeInUp}>
            {status === 'success' ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-border-subtle bg-surface p-8 text-center">
                <CheckCircle className="mb-4 h-16 w-16 text-green-500" />
                <h3 className="font-heading text-xl font-bold uppercase">
                  Mensaje Enviado
                </h3>
                <p className="mt-2 text-text-muted">
                  Nos pondremos en contacto con vos a la brevedad.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 rounded-2xl border border-border-subtle bg-surface p-6 lg:p-8"
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
                    'Enviando...'
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
