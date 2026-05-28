import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Hero />
      <Projects />
      <Experience />
      <Contact />
    </main>
  )
}