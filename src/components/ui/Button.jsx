import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import { buttonTap } from '@/utils/motion'

const variants = {
  primary: 'bg-eme-red text-white hover:bg-eme-red-light',
  secondary: 'border border-white/20 text-white hover:bg-white/10',
  ghost: 'text-text-secondary hover:text-white',
}

const sizes = {
  default: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'default',
  href,
  className,
  ...props
}) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-colors duration-200 cursor-pointer',
    variants[variant],
    sizes[size],
    className
  )

  if (href) {
    return (
      <motion.a
        href={href}
        whileTap={buttonTap}
        className={classes}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      whileTap={buttonTap}
      className={classes}
      {...props}
    >
      {children}
    </motion.button>
  )
}
