'use client'

import Link from 'next/link'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'button' | 'link'

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  href?: string
  children: ReactNode
  className?: string
}

export function PrimaryButton({
  variant = 'link',
  href = '',
  children,
  className = '',
  ...rest
}: PrimaryButtonProps) {
  const baseStyles =
    'bg-primary hover:bg-red-600 text-white px-4 py-2 rounded transition font-semibold'

  if (variant === 'button') {
    return (
      <button type="submit" className={`${baseStyles} ${className}`} {...rest}>
        {children}
      </button>
    )
  }

  return (
    <Link href={href} className={`${baseStyles} ${className}`}>
      {children}
    </Link>
  )
}
