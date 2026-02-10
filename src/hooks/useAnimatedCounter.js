import { useState, useEffect, useRef } from 'react'

export default function useAnimatedCounter(target, duration = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const start = performance.now()

          function update(now) {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            // easeOutExpo
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
            setCount(Math.round(eased * target))
            if (progress < 1) {
              requestAnimationFrame(update)
            }
          }

          requestAnimationFrame(update)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [target, duration])

  return { count, ref }
}
