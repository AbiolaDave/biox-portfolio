import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Abiola Odesomi — Full-Stack Developer',
  description: 'Full-Stack Developer specialising in NestJS, TypeScript, Node.js, PostgreSQL, React.js and Next.js. Open to remote roles.',
  keywords: ['Full-Stack Developer', 'NestJS', 'TypeScript', 'Node.js', 'PostgreSQL', 'React', 'Next.js', 'Nigeria', 'Remote'],
  authors: [{ name: 'Abiola Odesomi' }],
  openGraph: {
    title: 'Abiola Odesomi — Full-Stack Developer',
    description: 'Building scalable, production-ready web applications. Open to remote roles.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-navy-900 text-slate-200 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
