'use client'

const experiences = [
  {
    role: 'DevOps Engineer',
    company: 'Competent Groove',
    location: 'Mohali, Punjab',
    period: 'Sep 2024 – Present',
    color: 'border-blue-500',
    accent: 'text-blue-400',
    highlights: [
      'VMSS cluster — 50K users, 450K+ req/mo, 99.999% SLA',
      '17+ Jenkins pipelines — 60% less manual deployment effort',
      'Terraform + Ansible IaC — eliminated config drift entirely',
      'Observability stack — 70% MTTR reduction across 12+ services',
      'P0 outage resolved — isolated L&T traffic spike in 10 days',
      'DC→DR failover for AU Bank — zero data loss, Mumbai→Bangalore',
      'AKS + ArgoCD GitOps — 16% monthly cloud cost reduction',
      'SOC2 + Azure CSPM compliance for SBI, AU Bank',
    ],
    clients: ['SBI', 'L&T', 'KreditBee', 'Policybazaar', 'AU Small Finance Bank', 'MGL', 'Shriram Finance'],
  },
  {
    role: 'IT Administrator',
    company: 'CRB Industry Pvt. Ltd.',
    location: 'Faridabad',
    period: 'Apr 2023 – Aug 2024',
    color: 'border-gray-500',
    accent: 'text-gray-400',
    highlights: [
      'Managed IT infrastructure for 20+ endpoints',
      'Hardware provisioning, OS patching, network security',
      'Access controls, monthly audits, data protection compliance',
      '100% operational uptime maintained',
    ],
    clients: [],
  },
]

export default function Experience() {
  return (
    <section className="relative px-6 py-24 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Experience
        </h2>
        <p className="text-gray-400 text-lg">
          ~3.5 years across DevOps and IT infrastructure
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-white/10" />

        <div className="space-y-12">
          {experiences.map((e, i) => (
            <div key={i} className="relative pl-8 md:pl-24">
              {/* Dot */}
              <div className={`absolute left-[-4px] md:left-[28px] top-2 w-3 h-3 rounded-full border-2 ${e.color} bg-[#0a0a0f]`} />

              {/* Period */}
              <div className={`text-sm font-mono mb-1 ${e.accent}`}>{e.period}</div>

              {/* Role + Company */}
              <div className="flex flex-wrap items-baseline gap-3 mb-1">
                <h3 className="text-xl font-bold text-white">{e.role}</h3>
                <span className="text-gray-400">@ {e.company}</span>
                <span className="text-gray-600 text-sm">{e.location}</span>
              </div>

              {/* Clients */}
              {e.clients.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-4">
                  {e.clients.map((c) => (
                    <span key={c} className={`px-2 py-0.5 text-xs border rounded ${e.color} ${e.accent} opacity-70`}>
                      {c}
                    </span>
                  ))}
                </div>
              )}

              {/* Highlights */}
              <ul className="space-y-2">
                {e.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-3 text-gray-400 text-sm">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${e.color.replace('border-', 'bg-')}`} />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}