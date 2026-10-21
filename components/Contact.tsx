'use client'

import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.15 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const copyEmail = () => {
    navigator.clipboard.writeText('abioladave24@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const contacts = [
    {
      label: 'Email',
      value: 'abioladave24@gmail.com',
      href: 'mailto:abioladave24@gmail.com',
      mono: true,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/abiola-odesomi',
      href: 'https://linkedin.com/in/abiola-odesomi',
    },
    {
      label: 'GitHub',
      value: 'github.com/AbiolaDave',
      href: 'https://github.com/AbiolaDave',
    },
    {
      label: 'Phone',
      value: '07055056624',
      href: 'tel:07055056624',
      mono: true,
    },
  ]

  return (
    <section id="contact" className="py-28 relative" ref={ref}>
      <div className="max-w-3xl mx-auto px-6 text-center">

        <div className="reveal mb-12">
          <span className="section-label">Contact</span>
          <div className="mt-2 w-8 h-px bg-gold-500 mx-auto" />
        </div>

        <div className="reveal">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-100 leading-tight mb-5">
            Let's build something
            <br />
            <span className="gradient-text">together.</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed mb-12 max-w-md mx-auto">
            I'm actively looking for backend or full-stack engineering roles. If you have a role or project that could be a good fit, I'd love to hear from you.
          </p>
        </div>

        {/* Email CTA */}
        <div className="reveal mb-10">
          <button
            onClick={copyEmail}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gold-500 text-navy-900 font-semibold rounded hover:bg-gold-400 transition-all duration-200 text-base"
          >
            <span className="font-mono text-sm">abioladave24@gmail.com</span>
            <span className="text-xs opacity-70 group-hover:opacity-100 transition-opacity">
              {copied ? '✓ Copied!' : 'click to copy'}
            </span>
          </button>
          <p className="mt-3 text-xs text-slate-600">or send me a message directly</p>
        </div>

        {/* Links grid */}
        <div className="reveal grid grid-cols-2 sm:grid-cols-4 gap-3">
          {contacts.map(c => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="group bg-[#081525] border border-[#122845] rounded-xl p-4 text-left hover:border-gold-500/30 transition-all"
            >
              <div className="text-xs text-slate-600 mb-1 font-mono group-hover:text-gold-600 transition-colors">{c.label}</div>
              <div className={`text-xs text-slate-400 truncate group-hover:text-slate-200 transition-colors ${c.mono ? 'font-mono' : ''}`}>
                {c.value}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
