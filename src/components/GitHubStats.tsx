'use client'

import { useEffect, useState } from 'react'

interface GitHubData {
  public_repos: number
  followers: number
  following: number
  created_at: string
}

export default function GitHubStats() {
  const [data, setData] = useState<GitHubData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.github.com/users/AkashBhadana')
      .then((r) => r.json())
      .then((d) => { setData(d); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  const stats = data ? [
    { label: 'Public Repos', value: data.public_repos },
    { label: 'Followers', value: data.followers },
    { label: 'Following', value: data.following },
    { label: 'Since', value: new Date(data.created_at).getFullYear() },
  ] : []

  const repos = [
    {
      name: 'argocd-Gitops-demo',
      desc: 'GitOps workflow using ArgoCD + Kubernetes. Git-driven declarative manifests.',
      tags: ['Kubernetes', 'ArgoCD', 'Helm', 'NGINX'],
      color: 'border-green-500/30 hover:border-green-500/60',
      accent: 'text-green-400',
      url: 'https://github.com/AkashBhadana/argocd-Gitops-demo',
    },
    {
      name: 'Airflow-Stack',
      desc: 'Dockerized Apache Airflow with Keycloak SSO + PostgreSQL metadata backend.',
      tags: ['Airflow', 'Keycloak', 'PostgreSQL', 'Docker'],
      color: 'border-blue-500/30 hover:border-blue-500/60',
      accent: 'text-blue-400',
      url: 'https://github.com/AkashBhadana/Airflow-Stack',
    },
  ]

  return (
    <section className="relative px-6 py-24 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">GitHub Activity</h2>
        <p className="text-gray-400 text-lg">Open source projects and contributions</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {loading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="p-4 rounded-xl border border-white/10 bg-white/5 animate-pulse h-20" />
          ))
        ) : (
          stats.map((s) => (
            <div key={s.label} className="p-4 rounded-xl border border-white/10 bg-white/5 text-center hover:border-blue-500/40 transition-all">
              <div className="text-3xl font-bold text-white">{s.value}</div>
              <div className="text-xs text-gray-400 mt-1">{s.label}</div>
            </div>
          ))
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {repos.map((r) => (
          <div key={r.name} onClick={() => window.open(r.url, '_blank')} className={`p-6 rounded-2xl border bg-white/5 transition-all duration-300 cursor-pointer ${r.color}`}>
            <h3 className={`font-semibold mb-2 ${r.accent}`}>{r.name}</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">{r.desc}</p>
            <div className="flex flex-wrap gap-1">
              {r.tags.map((t) => (
                <span key={t} className="px-2 py-0.5 text-xs bg-white/5 border border-white/10 rounded text-gray-300">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button onClick={() => window.open('https://github.com/AkashBhadana', '_blank')} className="px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 text-white text-sm transition-all">
          View all repositories
        </button>
      </div>
    </section>
  )
}