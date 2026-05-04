import { CheckItem, EyebrowLabel, SectionHeading } from './primitives'

const SOLUTION_PHOTO_BASE =
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80'
const SOLUTION_PHOTO_SRCSET = [600, 900, 1200, 1600]
  .map((w) => `${SOLUTION_PHOTO_BASE}&w=${w} ${w}w`)
  .join(', ')

const benefits = [
  'Book office space by the hour or month',
  'No contracts, cancel anytime',
  'Designed for comfort, productivity, and creativity',
  'Eco-friendly and energy-efficient environments',
]

export function SolutionSection() {
  return (
    <section className="band band--white solution" id="solution">
      <div className="container solution__inner">
        <div className="solution__media">
          <img
            src={`${SOLUTION_PHOTO_BASE}&w=1200`}
            srcSet={SOLUTION_PHOTO_SRCSET}
            sizes="(max-width: 760px) 100vw, 50vw"
            alt="Modern office interior with green chairs, plants and natural light"
            width="1200"
            height="900"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="solution__copy">
          <EyebrowLabel>OUR SOLUTION</EyebrowLabel>
          <SectionHeading align="left">
            A new way to work —<br />
            flexible, modern, sustainable
          </SectionHeading>
          <ul className="solution__list">
            {benefits.map((b) => (
              <CheckItem key={b}>{b}</CheckItem>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
