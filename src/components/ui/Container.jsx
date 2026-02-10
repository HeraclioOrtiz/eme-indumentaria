import { cn } from '@/utils/cn'

const maxWidths = {
  default: 'max-w-7xl',
  narrow: 'max-w-4xl',
  full: 'max-w-full',
}

export default function Container({ children, size = 'default', className }) {
  return (
    <div className={cn('mx-auto px-4 sm:px-6 lg:px-8', maxWidths[size], className)}>
      {children}
    </div>
  )
}
