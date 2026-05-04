import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { CtaButton } from './primitives'
import { CloseIcon, MenuIcon } from './icons'

const navItems = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Spaces', href: '#audience' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'About us', href: '#about' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.body.classList.add('menu-open')
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('menu-open')
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <header className="header">
        <div className="container header__inner">
          <a href="#top" className="header__brand" aria-label="SUSTAIN home">
            <img
              src={logo}
              alt="SUSTAIN"
              className="header__logo"
              width="64"
              height="64"
            />
          </a>
          <nav
            id="primary-nav"
            className={`header__nav${open ? ' is-open' : ''}`}
            aria-label="Primary"
          >
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header__cta">
            <CtaButton variant="primary" size="md" href="#early-access">
              Get Early Access
            </CtaButton>
          </div>
          <button
            type="button"
            className="header__burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>
      <div
        className={`header__backdrop${open ? ' is-open' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden
      />
    </>
  )
}
