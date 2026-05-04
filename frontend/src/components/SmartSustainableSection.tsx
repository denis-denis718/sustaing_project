import { EyebrowLabel } from './primitives'
import { SmartIllustration, SparkleIcon } from './icons'

export function SmartSustainableSection() {
  return (
    <section className="band band--cream smart" id="smart">
      <div className="container smart__inner">
        <div className="smart__copy">
          <EyebrowLabel tone="light">SMART &amp; SUSTAINABLE WORKSPACES</EyebrowLabel>
          <p className="smart__lead">
            Our spaces use smart building technology to automatically adjust
            lighting, heating, and energy usage based on occupancy.
          </p>
          <p className="smart__lead">
            This creates a more comfortable working environment while reducing
            energy waste.
          </p>
          <p className="smart__hint">
            <span className="smart__hint-icon" aria-hidden>
              <SparkleIcon />
            </span>
            AI-powered recommendations coming soon.
          </p>
        </div>
        <div className="smart__art" aria-hidden>
          <SmartIllustration />
        </div>
      </div>
    </section>
  )
}
