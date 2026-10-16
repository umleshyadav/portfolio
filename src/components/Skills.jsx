import { motion } from 'framer-motion';
import { Code2, Monitor, Server, Database, Brain, Wrench } from 'lucide-react';

const skillsData = [
  {
    category: "Languages",
    icon: Code2,
    color: "text-indigo-400",
    bg: "rgba(99,102,241,0.08)",
    border: "rgba(99,102,241,0.2)",
    skills: ["C++", "C", "Python", "JavaScript", "TypeScript"],
  },
  {
    category: "Frontend",
    icon: Monitor,
    color: "text-cyan-400",
    bg: "rgba(34,211,238,0.08)",
    border: "rgba(34,211,238,0.2)",
    skills: ["React.js", "Next.js", "Redux", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    icon: Server,
    color: "text-purple-400",
    bg: "rgba(168,85,247,0.08)",
    border: "rgba(168,85,247,0.2)",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    category: "Databases",
    icon: Database,
    color: "text-amber-400",
    bg: "rgba(251,191,36,0.08)",
    border: "rgba(251,191,36,0.2)",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
  },
  {
    category: "AI & ML",
    icon: Brain,
    color: "text-pink-400",
    bg: "rgba(244,114,182,0.08)",
    border: "rgba(244,114,182,0.2)",
    skills: ["Numpy", "Pandas", "Scikit-learn", "LLMs", "LangChain", "OpenAI", "RAG", "MediaPipe"],
  },
  {
    category: "Tools & DevOps",
    icon: Wrench,
    color: "text-green-400",
    bg: "rgba(74,222,128,0.08)",
    border: "rgba(74,222,128,0.2)",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Docker", "CI/CD"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="section-tag mx-auto w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-current inline-block" />
            Tech Stack
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight" style={{ color: 'var(--color-foreground)' }}>
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto" style={{ color: 'var(--color-muted-foreground)' }}>
            A curated set of tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="glass p-6 rounded-2xl hover:border-current/30 transition-all duration-300 group"
                style={{ borderColor: group.border }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: group.bg, border: `1px solid ${group.border}` }}
                  >
                    <Icon size={18} className={group.color} />
                  </div>
                  <h3 className="font-semibold text-base" style={{ color: 'var(--color-foreground)' }}>
                    {group.category}
                  </h3>
                </div>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, i) => (
                    <span key={i} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
