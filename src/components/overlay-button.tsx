import { ReactNode } from 'react'

interface OverlayButtonProps {
  onClick: () => void
  children: ReactNode
  position: 'top-right' | 'bottom-right' | 'top-left'
  disabled?: boolean
}

export function OverlayButton({ onClick, children, position, disabled }: OverlayButtonProps) {
  const positionClasses = {
    'top-right': 'top-2 right-2',
    'bottom-right': 'bottom-2 right-2',
    'top-left': 'top-2 left-2'
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        absolute ${positionClasses[position]}
        w-10 h-10
        bg-black/80
        border border-white/20
        rounded-none
        flex items-center justify-center
        text-white
        opacity-0
        group-hover:opacity-100
        transition-all duration-200
        hover:bg-white hover:text-black hover:border-black
        disabled:opacity-0 disabled:cursor-not-allowed
      `}
    >
      {children}
    </button>
  )
} 