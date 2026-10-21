'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const codeLines = [
  { indent: 0, content: [{ t: 'keyword', v: 'const ' }, { t: 'var', v: 'developer' }, { t: 'default', v: ' = {' }] },
  { indent: 1, content: [{ t: 'key', v: 'name' }, { t: 'default', v: ': ' }, { t: 'string', v: '"Abiola Odesomi"' }, { t: 'default', v: ',' }] },
  { indent: 1, content: [{ t: 'key', v: 'role' }, { t: 'default', v: ': ' }, { t: 'string', v: '"Full-Stack Developer"' }, { t: 'default', v: ',' }] },
  { indent: 1, content: [{ t: 'key', v: 'location' }, { t: 'default', v: ': ' }, { t: 'string', v: '"Nigeria  (Remote ✓)"' }, { t: 'default', v: ',' }] },
  { indent: 1, content: [{ t: 'key', v: 'backend' }, { t: 'default', v: ': ' }, { t: 'bracket', v: '[' }, { t: 'string', v: '"NestJS"' }, { t: 'default', v: ', ' }, { t: 'string', v: '"Node.js"' }, { t: 'default', v: ', ' }, { t: 'string', v: '"TypeScript"' }, { t: 'bracket', v: ']' }, { t: 'default', v: ',' }] },
  { indent: 1, content: [{ t: 'key', v: 'frontend' }, { t: 'default', v: ': ' }, { t: 'bracket', v: '[' }, { t: 'string', v: '"React.js"' }, { t: 'default', v: ', ' }, { t: 'string', v: '"Next.js"' }, { t: 'default', v: ', ' }, { t: 'string', v: '"Tailwind"' }, { t: 'bracket', v: ']' }, { t: 'default', v: ',' }] },
  { indent: 1, content: [{ t: 'key', v: 'databases' }, { t: 'default', v: ': ' }, { t: 'bracket', v: '[' }, { t: 'string', v: '"PostgreSQL"' }, { t: 'default', v: ', ' }, { t: 'string', v: '"MongoDB"' }, { t: 'bracket', v: ']' }, { t: 'default', v: ',' }] },
  { indent: 1, content: [{ t: 'key', v: 'devsTrained' }, { t: 'default', v: ': ' }, { t: 'number', v: '50' }, { t: 'default', v: ',' }] },
  { indent: 1, content: [{ t: 'key', v: 'available' }, { t: 'default', v: ': ' }, { t: 'bool', v: 'true' }, { t: 'default', v: ',' }] },
  { indent: 0, content: [{ t: 'default', v: '}' }] },
]

const colorMap: Record<string, string> = {
  keyword: '#C792EA',
  var:     '#F59E0B',
  string:  '#C3E88D',
  bracket: '#89DDFF',
  key:     '#82AAFF',
  bool:    '#F78C6C',
  number:  '#F78C6C',
  default: '#E2EBF6',
}

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    let i = 0
    const timer = setInterval(() => {
      i++
      setVisibleLines(i)
      if (i >= codeLines.length) clearInterval(timer)
    }, 120)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16"
    >
      <div className="max-w-6xl mx-auto px-6 w-full py-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left — Text */}
        <div className={`transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/8 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium text-emerald-400 tracking-wide">Available for hire — remote roles</span>
          </div>

          {/* Name and portrait */}
          <div className="flex items-center justify-between gap-2 sm:gap-4 mb-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              <span className="text-slate-100">Abiola</span>
              <br />
              <span className="gradient-text">Odesomi</span>
            </h1>
            <div className="h-16 w-16 sm:h-28 sm:w-28 shrink-0 overflow-hidden rounded-full border border-gold-500/30 bg-[#0A1628] p-1 shadow-lg shadow-gold-500/10">
              <Image
                src="/me-removebg-preview.png"
                alt="Portrait of Abiola Odesomi"
                width={160}
                height={160}
                priority
                className="h-full w-full rounded-full object-contain object-bottom"
              />
            </div>
          </div>

          {/* Title */}
          <p className="text-xl text-slate-400 font-medium mb-6">
            Full-Stack Developer
            <span className="text-[#1A3A5C] mx-3">|</span>
            <span className="text-gold-500">Backend Specialist</span>
          </p>

          {/* Bio line */}
          <p className="text-slate-400 text-base leading-relaxed max-w-md mb-10">
            I build scalable, production-ready web applications — from database architecture and REST API design through to responsive React frontends. Based in Nigeria, open to remote roles worldwide.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-gold-500 text-navy-900 font-semibold rounded hover:bg-gold-400 transition-all duration-200 text-sm"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-[#1A3558] text-slate-300 font-medium rounded hover:border-gold-500/50 hover:text-gold-400 transition-all duration-200 text-sm"
            >
              Get in Touch
            </a>
          </div>

          {/* Social row */}
          <div className="flex items-center gap-5 mt-10">
            {[
              { label: 'GitHub', href: 'https://github.com/AbiolaDave' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/abiola-odesomi' },
              { label: 'Portfolio', href: 'https://biox-portfolio.vercel.app' },
            ].map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-slate-500 hover:text-gold-400 transition-colors animated-underline"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right — Code block */}
        <div
          className={`transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="relative">
            {/* Glow behind */}
            <div className="absolute -inset-4 bg-gold-500/5 rounded-2xl blur-xl" />

            <div className="relative bg-[#0A1628] border border-[#1A3558] rounded-xl overflow-hidden glow">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1A3558] bg-[#081520]">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                <span className="ml-3 text-xs font-mono text-slate-500">developer.ts</span>
              </div>

              {/* Code */}
              <div className="p-5 font-mono text-sm leading-7 min-h-[280px]">
                {codeLines.map((line, idx) => (
                  <div
                    key={idx}
                    className="flex"
                    style={{
                      opacity: idx < visibleLines ? 1 : 0,
                      transition: 'opacity 0.2s ease',
                    }}
                  >
                    {/* Line number */}
                    <span className="select-none text-slate-600 w-6 mr-4 text-right shrink-0 text-xs leading-7">
                      {idx + 1}
                    </span>
                    {/* Indent */}
                    <span style={{ paddingLeft: line.indent * 16 }}>
                      {line.content.map((token, ti) => (
                        <span key={ti} style={{ color: colorMap[token.t] || '#E2EBF6' }}>
                          {token.v}
                        </span>
                      ))}
                      {/* Cursor on last visible line */}
                      {idx === visibleLines - 1 && visibleLines < codeLines.length && (
                        <span className="cursor" />
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
        <span className="text-xs font-mono tracking-widest">scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-slate-600 to-transparent" />
      </div>
    </section>
  )
}
