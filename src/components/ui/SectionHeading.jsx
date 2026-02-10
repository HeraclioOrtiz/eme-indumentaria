import { motion } from 'framer-motion'
import { fadeInUp, fadeIn, defaultViewport } from '@/utils/motion'
import { cn } from '@/utils/cn'

export default function SectionHeading({ title, subtitle, badge, align = 'center', className }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className={cn(
        'mb-12',
        align === 'center' && 'text-center',
        align === 'left' && 'text-left',
        className
      )}
    >
      {badge && (
        <motion.span
          variants={fadeIn}
          className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-eme-red"
        >
          {badge}
        </motion.span>
      )}

      <h2 className="font-heading text-3xl font-black uppercase tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {/* Decorative underline accent — simétrico */}
      <div className={cn(
        'mt-4 flex items-center gap-1.5',
        align === 'center' && 'justify-center'
      )}>
        <span className="h-0.5 w-8 bg-gradient-to-r from-transparent to-eme-red" />
        <span className="h-1.5 w-1.5 rounded-full bg-eme-red" />
        <span className="h-0.5 w-8 bg-gradient-to-l from-transparent to-eme-red" />
      </div>

      {subtitle && (
        <p className={cn(
          'mt-5 text-lg text-text-muted',
          align === 'center' && 'max-w-2xl mx-auto'
        )}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
