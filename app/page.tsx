import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      {/* Ambient background glows */}
      <div className="ambient-glow w-[600px] h-[600px] bg-amber-500 top-0 left-1/4" />
      <div className="ambient-glow w-[400px] h-[400px] bg-blue-600 top-[60vh] right-0 opacity-[0.05]" />
      <div className="ambient-glow w-[500px] h-[500px] bg-amber-500 bottom-[20vh] left-0 opacity-[0.04]" />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
