'use client'

import { useEffect, useRef } from 'react'

const skillGroups = [
  {
    category: 'Languages',
    icon: '{ }',
    skills: ['JavaScript (ES6+)', 'TypeScript'],
  },
  {
    category: 'Backend',
    icon: '⚙',
    skills: ['Node.js', 'NestJS', 'Express.js', 'REST APIs', 'JWT Auth', 'RBAC', 'MVC Architecture'],
  },
  {
    category: 'Frontend',
    icon: '◻',
    skills: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    category: 'Databases',
    icon: '▪',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Sequelize'],
  },
  {
    category: 'DevOps & Tools',
    icon: '⌘',
    skills: ['Git / GitHub', 'Docker', 'Postman', 'Agile / Scrum', 'CI/CD'],
  },
  {
    category: 'In Progress',
    icon: '→',
    skills: ['Jest', 'Redis', 'Swagger / OpenAPI', 'GitHub Actions', 'WebSockets'],
    learning: true,
  },
]

export default function Skills() {
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
    <section id="skills" className="py-28 bg-[#060E1C] relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        <div className="reveal mb-16">
          <span className="section-label">Technical Skills</span>
          <div className="mt-2 w-8 h-px bg-gold-500" />
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-100">
            What I build with
          </h2>
        </div>

        <div className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className={`bg-[#081525] border rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                group.learning
                  ? 'border-gold-500/20 hover:border-gold-500/40'
                  : 'border-[#122845] hover:border-[#1A3558]'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-gold-500 text-lg">{group.icon}</span>
                <span className={`text-sm font-semibold tracking-wide ${
                  group.learning ? 'text-gold-400' : 'text-slate-300'
                }`}>
                  {group.category}
                </span>
                {group.learning && (
                  <span className="ml-auto text-[10px] font-mono text-gold-600 border border-gold-600/30 px-2 py-0.5 rounded-full">
                    active
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span
                    key={skill}
                    className={`skill-pill text-xs px-2.5 py-1 rounded font-mono ${
                      group.learning
                        ? 'bg-gold-500/5 text-gold-400/80 border-gold-500/20'
                        : 'bg-[#0D1F35] text-slate-400'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
