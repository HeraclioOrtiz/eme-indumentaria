import { motion } from 'framer-motion'
import { fadeInUp } from '@/utils/motion'
import { cn } from '@/utils/cn'

export default function SectionHeading({ title, subtitle, className }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={cn('mb-12 text-center', className)}
    >
      <h2 className="font-heading text-3xl font-black uppercase tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
