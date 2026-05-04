import type { ReactNode } from 'react'
import { EyebrowLabel, IconCircle, SectionHeading } from './primitives'
import { PinIcon, ChairIcon, CalendarCheckIcon } from './icons'

interface Step {
  number: number
  icon: ReactNode
  title: string
}

const steps: Step[] = [
  { number: 1, icon: <PinIcon />, title: 'Choose your location' },
  { number: 2, icon: <ChairIcon />, title: 'Select your workspace' },
  { number: 3, icon: <CalendarCheckIcon />, title: 'Book instantly' },
]

export function HowItWorksSection() {
  return (
    <section className="band band--cream how" id="how-it-works">
      <div className="container">
        <div className="band__intro">
          <EyebrowLabel>HOW IT WORKS</EyebrowLabel>
          <SectionHeading>Simple. Fast. Flexible.</SectionHeading>
        </div>
        <ol className="how__steps">
          {steps.map((step, idx) => (
            <li key={step.number} className="how__step">
              <span className="how__number">{step.number}</span>
              <IconCircle tone="pale" size={72}>
                {step.icon}
              </IconCircle>
              <p className="how__title">{step.title}</p>
              {idx < steps.length - 1 && (
                <span className="how__connector" aria-hidden />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
