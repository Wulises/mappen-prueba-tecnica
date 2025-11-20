import ModalBanner from './components/ModalBanner'
import Hero from './components/Hero'
import Plans from './components/Plans'
import Works from './components/HowItWorks'
import Benefits from './components/Benefits'

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white">
      <ModalBanner />
      <Hero />
      <Plans />
      <Works />
      <Benefits />
    </main>
  )
}
