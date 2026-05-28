'use client'

import { useState } from 'react'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('Akashbhadana3yx@yahoo.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative px-6 py-24 max-w-4xl mx-auto text-center">
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {"Let's Work Together"}
        </h2>
        <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
          Available June 2026. Open to DevOps, SRE, Cloud Engineer roles.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <button onClick={copyEmail} className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-blue-500/40 transition-all text-left">
            <div className="text-2xl mb-3">📧</div>
            <div className="text-white font-medium mb-1">Email</div>
            <div className="text-gray-400 text-sm font-mono">Akashbhadana3yx@yahoo.com</div>
            <div className="text-blue-400 text-xs mt-2">{copied ? 'Copied!' : 'Click to copy'}</div>
          </button>
          <a href="https://linkedin.com/in/akashbhadana" target="_blank" className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-blue-500/40 transition-all text-left block">
            <div className="text-2xl mb-3">💼</div>
            <div className="text-white font-medium mb-1">LinkedIn</div>
            <div className="text-gray-400 text-sm font-mono">linkedin.com/in/akashbhadana</div>
            <div className="text-blue-400 text-xs mt-2">View profile</div>
          </a>
          <a href="https://github.com/AkashBhadana" target="_blank" className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-blue-500/40 transition-all text-left block">
            <div className="text-2xl mb-3">💻</div>
            <div className="text-white font-medium mb-1">GitHub</div>
            <div className="text-gray-400 text-sm font-mono">github.com/AkashBhadana</div>
            <div className="text-blue-400 text-xs mt-2">View repos</div>
          </a>
        </div>
        <a href="/Akash_Bhadana_DevOps.pdf" download className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg transition-all mb-16">
          Download Resume
        </a>
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-wrap justify-center gap-6 text-gray-600 text-sm mb-4">
            <span>Akash Bhadana</span>
            <span>DevOps Engineer</span>
            <span>Mohali / Delhi NCR / Remote</span>
            <span>+91 92058 20083</span>
          </div>
          <p className="text-gray-700 text-xs mt-4">2026 Akash Bhadana · Next.js + Tailwind · Vercel</p>
        </div>
      </div>
    </section>
  )
}