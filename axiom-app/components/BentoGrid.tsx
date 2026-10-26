'use client'

import React from 'react'

export const BentoGrid = () => {
  const cards = [
    {
      title: "Cinematic 3D Motion Included",
      subtitle: "UNFAIR ADVANTAGE 01",
      copy: "While flat-rate subscription models like Designjoy explicitly ban 3D modeling and video ads, AXIOM delivers high-fidelity 3D motion loops and video ad campaigns in 48-hour delivery cycles.",
      tag: "3D & Motion"
    },
    {
      title: "72-Hour Pod Deployment",
      subtitle: "UNFAIR ADVANTAGE 02",
      copy: "Avoid $20,000+ agency minimums and 6-week hiring delays. Embedded senior product strategists and designers deploy directly into your Slack in under 72 hours.",
      tag: "Slack Embed"
    },
    {
      title: "Make.com & AI Business Automation",
      subtitle: "UNFAIR ADVANTAGE 03",
      copy: "We build full-stack digital products—from Framer/Next.js UI to custom Claude support agents, automated CRM lead scoring, and Make.com backend workflows.",
      tag: "Rank 10 Automation"
    },
    {
      title: "Global Talent Arbitrage & Petl Pay",
      subtitle: "UNFAIR ADVANTAGE 04",
      copy: "Top 1% vetted South African senior talent delivers Silicon Valley-grade output with a 25%–40% cost advantage, 100% European/UK timezone overlap, and instant 2-minute local settlement.",
      tag: "25-40% Cost Savings"
    }
  ]

  return (
    <section id="comparison" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-champagne-gold">UNFAIR ADVANTAGE</span>
        <h2 className="font-display text-3xl md:text-5xl font-extrabold mt-3 text-white">Why High-Growth Tech Teams Switch to AXIOM</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, idx) => (
          <div key={idx} className="glass-card p-8 rounded-2xl hover:border-neon-cyan/50 transition-all duration-300 relative group">
            <div className="flex justify-between items-start mb-6">
              <span className="text-[10px] font-mono text-neon-cyan uppercase tracking-widest bg-neon-cyan/10 px-3 py-1 rounded-full border border-neon-cyan/20">{card.tag}</span>
              <span className="text-xs font-mono text-gray-500">{card.subtitle}</span>
            </div>
            <h3 className="font-display text-2xl font-bold mb-4 text-white group-hover:text-neon-cyan transition-colors">{card.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{card.copy}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
