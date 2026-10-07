import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Intersection from '@/components/Intersection'
import CreativeWorkSection from '@/components/CreativeWorkSection'
import LetsConnect from '@/components/LetsConnect'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Intersection />
        <CreativeWorkSection />
        <LetsConnect />
      </main>
    </>
  )
}
