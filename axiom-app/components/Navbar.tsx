'use client'

import React from 'react'

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-glass-border px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* AXIOM Logo Mark & Wordmark */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="relative w-8 h-8 flex items-center justify-center">
            {/* Geometric Sharp A Emblem */}
            <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
              <path d="M50 5 L92 88 L72 88 L50 42 L28 88 L8 88 Z" />
              <path d="M36 62 L64 62 L50 34 Z" className="fill-neon-cyan" />
            </svg>
          </div>
          <span className="font-display text-xl font-extrabold tracking-wider text-white">
            AXIOM <span className="text-neon-cyan text-xs tracking-widest font-sans font-medium uppercase ml-1">Studio</span>
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#co-creator" className="hover:text-neon-cyan transition-colors">Co-Creator</a>
          <a href="#comparison" className="hover:text-neon-cyan transition-colors">Why AXIOM</a>
          <a href="#process" className="hover:text-neon-cyan transition-colors">Workflow</a>
          <a href="#pricing" className="hover:text-neon-cyan transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-neon-cyan transition-colors">FAQ</a>
        </div>

        {/* CTA Button */}
        <a
          href="#pricing"
          className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-obsidian bg-neon-cyan hover:bg-white transition-all shadow-lg neon-glow"
        >
          Deploy Pod →
        </a>
      </div>
    </nav>
  )
}
