import type { ReactNode, MouseEventHandler } from 'react'
import { ArrowRightIcon, CheckCircleIcon, LeafIcon } from './icons'

type Tone = 'green' | 'light'

export function EyebrowLabel({
  children,
  tone = 'green',
  withLeaf = false,
}: {
  children: ReactNode
  tone?: Tone
  withLeaf?: boolean
}) {
  return (
    <p className={`eyebrow eyebrow--${tone}`}>
      {withLeaf && (
        <span className="eyebrow__leaf">
          <LeafIcon />
        </span>
      )}
      <span className="eyebrow__text">{children}</span>
    </p>
  )
}

export function SectionHeading({
  children,
  tone = 'dark',
  as: Tag = 'h2',
  align = 'center',
  className = '',
}: {
  children: ReactNode
  tone?: 'dark' | 'light'
  as?: 'h1' | 'h2'
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <Tag
      className={`section-heading section-heading--${tone} section-heading--${align} ${className}`.trim()}
    >
      {children}
    </Tag>
  )
}

export function CheckItem({
  children,
  tone = 'dark',
}: {
  children: ReactNode
  tone?: 'dark' | 'light'
}) {
  return (
    <li className={`check-item check-item--${tone}`}>
      <span className="check-item__icon">
        <CheckCircleIcon />
      </span>
      <span>{children}</span>
    </li>
  )
}

type CtaButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'pale' | 'ghost'
  href?: string
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>
  withArrow?: boolean
  size?: 'md' | 'lg'
  ariaLabel?: string
}

export function CtaButton({
  children,
  variant = 'primary',
  href,
  onClick,
  withArrow = false,
  size = 'md',
  ariaLabel,
}: CtaButtonProps) {
  const className = `cta-btn cta-btn--${variant} cta-btn--${size}`
  const inner = (
    <>
      <span>{children}</span>
      {withArrow && (
        <span className="cta-btn__arrow" aria-hidden>
          <ArrowRightIcon />
        </span>
      )}
    </>
  )
  if (href) {
    return (
      <a
        href={href}
        className={className}
        onClick={onClick as MouseEventHandler<HTMLAnchorElement>}
        aria-label={ariaLabel}
      >
        {inner}
      </a>
    )
  }
  return (
    <button
      type="button"
      className={className}
      onClick={onClick as MouseEventHandler<HTMLButtonElement>}
      aria-label={ariaLabel}
    >
      {inner}
    </button>
  )
}

export function IconCircle({
  children,
  tone = 'cream',
  size = 64,
}: {
  children: ReactNode
  tone?: 'cream' | 'green' | 'pale'
  size?: number
}) {
  return (
    <span
      className={`icon-circle icon-circle--${tone}`}
      style={{ width: size, height: size, fontSize: size * 0.45 }}
    >
      {children}
    </span>
  )
}
