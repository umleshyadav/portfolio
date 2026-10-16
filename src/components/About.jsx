import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <div className="section-tag">
            <span className="w-1.5 h-1.5 rounded-full bg-current inline-block" />
            About Me
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight" style={{ color: 'var(--color-foreground)' }}>
            The person <span className="text-gradient">behind the code</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-2 space-y-5"
          >
            {[
              `Hello! I'm Umlesh Yadav, a passionate software developer who enjoys building things that live on the internet. My interest in web development and AI started when I decided to build small automation scripts, which turned into full-fledged applications.`,
              `Currently, I'm pursuing my Bachelor of Technology in Information Technology at the <strong>Indian Institute of Information Technology, Bhopal</strong>. I'm focused on writing clean, efficient, and scalable code, mostly working with the MERN stack and exploring AI integration.`,
              `I am an avid competitive programmer, always looking for complex algorithmic challenges to solve. When not coding, I explore open-source projects and work on side projects that push my limits.`,
            ].map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-base md:text-lg leading-relaxed"
                style={{ color: 'var(--color-muted-foreground)' }}
                dangerouslySetInnerHTML={{
                  __html: para.replace(/<strong>(.*?)<\/strong>/g, `<strong style="color:var(--color-foreground); font-weight:600">$1</strong>`)
                }}
              />
            ))}

            {/* Fun facts */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: 'Projects Built', value: '10+' },
                { label: 'CP Problems Solved', value: '800+' },
                { label: 'GitHub Repos', value: '15+' },
                { label: 'Internships', value: '1' },
              ].map((fact, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className="glass rounded-2xl p-5 text-center"
                >
                  <div className="text-3xl font-black text-gradient">{fact.value}</div>
                  <div className="text-xs mt-1 uppercase tracking-widest font-medium" style={{ color: 'var(--color-muted-foreground)' }}>{fact.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            <div
              className="glass p-7 rounded-3xl group hover:-translate-y-1 transition-all duration-300"
              style={{ borderColor: 'rgba(99,102,241,0.2)' }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)' }}
              >
                <GraduationCap size={28} style={{ color: 'var(--color-primary)' }} />
              </div>

              <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--color-foreground)' }}>Education</h3>
              <p className="font-semibold mb-1" style={{ color: 'var(--color-foreground)' }}>B.Tech in IT</p>
              <p className="text-sm font-medium mb-4" style={{ color: 'var(--color-primary)' }}>IIIT Bhopal</p>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-muted-foreground)' }}>
                  <Calendar size={14} />
                  Sep 2023 – Jul 2027
                </div>
                <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-muted-foreground)' }}>
                  <MapPin size={14} />
                  Bhopal, India
                </div>
              </div>

              <div className="mt-5 pt-4 flex items-center justify-between" style={{ borderTop: '1px solid var(--color-border)' }}>
                <span className="text-sm" style={{ color: 'var(--color-muted-foreground)' }}>CGPA</span>
                <span className="text-xl font-black text-gradient">8.00</span>
              </div>
            </div>

            {/* Interests */}
            <div className="glass p-6 rounded-3xl">
              <h4 className="font-semibold text-sm mb-4 uppercase tracking-widest" style={{ color: 'var(--color-muted-foreground)' }}>
                Interests
              </h4>
              <div className="flex flex-wrap gap-2">
                {['🤖 AI/ML', '🌐 Web Dev', '⚡ CP', '🎯 DSA', '📚 Open Source', '🎮 Game Dev'].map((interest, i) => (
                  <span key={i} className="skill-badge text-xs">{interest}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
