'use client'

const certs = [
  {
    name: 'AZ-104: Microsoft Azure Administrator',
    issuer: 'Microsoft',
    status: 'In Progress',
    target: 'July 2026',
    color: 'border-blue-500/30 bg-blue-500/5',
    accent: 'text-blue-400',
    badge: '🎯',
    progress: 65,
  },
  {
    name: 'CKA: Certified Kubernetes Administrator',
    issuer: 'CNCF',
    status: 'Planned',
    target: 'Q4 2026',
    color: 'border-purple-500/30 bg-purple-500/5',
    accent: 'text-purple-400',
    badge: '⚙️',
    progress: 30,
  },
]

const education = {
  degree: 'Bachelor of Computer Applications (BCA)',
  college: 'D.A.V. College, MDU University',
  location: 'Faridabad',
  year: '2019',
}

export default function Certifications() {
  return (
    <section className="relative px-6 py-24 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Certifications & Education
        </h2>
        <p className="text-gray-400 text-lg">
          Continuously leveling up cloud and Kubernetes skills
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {certs.map((c) => (
          <div key={c.name} className={`p-6 rounded-2xl border ${c.color} transition-all duration-300`}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-2xl">{c.badge}</span>
                <div className={`text-xs font-mono mt-1 ${c.accent}`}>{c.issuer}</div>
              </div>
              <span className={`px-3 py-1 text-xs rounded-full border ${c.color} ${c.accent}`}>
                {c.status}
              </span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">{c.name}</h3>
            <p className="text-gray-400 text-sm mb-4">Target: {c.target}</p>
            <div className="w-full bg-white/10 rounded-full h-1.5">
              <div
                className={`h-1.5 rounded-full transition-all duration-1000 ${c.accent.replace('text-', 'bg-')}`}
                style={{ width: `${c.progress}%` }}
              />
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-xs text-gray-600">Progress</span>
              <span className={`text-xs ${c.accent}`}>{c.progress}%</span>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 rounded-2xl border border-white/10 bg-white/3">
        <div className="flex items-start gap-4">
          <span className="text-3xl">🎓</span>
          <div>
            <h3 className="text-white font-semibold text-lg">{education.degree}</h3>
            <p className="text-gray-400 text-sm mt-1">{education.college} · {education.location}</p>
            <p className="text-gray-600 text-sm mt-1">Graduated {education.year}</p>
          </div>
        </div>
      </div>
    </section>
  )
}