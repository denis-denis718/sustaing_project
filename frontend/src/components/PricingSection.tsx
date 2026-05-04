import { useState, type ReactNode } from 'react'
import { EyebrowLabel, SectionHeading, CtaButton } from './primitives'
import {
  CoinsIcon,
  UsersIcon,
  SparkleIcon,
  CheckCircleIcon,
} from './icons'

type Period = 'monthly' | 'yearly'

interface PriceTier {
  price: string
  unit: string
  oldPrice?: string
  savings?: string
  ctaLabel: string
}

interface Plan {
  id: 'basic' | 'standard' | 'premium'
  icon: ReactNode
  title: string
  tagline?: string
  monthly: PriceTier
  yearly: PriceTier
  features: string[]
  popular?: boolean
}

const plans: Plan[] = [
  {
    id: 'basic',
    icon: <CoinsIcon />,
    title: 'Basic Plan',
    tagline: 'Pay as you go',
    monthly: { price: '£0', unit: '/month', ctaLabel: 'Get Started' },
    yearly: { price: '£0', unit: '/year', ctaLabel: 'Get Started' },
    features: [
      'Pay per hour access',
      'From £10/hour workspace',
      'Access to shared desks',
      'No commitment',
    ],
  },
  {
    id: 'standard',
    icon: <UsersIcon />,
    title: 'Standard Plan',
    monthly: { price: '£99', unit: '/month', ctaLabel: 'Get Standard' },
    yearly: {
      price: '£949',
      unit: '/year',
      oldPrice: '£1188',
      savings: 'Save £239',
      ctaLabel: 'Get Standard',
    },
    features: [
      '40 hours included',
      'Access to meeting rooms',
      'High-speed Wi-Fi & amenities',
      'Flexible booking',
      'Free coffee & refreshments',
      'Access to community events',
    ],
    popular: true,
  },
  {
    id: 'premium',
    icon: <SparkleIcon />,
    title: 'Premium Plan',
    monthly: { price: '£199', unit: '/month', ctaLabel: 'Get Premium' },
    yearly: {
      price: '£1909',
      unit: '/year',
      oldPrice: '£2388',
      savings: 'Save £479',
      ctaLabel: 'Get Premium',
    },
    features: [
      'Unlimited workspace access',
      'Priority booking',
      'Private rooms included',
      '24/7 access',
      'Business support services',
      'Exclusive networking events',
    ],
  },
]

export function PricingSection() {
  const [period, setPeriod] = useState<Period>('monthly')

  return (
    <section className="band band--white pricing" id="pricing">
      <div className="container">
        <div className="band__intro">
          <EyebrowLabel>PRICING</EyebrowLabel>
          <SectionHeading>Flexible pricing for everyone</SectionHeading>
          <div className="pricing__toggle" role="tablist" aria-label="Billing period">
            <button
              type="button"
              role="tab"
              aria-selected={period === 'monthly'}
              className={`pricing__toggle-btn${period === 'monthly' ? ' is-active' : ''}`}
              onClick={() => setPeriod('monthly')}
            >
              Monthly
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={period === 'yearly'}
              className={`pricing__toggle-btn${period === 'yearly' ? ' is-active' : ''}`}
              onClick={() => setPeriod('yearly')}
            >
              Yearly
            </button>
          </div>
          <p className="pricing__toggle-hint">Save up to 20% with yearly</p>
        </div>

        <ul className="pricing__grid">
          {plans.map((plan) => {
            const tier = plan[period]
            return (
              <li
                key={plan.id}
                className={`pricing-card${plan.popular ? ' pricing-card--popular' : ''}`}
              >
                {plan.popular && (
                  <span className="pricing-card__badge">Most Popular</span>
                )}
                <div className="pricing-card__head">
                  <span className="pricing-card__icon">{plan.icon}</span>
                  <div>
                    <h3 className="pricing-card__title">{plan.title}</h3>
                    {plan.tagline && (
                      <p className="pricing-card__tagline">{plan.tagline}</p>
                    )}
                  </div>
                </div>
                <div className="pricing-card__price-block">
                  <p className="pricing-card__price">
                    <span className="pricing-card__amount">{tier.price}</span>
                    <span className="pricing-card__unit">{tier.unit}</span>
                    {period === 'yearly' && tier.oldPrice && (
                      <span className="pricing-card__price-old">{tier.oldPrice}</span>
                    )}
                  </p>
                  <p
                    className="pricing-card__savings"
                    aria-hidden={!(period === 'yearly' && tier.savings)}
                  >
                    {period === 'yearly' && tier.savings ? tier.savings : ' '}
                  </p>
                </div>
                <ul className="pricing-card__features">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <CheckCircleIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pricing-card__cta">
                  <CtaButton
                    variant={plan.popular ? 'primary' : 'ghost'}
                    size="lg"
                  >
                    {tier.ctaLabel}
                  </CtaButton>
                </div>
              </li>
            )
          })}
        </ul>

        <p className="pricing__footnote">Cancel anytime. No long-term contracts.</p>
      </div>
    </section>
  )
}
