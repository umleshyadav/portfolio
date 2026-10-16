import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';

const projects = [
  {

    title: "WorkVista",
    description: "Full-stack job portal built with the MERN stack, enabling users to explore job opportunities, apply for jobs, manage profiles, and track applications. Implemented JWT-based authentication, company management, and Cloudinary integration for resume and profile image uploads.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "Cloudinary"],
    github: "https://github.com/umleshyadav/WorkVista",
    live: "https://work-vista.onrender.com",
    type: "Full Stack",
    gradient: "from-blue-500/20 to-cyan-500/20",
    accentColor: "rgba(59, 130, 246, 0.6)",

  },
  {

    title: "Mental Disorder Detection by Facial Expression",
    description: "AI/ML project that combines Vision Transformer (ViT) and LSTM to analyze facial expressions and learn temporal patterns in emotional states. Built using PyTorch and OpenCV, with a Streamlit interface for visualizing model predictions.",
    tech: ["Python", "PyTorch", "Vision Transformer (ViT)", "LSTM", "OpenCV", "Streamlit"],
    github: "https://github.com/umleshyadav/MENTAL-DISORDER-DETECTION-BY-FACIAL-EXPRESSION",
    live: "#",
    type: "AI/ML",
    gradient: "from-cyan-500/20 to-blue-500/20",
    accentColor: "rgba(6, 182, 212, 0.6)",

  },
  {
    title: "ConnectX",
    description: "High-performance chat using Socket.IO, Kafka for message streaming, Redis for caching, and NextAuth for OAuth 2.0.",
    tech: ["MERN", "Socket.IO", "Kafka", "Redis"],
    github: "https://github.com/umleshyadav/ConnectX",
    live: "https://connectx-ccyj.onrender.com",
    type: "Fullstack",
    gradient: "from-green-500/20 to-teal-500/20",
    accentColor: "rgba(16, 185, 129, 0.6)",
  },
  {
    title: "LMS Platform",
    description: "Learning Management System featuring user authentication, course creation, progress tracking, and secure content delivery.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    github: "https://github.com/umleshyadav/loan_management_system",
    live: "https://loan-management-system-client-rose.vercel.app/",
    type: "Fullstack",
    gradient: "from-pink-500/20 to-rose-500/20",
    accentColor: "rgba(236, 72, 153, 0.6)",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="section-tag">
            <span className="w-1.5 h-1.5 rounded-full bg-current inline-block" />
            My Work
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight" style={{ color: 'var(--color-foreground)' }}>
                Featured <span className="text-gradient">Projects.</span>
              </h2>
              <p className="mt-4 text-lg max-w-2xl" style={{ color: 'var(--color-muted-foreground)' }}>
                A selection of my recent work in web development and artificial intelligence.
              </p>
            </div>
            <a
              href="https://github.com/umleshyadav"
              target="_blank"
              rel="noreferrer"
              className="btn-outline flex-shrink-0"
            >
              <Github size={16} /> All Projects
            </a>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="project-card glass group"
            >
              {/* Top gradient bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} />

              <div className="p-8 flex flex-col h-full">
                {/* Top row */}
                <div className="flex justify-between items-start mb-6">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${project.gradient.replace('from-', '').replace('/20 to-', '20, ').replace('/20', '20')})` }}
                  >
                    <Layers size={22} style={{ color: project.accentColor }} />
                  </div>

                  {/* Type badge + links */}
                  <div className="flex items-center gap-3">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        border: `1px solid ${project.accentColor}44`,
                        background: `${project.accentColor}11`,
                        color: project.accentColor,
                      }}
                    >
                      {project.type}
                    </span>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                        style={{
                          border: '1px solid var(--color-border)',
                          background: 'rgba(255,255,255,0.03)',
                          color: 'var(--color-muted-foreground)',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-foreground)'; }}
                        onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-muted-foreground)'; }}
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Live demo"
                        className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                        style={{
                          border: '1px solid var(--color-border)',
                          background: 'rgba(255,255,255,0.03)',
                          color: 'var(--color-muted-foreground)',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-foreground)'; }}
                        onMouseLeave={e => { e.currentTarget.style.color = 'var(--color-muted-foreground)'; }}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-2xl font-bold mb-3 transition-colors duration-300 group-hover:text-gradient"
                  style={{ color: 'var(--color-foreground)' }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className="leading-relaxed mb-8 flex-1 text-base" style={{ color: 'var(--color-muted-foreground)' }}>
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4" style={{ borderTop: '1px solid var(--color-border)' }}>
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="skill-badge text-xs">
                      {t}
                    </span>
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
