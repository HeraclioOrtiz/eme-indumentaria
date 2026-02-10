export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

export const buttonTap = {
  scale: 0.97,
  transition: { duration: 0.1 },
}

export const scaleOnHover = {
  scale: 1.05,
  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
}
