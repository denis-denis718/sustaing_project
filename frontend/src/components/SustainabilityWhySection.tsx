import type { ReactNode } from 'react'
import { CheckItem, EyebrowLabel, SectionHeading } from './primitives'
import { BoltIcon, LeafIcon, GaugeIcon } from './icons'

interface PillarItem {
  icon: ReactNode
  label: string
}

const pillars: PillarItem[] = [
  { icon: <BoltIcon />, label: 'Energy-efficient systems' },
  { icon: <LeafIcon />, label: 'Eco-friendly materials' },
  { icon: <GaugeIcon />, label: 'Smart energy management' },
]

const reasons = [
  'No long-term contracts',
  'Modern design',
  'Flexible hourly booking',
  'Sustainable approach',
  'Easy cancellation',
]

export function SustainabilityWhySection() {
  return (
    <section className="band band--cream sustainability" id="sustainability">
      <div className="container sustainability__inner">
        <div className="sustainability__col">
          <EyebrowLabel>SUSTAINABILITY</EyebrowLabel>
          <SectionHeading align="left">Designed for a better future</SectionHeading>
          <ul className="sustainability__pillars">
            {pillars.map((p) => (
              <li key={p.label} className="sustainability__pillar">
                <span className="sustainability__pillar-icon">{p.icon}</span>
                <p className="sustainability__pillar-label">{p.label}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="sustainability__col" id="about">
          <EyebrowLabel>WHY CHOOSE SUSTAIN?</EyebrowLabel>
          <SectionHeading align="left">Why choose SUSTAIN?</SectionHeading>
          <ul className="sustainability__reasons">
            {reasons.map((r) => (
              <CheckItem key={r}>{r}</CheckItem>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
