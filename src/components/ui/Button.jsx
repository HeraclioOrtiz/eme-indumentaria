import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import { buttonTap } from '@/utils/motion'

const variantStyles = {
  primary: 'bg-eme-red text-white hover:bg-eme-red-light shadow-lg shadow-eme-red/20 hover:shadow-eme-red/40',
  secondary: 'border border-white/20 text-white hover:bg-white/10 hover:border-white/40',
  ghost: 'text-text-secondary hover:text-white',
}

const sizeStyles = {
  default: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'default',
  href,
  glow = false,
  className,
  ...props
}) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 font-medium rounded-lg cursor-pointer',
    'transition-all duration-300 ease-out',
    'hover:scale-[1.03] active:scale-[0.97]',
    variantStyles[variant],
    sizeStyles[size],
    glow && variant === 'primary' && 'animate-glow',
    className
  )

  const Component = href ? motion.a : motion.button
  const linkProps = href ? { href } : {}

  return (
    <Component
      whileTap={buttonTap}
      className={classes}
      {...linkProps}
      {...props}
    >
      {children}
    </Component>
  )
}
