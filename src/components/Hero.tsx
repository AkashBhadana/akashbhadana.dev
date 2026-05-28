'use client'

import { useEffect, useState } from 'react'
import { Mail, Download, ArrowRight } from 'lucide-react'

const roles = [
  'DevOps Engineer',
  'Cloud Infrastructure',
  'SRE Engineer',
  'CI/CD Specialist',
  'Kubernetes Engineer',
]

const metrics = [
  { value: '50K', label: 'Active Users', icon: '👥' },
  { value: '450K+', label: 'Monthly Requests', icon: '⚡' },
  { value: '99.999%', label: 'SLA Maintained', icon: '🎯' },
  { value: '8+', label: 'Enterprise Clients', icon: '🏢' },
]

const clients = ['State Bank of India', 'L&T', 'KreditBee', 'Policybazaar', 'AU Small Finance Bank', 'Shriram Finance', 'MGL']

const skills = [
  { name: 'Kubernetes', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
  { name: 'Terraform', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
  { name: 'Azure', color: 'bg-sky-500/20 text-sky-400 border-sky-500/30' },
  { name: 'AWS', color: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
  { name: 'Jenkins', color: 'bg-red-500/20 text-red-400 border-red-500/30' },
  { name: 'ArgoCD', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
  { name: 'Docker', color: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' },
  { name: 'Prometheus', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
  { name: 'Ansible', color: 'bg-pink-500/20 text-pink-400 border-pink-500/30' },
  { name: 'Linux', color: 'bg-gray-500/20 text-gray-400 border-gray-500/30' },
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setTyping(false), 2000)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
      } else {
        setRoleIndex((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">

      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl w-full mx-auto text-center">

        <div className="animate-fade-up delay-1 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 cursor-blink inline-block" />
          Available June 2026 · Immediate Joiner · Open to Relocation
        </div>

        <h1 className="animate-fade-up delay-2 text-6xl md:text-8xl font-bold tracking-tight mb-4 glow-text">
          Akash Bhadana
        </h1>

        <div className="animate-fade-up delay-3 text-2xl md:text-3xl text-blue-400 font-mono mb-8 h-12">
          {displayed}
          <span className="cursor-blink text-blue-400">|</span>
        </div>

        <p className="animate-fade-up delay-3 text-gray-400 text-lg max-w-2xl mx-auto mb-4">
          Managing multi-tenant Azure/AWS production infrastructure serving enterprise clients including
        </p>

        <div className="animate-fade-up delay-3 flex flex-wrap justify-center gap-2 mb-10">
          {clients.map((c) => (
            <span key={c} className="px-3 py-1 text-xs border border-white/10 rounded-full text-gray-300 bg-white/5">
              {c}
            </span>
          ))}
        </div>

        <div className="animate-fade-up delay-4 grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto">
          {metrics.map((m) => (
            <div key={m.label} className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/40 hover:bg-blue-500/5 transition-all duration-300">
              <div className="text-2xl mb-1">{m.icon}</div>
              <div className="text-3xl font-bold text-white">{m.value}</div>
              <div className="text-xs text-gray-400 mt-1">{m.label}</div>
            </div>
          ))}
        </div>

        <div className="animate-fade-up delay-4 flex flex-wrap justify-center gap-2 mb-10">
          {skills.map((s) => (
            <span key={s.name} className={`px-3 py-1 text-xs border rounded-full font-mono ${s.color}`}>
              {s.name}
            </span>
          ))}
        </div>

        <div className="animate-fade-up delay-5 flex flex-wrap justify-center gap-4 mb-10">
          <a
            href="/Akash_Bhadana_DevOps.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all duration-200"
          >
            <Download size={16} />
            Download Resume
          </a>
          <a
            href="https://linkedin.com/in/akashbhadana"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:border-blue-500/50 hover:bg-blue-500/10 text-white font-medium transition-all duration-200"
          >
            <span>in</span>
            LinkedIn
          </a>
          <a
            href="https://github.com/AkashBhadana"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-medium transition-all duration-200"
          >
            <span>in</span>
            GitHub
          </a>
          <a
            href="mailto:Akashbhadana3yx@yahoo.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-medium transition-all duration-200"
          >
            <Mail size={16} />
            Email Me
          </a>
        </div>

        <div className="animate-fade-up delay-5 flex items-center justify-center gap-2 text-gray-500 text-sm">
          <ArrowRight size={14} />
          Scroll to see projects, experience, and tech stack
        </div>

      </div>
    </section>
  )
}