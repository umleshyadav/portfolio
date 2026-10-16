import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Arjun Sharma",
    role: "Senior Engineer @ Google",
    avatar: "AS",
    color: "from-blue-500 to-indigo-600",
    text: "One of the most technically sharp developers I've mentored. Umlesh's ability to grasp complex systems quickly and deliver production-ready code is remarkable for someone at his level.",
  },
  {
    name: "Priya Verma",
    role: "Product Manager @ Sypsys",
    avatar: "PV",
    color: "from-purple-500 to-pink-500",
    text: "During his internship, Umlesh delivered features ahead of schedule. His backend APIs were clean, well-documented, and reduced our system latency by 40%. A true team player.",
  },
  {
    name: "Rahul Gupta",
    role: "CP Contestant & Peer",
    avatar: "RG",
    color: "from-cyan-500 to-teal-500",
    text: "Competing alongside Umlesh in hackathons showed me his problem-solving agility. He breaks down complex algorithms effortlessly and always brings creative solutions to the table.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-tag mx-auto w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-current inline-block" />
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: 'var(--color-foreground)' }}>
            What people <span className="text-gradient">say about me</span>
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto" style={{ color: 'var(--color-muted-foreground)' }}>
            Words from colleagues, mentors, and peers I've had the privilege to work with.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="testimonial-card glass p-8 flex flex-col gap-5"
              style={{ borderColor: 'var(--color-border)' }}
            >
              {/* Quote icon */}
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(99,102,241,0.1)' }}>
                <Quote size={18} style={{ color: 'var(--color-primary)' }} />
              </div>

              {/* Text */}
              <p className="text-base leading-relaxed flex-1 italic"
                style={{ color: 'var(--color-muted-foreground)' }}>
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t"
                style={{ borderColor: 'var(--color-border)' }}>
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: 'var(--color-foreground)' }}>{t.name}</p>
                  <p className="text-xs" style={{ color: 'var(--color-muted-foreground)' }}>{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
