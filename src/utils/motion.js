// Easing curves
const expo = [0.16, 1, 0.3, 1]
const spring = { type: 'spring', stiffness: 100, damping: 15 }

// === FADE VARIANTS ===

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: expo },
  },
}

export const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: expo },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: expo },
  },
}

// === SLIDE VARIANTS ===

export const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: expo },
  },
}

export const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: expo },
  },
}

// === SCALE VARIANTS ===

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: expo },
  },
}

export const scaleInBounce = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: spring,
  },
}

// === BLUR VARIANTS ===

export const blurIn = {
  hidden: { opacity: 0, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: expo },
  },
}

// === ROTATE VARIANTS ===

export const rotateIn = {
  hidden: { opacity: 0, rotate: -8, scale: 0.9 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.6, ease: expo },
  },
}

// === STAGGER CONTAINERS ===

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

export const staggerFast = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

export const staggerSlow = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
}

// === HOVER / TAP ===

export const buttonTap = {
  scale: 0.97,
  transition: { duration: 0.1 },
}

export const scaleOnHover = {
  scale: 1.05,
  transition: { duration: 0.4, ease: expo },
}

export const liftOnHover = {
  y: -4,
  transition: { duration: 0.3, ease: expo },
}

export const glowHover = {
  scale: 1.02,
  boxShadow: '0 0 30px rgba(var(--color-eme-red), 0.4)',
  transition: { duration: 0.3 },
}

// === CARD EFFECTS ===

export const cardReveal = {
  hidden: { opacity: 0, y: 40, rotateX: 8 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, ease: expo },
  },
}

// === TEXT REVEAL ===

export const wordReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: expo },
  },
}

export const charReveal = {
  hidden: { opacity: 0, y: 40, rotateX: 40 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.5, ease: expo },
  },
}

// === COUNTERS / NUMBERS ===

export const counterReveal = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: spring,
  },
}

// === VIEWPORT / SCROLL HELPERS ===

export const defaultViewport = { once: true, margin: '-80px' }
export const earlyViewport = { once: true, margin: '-40px' }

// === UTILITY FUNCTIONS ===

/** Crea un fadeInUp con delay custom */
export function fadeInUpDelay(delay = 0) {
  return {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: expo, delay },
    },
  }
}

/** Crea un slideIn desde cualquier dirección con delay */
export function slideIn(direction = 'left', delay = 0) {
  const axis = direction === 'left' || direction === 'right' ? 'x' : 'y'
  const value = direction === 'left' || direction === 'up' ? -60 : 60

  return {
    hidden: { opacity: 0, [axis]: value },
    visible: {
      opacity: 1,
      [axis]: 0,
      transition: { duration: 0.7, ease: expo, delay },
    },
  }
}
