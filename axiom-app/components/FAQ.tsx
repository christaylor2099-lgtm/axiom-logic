'use client'

import React, { useState } from 'react'

export const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  const faqs = [
    {
      q: "How quickly can our team deploy an AXIOM pod?",
      a: "Your embedded pod can deploy directly into your Slack in under 72 hours following onboarding sign-off."
    },
    {
      q: "Can we upload our existing Corporate Identity (CI) manual?",
      a: "Yes! Upload your CI manual (PDF or brand guide) directly in our Co-Creator Portal. Our Claude 5 engine extracts your exact color palettes, typography rules, and tone guidelines to keep all outputs 100% on-brand."
    },
    {
      q: "Can we pause or cancel our subscription?",
      a: "Yes! You can pause or cancel your subscription at any time without long-term commitments or lock-in contracts."
    },
    {
      q: "How does AXIOM maintain senior-level creative quality?",
      a: "We pair vetted senior South African creative leads with automated Claude Desktop /critique audits to strictly enforce dark-mode contrast, typography hierarchy, and zero 'AI slop'."
    },
    {
      q: "How do cross-border payments work?",
      a: "Powered by Petl Pay, overseas clients pay via credit card or stablecoins (USDC/USDT), while our engine executes instant local contractor payouts in under 2 minutes."
    }
  ]

  return (
    <section id="faq" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-xs font-mono uppercase tracking-widest text-champagne-gold">FREQUENTLY ASKED QUESTIONS</span>
        <h2 className="font-display text-3xl md:text-5xl font-extrabold mt-3 text-white">Everything You Need to Know</h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="glass-card rounded-xl border border-glass-border overflow-hidden">
            <button
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full p-6 text-left flex justify-between items-center gap-4 hover:text-neon-cyan transition-colors"
            >
              <span className="font-display font-bold text-base text-white">{faq.q}</span>
              <span className="text-neon-cyan font-mono text-xl">{openIdx === idx ? '−' : '+'}</span>
            </button>
            {openIdx === idx && (
              <div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed border-t border-glass-border/50 pt-4">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
