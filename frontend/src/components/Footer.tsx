import logo from '../assets/logo.png'
import { LinkedInIcon, InstagramIcon, MailIcon } from './icons'

const navItems = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Spaces', href: '#audience' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Sustainability', href: '#sustainability' },
  { label: 'About us', href: '#about' },
]

const socials = [
  { label: 'LinkedIn', href: '#', icon: <LinkedInIcon /> },
  { label: 'Instagram', href: '#', icon: <InstagramIcon /> },
  { label: 'Email', href: 'mailto:hello@sustain.example', icon: <MailIcon /> },
]

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#top" className="footer__brand" aria-label="SUSTAIN home">
          <img
            src={logo}
            alt="SUSTAIN"
            className="footer__logo"
            width="64"
            height="64"
          />
        </a>
        <nav className="footer__nav" aria-label="Footer">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="footer__socials">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} aria-label={s.label} className="footer__social">
                {s.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
