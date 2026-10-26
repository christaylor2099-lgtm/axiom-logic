'use client'

import React from 'react'

export const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-glass-border glass-card mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
              <path d="M50 5 L92 88 L72 88 L50 42 L28 88 L8 88 Z" />
              <path d="M36 62 L64 62 L50 34 Z" className="fill-neon-cyan" />
            </svg>
          </div>
          <div>
            <span className="font-display text-lg font-extrabold text-white tracking-wider">AXIOM</span>
            <p className="text-xs text-gray-400">Agentic Motion & Experience Studio</p>
          </div>
        </div>

        {/* Location Badges */}
        <div className="flex items-center gap-6 text-xs text-gray-400 font-mono">
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-neon-cyan" /> Cape Town</span>
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-champagne-gold" /> London</span>
          <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-white" /> San Francisco</span>
        </div>

        <div className="text-xs text-gray-500 font-mono">
          © {new Date().getFullYear()} AXIOM Studio. Powered by Petl Pay Settlement Engine.
        </div>
      </div>
    </footer>
  )
}
