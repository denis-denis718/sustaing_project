import { CtaButton } from './primitives'

const CTA_PHOTO_BASE =
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80'
const CTA_PHOTO_SRCSET = [600, 900, 1400, 1800]
  .map((w) => `${CTA_PHOTO_BASE}&w=${w} ${w}w`)
  .join(', ')

export function FinalCtaSection() {
  return (
    <section className="band--white final-cta-wrap" id="early-access">
      <div className="container">
        <div className="final-cta">
          <div className="final-cta__copy">
            <h2 className="final-cta__heading">
              Help us build
              <br />
              the future of work
            </h2>
            <p className="final-cta__sub">
              Take our 1-minute survey and get early access to SUSTAIN.
            </p>
          </div>
          <div className="final-cta__action">
            <CtaButton variant="pale" size="lg" withArrow href="#early-access">
              Take Survey
            </CtaButton>
          </div>
          <div className="final-cta__media" aria-hidden>
            <img
              src={`${CTA_PHOTO_BASE}&w=1400`}
              srcSet={CTA_PHOTO_SRCSET}
              sizes="(max-width: 720px) 100vw, 50vw"
              alt=""
              width="1400"
              height="933"
              loading="lazy"
              decoding="async"
            />
            <span className="final-cta__tint" />
          </div>
        </div>
      </div>
    </section>
  )
}
