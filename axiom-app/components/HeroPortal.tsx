'use client'

import React, { useState } from 'react'

export const HeroPortal = () => {
  const [prompt, setPrompt] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!prompt && !file) return
    setLoading(true)
    setResult(null)

    try {
      if (file) {
        const formData = new FormData()
        formData.append('file', file)
        const res = await fetch('/api/co-creator/upload-ci', {
          method: 'POST',
          body: formData,
        })
        const ciData = await res.json()
        
        const genRes = await fetch('/api/co-creator/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt: prompt || `Generated from ${file.name}`, ciTokens: ciData }),
        })
        const genData = await genRes.json()
        setResult(genData)
      } else {
        const genRes = await fetch('/api/co-creator/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt }),
        })
        const genData = await genRes.json()
        setResult(genData)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="co-creator" className="pt-36 pb-20 px-6 relative overflow-hidden min-h-screen flex flex-col items-center justify-center">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Online Status Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs text-gray-300 mb-8 border-glass-border">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="font-mono text-gray-200">● AXIOM Claude 5 & Higgsfield AI Pipelines: Online</span>
      </div>

      {/* Hero Headline */}
      <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-center max-w-5xl leading-tight mb-6">
        WE DESIGN WHAT DOESN’T EXIST YET. <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-white to-champagne-gold">INSTANTLY.</span>
      </h1>

      <p className="text-gray-400 text-center max-w-2xl text-base md:text-lg mb-10 leading-relaxed">
        The Agentic Motion & Experience Studio. Fusing Claude 5 strategy, Higgsfield 3D motion, and senior human creative direction.
      </p>

      {/* Co-Creator Input Box */}
      <div className="w-full max-w-3xl glass-card rounded-2xl p-4 md:p-6 shadow-2xl relative z-10 border-glass-border">
        <form onSubmit={handleGenerate} className="space-y-4">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="What cinematic visual, agentic software, or brand identity can we build for you today? (e.g. 'A fintech platform for fractional real estate')"
            className="w-full bg-obsidian/60 border border-glass-border rounded-xl p-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan transition-all resize-none h-28"
          />

          {/* CI Manual Drag & Drop Uploader */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <label className="flex items-center gap-2 text-xs text-gray-400 cursor-pointer hover:text-white transition-colors bg-white/5 px-4 py-2.5 rounded-lg border border-glass-border w-full sm:w-auto">
              <svg className="w-4 h-4 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              <span>{file ? file.name : 'Upload CI Manual (PDF / Brand Guide)'}</span>
              <input
                type="file"
                accept=".pdf,image/*"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="hidden"
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-neon-cyan text-obsidian font-bold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-lg neon-glow disabled:opacity-50"
            >
              {loading ? 'Synthesizing...' : 'Generate Proof-of-Concept →'}
            </button>
          </div>
        </form>

        {/* Live Result Output Container */}
        {result && (
          <div className="mt-6 pt-6 border-t border-glass-border space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-champagne-gold uppercase tracking-wider">Brand Concept Matrix</span>
              <span className="text-xs text-gray-400">Target Tier: {result.brandStrategy.recommendedTier}</span>
            </div>

            <div className="bg-obsidian/80 p-4 rounded-xl border border-glass-border space-y-3">
              <h3 className="text-sm font-bold text-white">{result.brandStrategy.archetype}</h3>
              <p className="text-xs text-gray-300">{result.brandStrategy.copywritingHook}</p>

              {/* Swatches */}
              <div className="flex gap-2 pt-2">
                {result.brandStrategy.palette.map((color: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded text-[10px] font-mono border border-glass-border">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                    <span>{color}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Video Render Preview */}
            <div className="relative rounded-xl overflow-hidden border border-glass-border bg-obsidian p-4 text-center">
              <div className="text-xs font-mono text-neon-cyan mb-2">Higgsfield 3D Render Script Triggered:</div>
              <p className="text-xs text-gray-400 italic">"{result.higgsfieldPrompt}"</p>
              <div className="mt-4 p-6 rounded-lg bg-white/5 border border-dashed border-glass-border text-xs text-gray-300">
                [3D Motion Preview Rendering — 48-Hour Feedback Loop Attached]
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
