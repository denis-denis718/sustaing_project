import './landing.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProblemSection } from './components/ProblemSection'
import { SolutionSection } from './components/SolutionSection'
import { HowItWorksSection } from './components/HowItWorksSection'
import { AudienceSection } from './components/AudienceSection'
import { PricingSection } from './components/PricingSection'
import { SmartSustainableSection } from './components/SmartSustainableSection'
import { SustainabilityWhySection } from './components/SustainabilityWhySection'
import { FinalCtaSection } from './components/FinalCtaSection'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <AudienceSection />
        <PricingSection />
        <SmartSustainableSection />
        <SustainabilityWhySection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  )
}
