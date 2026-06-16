import { Navbar } from '@/components/navbar'
import { Hero} from '@/components/hero'
import { Services } from '@/components/services'
import { Industries } from '@/components/industries'
import { WhyUs } from '@/components/why-us'
import { Process } from '@/components/process'
// import { Projects } from '@/components/projects'
// import { Testimonials } from '@/components/testimonials'
import { TechStack } from '@/components/tech-stack'
import { CTA } from '@/components/cta'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Industries />
      <WhyUs />
      <Process />
      {/* <Projects /> */}
      {/* <Testimonials /> */}
      <TechStack />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}
