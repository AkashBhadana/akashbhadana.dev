'use client'

const projects = [
  {
    title: 'Enterprise VMSS Production Cluster',
    metric: '99.999% SLA · 50K users · 450K+ req/mo',
    description: 'Engineered 3-node VMSS cluster with NGINX + Node.js + PM2 serving 8+ enterprise clients. CPU autoscaling at 90% threshold.',
    tags: ['Azure VMSS', 'NGINX', 'Node.js', 'PM2', 'Autoscaling'],
    color: 'border-blue-500/30 hover:border-blue-500/60',
    accent: 'text-blue-400',
    clients: ['SBI', 'L&T', 'KreditBee', 'Policybazaar'],
    impact: '99.999%',
    impactLabel: 'SLA',
  },
  {
    title: 'CI/CD Pipeline Automation',
    metric: '60% reduction in manual deployment effort',
    description: 'Built 17+ Jenkins pipelines across dev/UAT/prod. GitHub webhook → Ansible → SSH deploy → Google Chat notification.',
    tags: ['Jenkins', 'GitHub Actions', 'Ansible', 'Firebase', 'Groovy'],
    color: 'border-purple-500/30 hover:border-purple-500/60',
    accent: 'text-purple-400',
    clients: ['17+ pipelines', '3 environments'],
    impact: '60%',
    impactLabel: 'Less Manual Work',
  },
  {
    title: 'Full Observability Stack',
    metric: '70% reduction in MTTR',
    description: 'Built OneUptime + Azure Monitor alerts across 12+ services. TLSv1.2/1.3, SSH whitelisting, NSG hardening. SOC2 + CSPM reports.',
    tags: ['Azure Monitor', 'OneUptime', 'Prometheus', 'Grafana', 'SOC2'],
    color: 'border-green-500/30 hover:border-green-500/60',
    accent: 'text-green-400',
    clients: ['12+ services monitored'],
    impact: '70%',
    impactLabel: 'MTTR Reduced',
  },
  {
    title: 'DC → DR Zero-Loss Failover',
    metric: 'Zero data loss · AU Small Finance Bank',
    description: 'Migrated 2 app + 2 web servers, Redis, MySQL from Mumbai → Bangalore. NGINX round-robin + PM2 from scratch. DB encryption under 1-week deadline.',
    tags: ['Disaster Recovery', 'MySQL', 'Redis', 'NGINX', 'PM2'],
    color: 'border-orange-500/30 hover:border-orange-500/60',
    accent: 'text-orange-400',
    clients: ['AU Small Finance Bank'],
    impact: '0',
    impactLabel: 'Data Loss',
  },
  {
    title: 'Infrastructure as Code',
    metric: 'Eliminated config drift entirely',
    description: 'Reusable Terraform modules for Azure + AWS. 12+ Ansible playbooks across environments. Nightly log aggregation + weekly S3 archival via Bash + cron.',
    tags: ['Terraform', 'Ansible', 'AWS S3', 'Bash', 'Azure'],
    color: 'border-cyan-500/30 hover:border-cyan-500/60',
    accent: 'text-cyan-400',
    clients: ['Multi-cloud'],
    impact: '100%',
    impactLabel: 'Drift Eliminated',
  },
  {
    title: 'AKS + ArgoCD GitOps Migration',
    metric: '16% monthly cloud cost reduction',
    description: 'Deployed AKS + ArgoCD GitOps proof-of-concept. Leading VMSS→AKS migration. Azure cost governance: reserved instances, right-sizing, cleanup.',
    tags: ['AKS', 'ArgoCD', 'GitOps', 'Kubernetes', 'Helm'],
    color: 'border-pink-500/30 hover:border-pink-500/60',
    accent: 'text-pink-400',
    clients: ['Cost optimization'],
    impact: '16%',
    impactLabel: 'Cost Saved',
  },
]

export default function Projects() {
  return (
    <section className="relative px-6 py-24 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Production Impact
        </h2>
        <p className="text-gray-400 text-lg">
          Real infrastructure. Real metrics. Real enterprise clients.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className={`relative p-6 rounded-2xl border bg-white/3 backdrop-blur-sm transition-all duration-300 ${p.color} group`}
          >
            {/* Impact badge */}
            <div className={`absolute top-4 right-4 text-right`}>
              <div className={`text-2xl font-bold ${p.accent}`}>{p.impact}</div>
              <div className="text-xs text-gray-500">{p.impactLabel}</div>
            </div>

            <h3 className="text-white font-semibold text-lg mb-2 pr-16 leading-tight">
              {p.title}
            </h3>

            <p className={`text-sm font-mono mb-3 ${p.accent}`}>
              {p.metric}
            </p>

            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {p.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 mb-4">
              {p.tags.map((t) => (
                <span key={t} className="px-2 py-0.5 text-xs bg-white/5 border border-white/10 rounded text-gray-300">
                  {t}
                </span>
              ))}
            </div>

            {/* Clients */}
            <div className="flex flex-wrap gap-1">
              {p.clients.map((c) => (
                <span key={c} className={`px-2 py-0.5 text-xs rounded border ${p.color} ${p.accent}`}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}