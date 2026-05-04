import { CtaButton, EyebrowLabel } from './primitives'
import { HeroIllustration, ShieldCheckIcon } from './icons'

export function Hero() {
  return (
    <section className="hero band band--white" id="top">
      <div className="container hero__inner">
        <div className="hero__copy">
          <EyebrowLabel withLeaf>SUSTAIN — FLEXIBLE OFFICES</EyebrowLabel>
          <h1 className="hero__headline">
            Work Better.
            <br />
            Feel Better.
            <br />
            Do Better.
          </h1>
          <p className="hero__sub">
            Flexible, eco-friendly workspaces you can book by the hour — no
            long-term contracts, no hassle.
          </p>
          <div className="hero__cta">
            <CtaButton variant="primary" size="lg" href="#early-access" withArrow>
              Get Early Access
            </CtaButton>
          </div>
          <p className="hero__assurance">
            <span className="hero__assurance-icon" aria-hidden>
              <ShieldCheckIcon />
            </span>
            No credit card required
          </p>
        </div>
        <div className="hero__art" aria-hidden>
          <HeroIllustration />
        </div>
      </div>
    </section>
  )
}
