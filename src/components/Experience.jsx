import { motion } from 'framer-motion';
import { Briefcase, ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    role: "Backend Developer Intern",
    company: "Sypsys Technologies Pvt. Ltd",
    type: "Remote",
    period: "Dec 2025 – Feb 2026",
    highlights: [
      "Led end-to-end implementation of APIs using <strong>NodeJS</strong> and set up <strong>MongoDB</strong> for scalable, efficient data storage and retrieval.",
      "Collaborated with design teams to translate Figma mockups into responsive pages using <strong>React JS</strong> and <strong>Tailwind CSS</strong>, integrating <strong>Redux Toolkit</strong> for state management.",
      "Enhanced API performance and boosted system response times by rectifying critical bugs, implementing caching, and optimizing database queries.",
    ],
    tech: ["Node.js", "MongoDB", "React", "Redux", "Tailwind CSS"],
    color: "var(--color-primary)",
    icon: "💻",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <div className="section-tag">
            <span className="w-1.5 h-1.5 rounded-full bg-current inline-block" />
            Work History
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight" style={{ color: 'var(--color-foreground)' }}>
            Experience<span className="text-gradient">.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative ml-4 md:ml-0">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px md:left-0"
            style={{ background: 'linear-gradient(to bottom, transparent, var(--color-primary) 20%, var(--color-secondary) 80%, transparent)' }}
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-8 md:pl-12 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="timeline-dot" />

              {/* Card */}
              <div className="glass rounded-3xl p-8 hover:border-indigo-500/30 transition-all duration-300 group">
                {/* Top row */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                      style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)' }}
                    >
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold" style={{ color: 'var(--color-foreground)' }}>
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase size={14} style={{ color: 'var(--color-muted-foreground)' }} />
                        <span className="text-sm font-medium" style={{ color: 'var(--color-muted-foreground)' }}>
                          {exp.company}
                        </span>
                        <span
                          className="px-2 py-0.5 rounded-full text-xs font-medium"
                          style={{
                            background: 'rgba(99,102,241,0.1)',
                            color: 'var(--color-primary)',
                            border: '1px solid rgba(99,102,241,0.2)',
                          }}
                        >
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span
                    className="px-4 py-1.5 rounded-full text-xs font-mono font-medium flex-shrink-0 w-fit"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--color-border)',
                      color: 'var(--color-muted-foreground)',
                    }}
                  >
                    {exp.period}
                  </span>
                </div>

                {/* Highlights */}
                <ul className="space-y-3 mb-6">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed" style={{ color: 'var(--color-muted-foreground)' }}>
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: 'var(--color-primary)' }}
                      />
                      <span dangerouslySetInnerHTML={{ __html: h.replace(/<strong>/g, `<strong style="color:var(--color-foreground)">`).replace(/<\/strong>/g, '</strong>') }} />
                    </li>
                  ))}
                </ul>

                {/* Tech used */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, j) => (
                    <span key={j} className="skill-badge text-xs">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
