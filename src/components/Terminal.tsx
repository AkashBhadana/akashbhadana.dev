'use client'

import { useEffect, useState } from 'react'

const commands = [
  { cmd: 'kubectl get pods -n production', output: 'pod/api-server-7d4f9b Running\npod/redis-cache-2x Running\npod/nginx-lb-9k Running' },
  { cmd: 'terraform apply -auto-approve', output: 'azurerm_virtual_machine_scale_set: Creating...\nazurerm_monitor_alert: Creating...\nApply complete! 12 added, 0 changed.' },
  { cmd: 'ansible-playbook deploy.yml', output: 'PLAY [Deploy Node.js App] ****\nTASK [Pull latest code] ok\nTASK [PM2 restart] changed\nPLAY RECAP: ok=3 changed=1' },
  { cmd: 'argocd app sync production', output: 'SYNCED  Healthy\nGroup  Kind        Namespace  Name     Status\nApps   Deployment  prod       api      Synced' },
  { cmd: 'docker build -t portfolio:latest .', output: 'Step 1/8: FROM node:18-alpine\nStep 8/8: CMD ["node","server.js"]\nSuccessfully built a3f9c2d1' },
]

export default function Terminal() {
  const [cmdIndex, setCmdIndex] = useState(0)
  const [cmdText, setCmdText] = useState('')
  const [outputText, setOutputText] = useState('')
  const [phase, setPhase] = useState<'typing' | 'output' | 'pause'>('typing')

  useEffect(() => {
    const current = commands[cmdIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (phase === 'typing') {
      if (cmdText.length < current.cmd.length) {
        timeout = setTimeout(() => setCmdText(current.cmd.slice(0, cmdText.length + 1)), 60)
      } else {
        timeout = setTimeout(() => setPhase('output'), 400)
      }
    } else if (phase === 'output') {
      if (outputText.length < current.output.length) {
        timeout = setTimeout(() => setOutputText(current.output.slice(0, outputText.length + 1)), 10)
      } else {
        timeout = setTimeout(() => setPhase('pause'), 2000)
      }
    } else {
      setCmdText('')
      setOutputText('')
      setCmdIndex((i) => (i + 1) % commands.length)
      setPhase('typing')
    }

    return () => clearTimeout(timeout)
  }, [cmdIndex, cmdText, outputText, phase])

  return (
    <section className="relative px-6 py-24 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Daily DevOps Work
        </h2>
        <p className="text-gray-400 text-lg">Real commands from production infrastructure</p>
      </div>

      <div className="rounded-2xl border border-white/10 overflow-hidden bg-[#0d1117]">
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
          <span className="ml-3 text-gray-500 text-xs font-mono">akash@prod-cluster:~</span>
        </div>

        {/* Terminal body */}
        <div className="p-6 font-mono text-sm min-h-48">
          <div className="flex items-start gap-2 mb-2">
            <span className="text-green-400 flex-shrink-0">❯</span>
            <span className="text-white">
              {cmdText}
              <span className="cursor-blink text-green-400">▋</span>
            </span>
          </div>
          {outputText && (
            <div className="text-gray-400 whitespace-pre-line pl-4 mt-2 leading-relaxed">
              {outputText}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}