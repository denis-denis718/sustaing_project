import type { ReactNode } from 'react'
import { EyebrowLabel, SectionHeading } from './primitives'
import {
  LaptopUserIcon,
  PenRulerIcon,
  RocketIcon,
  HouseIcon,
  UsersIcon,
} from './icons'

interface AudienceItem {
  icon: ReactNode
  label: string
}

const items: AudienceItem[] = [
  { icon: <LaptopUserIcon />, label: 'Freelancers' },
  { icon: <PenRulerIcon />, label: 'Designers' },
  { icon: <RocketIcon />, label: 'Startups' },
  { icon: <HouseIcon />, label: 'Remote workers' },
  { icon: <UsersIcon />, label: 'Small teams' },
]

export function AudienceSection() {
  return (
    <section className="band band--cream-deep audience" id="audience">
      <div className="container">
        <div className="band__intro">
          <EyebrowLabel>WHO IT&rsquo;S FOR</EyebrowLabel>
          <SectionHeading>Built for modern professionals</SectionHeading>
        </div>
        <ul className="audience__grid">
          {items.map((item) => (
            <li key={item.label} className="audience__item">
              <span className="audience__icon">{item.icon}</span>
              <p className="audience__label">{item.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
