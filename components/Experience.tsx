'use client'

import { useEffect, useRef } from 'react'

const experiences = [
  {
    role: 'Web Development Instructor',
    company: 'SQI College of ICT',
    location: 'Abeokuta, Nigeria',
    period: 'January 2025 – Present',
    type: 'Full-time',
    bullets: [
      'Led curriculum design and full-stack training for 100+ students across frontend and backend tracks — HTML/CSS, JavaScript, React.js, Node.js, and MongoDB.',
      'Architected project scaffolds and real-world application structures that students used as foundations for portfolio work, enforcing production-grade coding standards.',
      'Conducted structured code reviews, debugging sessions, and mentorship — improving backend logic quality and architectural thinking across student projects.',
      'Introduced and enforced Git/GitHub workflows, RESTful API design principles, and Postman-based API testing in collaborative team environments.',
      'Delivered Agile-aligned, milestone-driven project cycles to prepare students for real engineering team expectations.',
    ],
    stack: ['Node.js', 'React.js', 'MongoDB', 'Git', 'REST APIs'],
  },
  {
    role: 'Full-Stack Developer — SIWES Placement',
    company: 'SQI College of ICT',
    location: 'Abeokuta, Nigeria',
    period: 'August 2023 – January 2024',
    type: 'Industrial Training',
    note: 'Mandatory SIWES university placement — returned to FUNAAB to complete final year',
    bullets: [
      'Built full-stack web applications using React.js, Node.js, Express.js, and MongoDB within a structured team environment.',
      'Developed RESTful APIs with CRUD operations, input validation, JWT authentication, and role-based protected routes.',
      'Implemented user authentication systems, database schema design, and third-party API integrations.',
      'Collaborated via Git/GitHub for branch management, feature development, and code review.',
      'Improved frontend UX through reusable, component-based React architecture and responsive design implementation.',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Git'],
  },
]

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="py-28 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        <div className="reveal mb-16">
          <span className="section-label">Experience</span>
          <div className="mt-2 w-8 h-px bg-gold-500" />
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-100">
            Where I've worked
          </h2>
        </div>

        <div className="reveal space-y-8">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="bg-[#081525] border border-[#122845] rounded-xl p-7 hover:border-[#1A3A5C] transition-colors"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                <div>
                  <h3 className="text-lg font-semibold text-slate-100">{exp.role}</h3>
                  <p className="text-gold-500 font-medium text-sm mt-0.5">{exp.company}</p>
                  {exp.note && (
                    <p className="text-xs text-slate-500 font-mono mt-1 italic">{exp.note}</p>
                  )}
                </div>
                <div className="shrink-0 text-right">
                  <span className="text-xs font-mono text-slate-500">{exp.period}</span>
                  <br />
                  <span className="text-xs px-2 py-0.5 rounded border border-[#1A3558] text-slate-500 font-mono">
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-[#122845] mb-5" />

              {/* Bullets */}
              <ul className="space-y-3 mb-5">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                    <span className="text-gold-500 mt-1 shrink-0">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Stack */}
              <div className="flex flex-wrap gap-2">
                {exp.stack.map(s => (
                  <span key={s} className="text-xs font-mono px-2.5 py-1 rounded bg-[#0D1F35] border border-[#1A3558] text-slate-400">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education card */}
        <div className="reveal mt-8 bg-[#081525] border border-[#122845] rounded-xl p-7">
          <div className="flex items-start justify-between flex-wrap gap-3">
            <div>
              <span className="section-label text-[10px]">Education</span>
              <h3 className="mt-1 text-lg font-semibold text-slate-100">B.Sc. Computer Science — Second Class Upper</h3>
              <p className="text-gold-500 text-sm font-medium mt-0.5">Federal University of Agriculture, Abeokuta (FUNAAB)</p>
            </div>
            <span className="text-xs font-mono text-slate-500">Dec 2019 – Sep 2024</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500 font-mono">
            {['Software Engineering', 'Data Structures & Algorithms', 'Database Systems', 'Computer Networks', 'Operating Systems'].map(c => (
              <span key={c} className="px-2.5 py-1 rounded bg-[#0D1F35] border border-[#122845]">{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
