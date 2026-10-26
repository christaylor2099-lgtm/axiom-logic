import { Navbar } from '@/components/Navbar'
import { HeroPortal } from '@/components/HeroPortal'
import { BentoGrid } from '@/components/BentoGrid'
import { PricingMatrix } from '@/components/PricingMatrix'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian text-white relative">
      <Navbar />
      <HeroPortal />
      <BentoGrid />
      <PricingMatrix />
      <FAQ />
      <Footer />
    </main>
  )
}
