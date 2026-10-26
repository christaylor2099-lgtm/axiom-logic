'use client'

import React, { useState } from 'react'

export const PricingMatrix = () => {
  const [currency, setCurrency] = useState<'USD' | 'ZAR'>('USD')

  const tiers = [
    {
      name: "The Motion Sprint",
      tagline: "High-velocity 3D motion, video ad campaigns, and visual assets.",
      usd: 2745,
      zar: 46665,
      period: "/ month",
      featured: false,
      features: [
        "Unlimited 3D motion loops & Higgsfield renders",
        "Cinematic video ad campaigns for social",
        "Lottie website micro-animations",
        "48-hour average turnaround",
        "1 active request at a time",
        "Pause or cancel anytime"
      ]
    },
    {
      name: "The Agentic UX Pod",
      tagline: "Full-scale digital product design and embedded strategy.",
      usd: 5495,
      zar: 93415,
      period: "/ month",
      featured: true,
      features: [
        "1 Dedicated Senior Designer + 1 Product Strategist",
        "ALL Motion Sprint deliverables included",
        "Claude 5 agentic UX & conversational workflows",
        "Make.com / n8n business automation workflows",
        "Figma UI/UX screens & Next.js/Webflow builds",
        "72-hour pod deployment directly into Slack"
      ]
    },
    {
      name: "The Fractional Studio",
      tagline: "Agile product consulting and AI readiness audits.",
      usd: 1650,
      zar: 28050,
      period: "/ month ($95/hr)",
      featured: false,
      features: [
        "Product UX & AI-readiness assessments",
        "Interactive project scoping & wireframing",
        "High-risk assumption validation sprints",
        "Weekly strategy check-ins with senior leads",
        "Flexible hourly sprint billing"
      ]
    }
  ]

  return (
    <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-champagne-gold">TRANSPARENT RETAINERS</span>
        <h2 className="font-display text-3xl md:text-5xl font-extrabold mt-3 text-white">Predictable Investment. Zero Agency Overhead.</h2>
        
        {/* USD / ZAR Currency Switcher */}
        <div className="mt-8 inline-flex items-center p-1 rounded-full glass-card border-glass-border">
          <button
            onClick={() => setCurrency('USD')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
              currency === 'USD' ? 'bg-neon-cyan text-obsidian shadow-md' : 'text-gray-400 hover:text-white'
            }`}
          >
            USD ($)
          </button>
          <button
            onClick={() => setCurrency('ZAR')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
              currency === 'ZAR' ? 'bg-neon-cyan text-obsidian shadow-md' : 'text-gray-400 hover:text-white'
            }`}
          >
            ZAR (R)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {tiers.map((tier, idx) => (
          <div
            key={idx}
            className={`glass-card p-8 rounded-2xl relative flex flex-col justify-between transition-all duration-300 ${
              tier.featured ? 'border-neon-cyan shadow-2xl neon-glow lg:-translate-y-2 bg-glass-bg' : 'border-glass-border'
            }`}
          >
            {tier.featured && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-neon-cyan text-obsidian text-[10px] font-extrabold uppercase tracking-widest px-4 py-1 rounded-full">
                Most Popular
              </span>
            )}

            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-2">{tier.name}</h3>
              <p className="text-xs text-gray-400 mb-6 leading-relaxed">{tier.tagline}</p>

              <div className="mb-8">
                <span className="font-display text-4xl font-extrabold text-white">
                  {currency === 'USD' ? `$${tier.usd.toLocaleString()}` : `R${tier.zar.toLocaleString()}`}
                </span>
                <span className="text-xs text-gray-400 font-mono ml-2">{tier.period}</span>
              </div>

              <ul className="space-y-3 mb-8 text-xs text-gray-300">
                {tier.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-neon-cyan shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              className={`w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                tier.featured
                  ? 'bg-neon-cyan text-obsidian hover:bg-white shadow-lg neon-glow'
                  : 'bg-white/10 text-white hover:bg-white hover:text-obsidian'
              }`}
            >
              Deploy Pod Now →
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
