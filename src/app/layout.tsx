import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Akash Bhadana | DevOps Engineer | Azure · Kubernetes · Terraform',
  description: 'DevOps Engineer with 2+ years managing Azure/AWS production infrastructure. 50K users, 99.999% SLA. Available June 2026.',
  keywords: ['DevOps Engineer', 'Kubernetes', 'Terraform', 'Azure', 'AWS', 'CI/CD', 'SRE', 'Cloud Engineer', 'Jenkins', 'ArgoCD'],
  authors: [{ name: 'Akash Bhadana' }],
  openGraph: {
    title: 'Akash Bhadana | DevOps Engineer',
    description: '50K users · 99.999% SLA · Azure + AWS · Available June 2026',
    url: 'https://akashbhadana-dev.vercel.app',
    siteName: 'Akash Bhadana Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akash Bhadana | DevOps Engineer',
    description: '50K users · 99.999% SLA · Azure + AWS · Available June 2026',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}