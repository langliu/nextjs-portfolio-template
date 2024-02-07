import Link, { LinkProps } from 'next/link'
import type { HTMLAttributeAnchorTarget } from 'react'

type Props = LinkProps & {
  label: string
  isUnderline?: boolean
  target?: HTMLAttributeAnchorTarget
}

export default function CustomLink({
  label,
  isUnderline,
  href,
  target = '_blank',
  ...props
}: Props) {
  return (
    <Link
      href={href}
      className={`hover:text-neutral-100 cursor-pointer ${isUnderline ? 'underline decoration-dashed underline-offset-8' : ''}`}
      rel='noreferrer'
      target={target}
      {...props}
    >
      {label}
      <span className='sr-only'>{label} link</span>
    </Link>
  )
}
