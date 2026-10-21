'use client'

import { useEffect, useRef } from 'react'

const projects = [
  {
    title: 'Learning Management System',
    description: 'A full-stack LMS with student enrollment, instructor content management, and role-based dashboards for three distinct user types. Designed to demonstrate real-world auth flows, protected routes, and scalable data architecture.',
    stack: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'RBAC', 'Tailwind CSS'],
    links: {
      live: 'https://learning-management-system-ten-bay.vercel.app/',
      frontend: 'https://github.com/AbiolaDave/learning-management-system',
      backend: 'https://github.com/AbiolaDave/LMS-backend',
    },
    gradient: 'from-blue-600/20 via-indigo-600/10 to-transparent',
    tag: 'Featured',
  },
  {
    title: 'EventTrackPro',
    description: 'An event management platform for creating, managing, and tracking events with QR-code-based attendee authentication and real-time headcount. Full CRUD backend with authentication and attendee workflows.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'QR Code API'],
    links: {
      live: 'https://eventtrackpro.vercel.app/',
      frontend: 'https://github.com/AbiolaDave/eventtrackpro',
      backend: 'https://github.com/AbiolaDave/EventTrackPro-Backend',
    },
    gradient: 'from-emerald-600/20 via-teal-600/10 to-transparent',
    tag: 'Shipped',
  },
  {
    title: 'SmartTrack',
    description: 'A QR-code-based attendance system that allows students to mark attendance by scanning a code. Designed for real-time attendance tracking with simple, reliable UX.',
    stack: ['React.js', 'Node.js', 'MongoDB', 'QR Code'],
    links: {
      live: 'https://smarttrack.vercel.app/',
    },
    gradient: 'from-violet-600/20 via-purple-600/10 to-transparent',
    tag: 'Live',
  },
]

function LinkIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="inline-block">
      <path d="M10 2L2 10M10 2H5.5M10 2V6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function Projects() {
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
    <section id="projects" className="py-28 bg-[#060E1C] relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        <div className="reveal mb-16">
          <span className="section-label">Projects</span>
          <div className="mt-2 w-8 h-px bg-gold-500" />
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-100">
            What I've shipped
          </h2>
        </div>

        <div className="reveal grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div key={i} className="project-card rounded-xl overflow-hidden flex flex-col">
              {/* Top gradient bar */}
              <div className={`h-28 bg-gradient-to-br ${project.gradient} flex items-end p-5`}>
                <span className="text-xs font-mono border border-gold-500/30 text-gold-400 px-2 py-0.5 rounded-full">
                  {project.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-base font-semibold text-slate-100 mb-2">{project.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">{project.description}</p>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.stack.map(s => (
                    <span key={s} className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0D1F35] border border-[#1A3558] text-slate-500">
                      {s}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-[#122845]">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-gold-400 hover:text-gold-300 transition-colors flex items-center gap-1"
                    >
                      Live Demo <LinkIcon />
                    </a>
                  )}
                  {project.links.frontend && (
                    <a
                      href={project.links.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1"
                    >
                      Frontend <LinkIcon />
                    </a>
                  )}
                  {project.links.backend && (
                    <a
                      href={project.links.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1"
                    >
                      Backend <LinkIcon />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="reveal mt-10 text-center">
          <a
            href="https://github.com/AbiolaDave"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#1A3558] text-slate-400 rounded hover:border-gold-500/40 hover:text-gold-400 transition-all text-sm font-medium"
          >
            View all repositories on GitHub <LinkIcon />
          </a>
        </div>
      </div>
    </section>
  )
}
