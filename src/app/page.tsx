import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Intersection from '@/components/Intersection'
import CreativeWorkSection from '@/components/CreativeWorkSection'
import Experience from '@/components/Experience'
import BeyondTech from '@/components/BeyondTech'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Intersection />
        <CreativeWorkSection />
        <Experience />
        <BeyondTech />
        <Contact />
      </main>
    </>
  )
}
