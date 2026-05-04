import type { ReactNode } from 'react'
import { EyebrowLabel, IconCircle, SectionHeading } from './primitives'
import { ContractIcon, CoinsIcon, ChairIcon } from './icons'

interface ProblemItem {
  icon: ReactNode
  title: string
}

const items: ProblemItem[] = [
  { icon: <ContractIcon />, title: 'Long-term contracts limit flexibility' },
  { icon: <CoinsIcon />, title: 'High costs for unused space' },
  { icon: <ChairIcon />, title: 'Lack of comfortable, modern workspaces' },
]

export function ProblemSection() {
  return (
    <section className="band band--cream problem" id="problem">
      <div className="container">
        <div className="band__intro">
          <EyebrowLabel>THE PROBLEM</EyebrowLabel>
          <SectionHeading>
            The way we work has changed —<br />
            offices haven&rsquo;t.
          </SectionHeading>
        </div>
        <ul className="problem__grid">
          {items.map((item) => (
            <li key={item.title} className="problem__card">
              <IconCircle tone="cream">{item.icon}</IconCircle>
              <p className="problem__title">{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
