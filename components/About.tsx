'use client'

import { useEffect, useRef } from 'react'

const stats = [
  { value: '3+', label: 'Years experience' },
  { value: '100+', label: 'Students trained' },
  { value: '4', label: 'Live projects shipped' },
  { value: '2:1', label: 'CS degree (FUNAAB)' },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.15 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-28 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Label */}
        <div className="reveal mb-16">
          <span className="section-label">About</span>
          <div className="mt-2 w-8 h-px bg-gold-500" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — Bio */}
          <div className="reveal space-y-5">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 leading-tight">
              Building real things,<br />
              <span className="gradient-text">not just portfolios.</span>
            </h2>

            <div className="space-y-4 text-slate-400 text-base leading-relaxed">
              <p>
                I'm a Full-Stack Developer with a genuine interest in backend architecture — how systems talk to each other, how APIs are designed to survive scale, and how code stays maintainable months after it's written.
              </p>
              <p>
                I graduated with a Second Class Upper in Computer Science from FUNAAB in 2024, completing a mandatory SIWES industrial placement at SQI College of ICT where I built full-stack applications in a team environment.
              </p>
              <p>
                Since graduation, I've been the lead full-stack instructor at SQI — designing curriculum, conducting code reviews, and mentoring 100+ students through building production-grade applications. That experience sharpened my ability to communicate technical decisions clearly and work effectively in collaborative engineering teams.
              </p>
              <p>
                I'm now looking for a backend or full-stack engineering role where I can contribute clean, well-tested code and keep growing fast.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <span className="px-3 py-1 text-xs font-mono border border-[#1A3558] text-slate-400 rounded">
                📍 Abeokuta, Nigeria
              </span>
              <span className="px-3 py-1 text-xs font-mono border border-[#1A3558] text-slate-400 rounded">
                🌍 Open to remote
              </span>
              <span className="px-3 py-1 text-xs font-mono border border-emerald-500/30 text-emerald-400 rounded">
                ✓ Available now
              </span>
            </div>
          </div>

          {/* Right — Stats */}
          <div className="reveal">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-[#081525] border border-[#122845] rounded-xl p-6 hover:border-gold-500/30 transition-colors group"
                >
                  <div className="text-4xl font-bold gradient-text mb-1 group-hover:scale-105 transition-transform origin-left">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Currently learning */}
            <div className="mt-4 bg-[#081525] border border-[#122845] rounded-xl p-6">
              <p className="text-xs font-mono text-gold-500 mb-3 tracking-widest uppercase">Currently sharpening</p>
              <div className="flex flex-wrap gap-2">
                {['Redis'].map(s => (
                  <span key={s} className="text-xs px-2.5 py-1 rounded bg-gold-500/8 border border-gold-500/20 text-gold-400 font-mono">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
