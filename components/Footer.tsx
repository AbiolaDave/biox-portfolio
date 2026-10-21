export default function Footer() {
  return (
    <footer className="border-t border-[#0D1F35] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-gold-500 font-semibold text-sm">AO.dev</span>
        <p className="text-xs text-slate-600 font-mono">
          Designed & built by Abiola Odesomi · {new Date().getFullYear()}
        </p>
        <div className="flex gap-5">
          {[
            { label: 'GitHub', href: 'https://github.com/AbiolaDave' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/abiola-odesomi' },
            { label: 'Twitter/X', href: 'https://x.com/DaveAbiola' },
          ].map(l => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-600 hover:text-gold-400 transition-colors font-mono"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
