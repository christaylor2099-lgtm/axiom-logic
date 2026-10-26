import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AXIOM | Agentic Motion & Experience Studio',
  description: 'Full-stack AI-native studio fusing Claude 5 strategy, Higgsfield 3D motion, and Make.com business automations.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-obsidian text-white antialiased selection:bg-neon-cyan selection:text-obsidian">
        {children}
      </body>
    </html>
  )
}
