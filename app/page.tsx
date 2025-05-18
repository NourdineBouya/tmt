import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Avantages from '@/components/Avantages'
import Clients from '@/components/Clients'
import Compare from '@/components/Compare'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Banner from '@/components/Banner'
import Morocco from '@/components/Morocco'
import TechStack from '@/components/TechStack'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <section id="services">
        <Services />
      </section>
      <TechStack/>
      <Banner/>
      <section id="avantages">
        <Avantages />
      </section>
    
      <section id="clients">
        <Clients />
      </section>
      <section id="compare">
        <Compare />
      </section>
      <Morocco/>
      
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  )
}