import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Terminal from '@/components/Terminal'
import GitHubStats from '@/components/GitHubStats'
import Experience from '@/components/Experience'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="projects"><Projects /></section>
      <Terminal />
      <GitHubStats />
      <section id="experience"><Experience /></section>
      <section id="certifications"><Certifications /></section>
      <section id="contact"><Contact /></section>
    </main>
  )
}