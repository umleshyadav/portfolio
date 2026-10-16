import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const ROLES = [
  'Full-Stack Developer',
  'AI/ML Engineer',
  'Competitive Programmer',
  'Open Source Contributor',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // Typewriter effect
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(c => c + 1), 80);
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(c => c - 1), 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex(r => (r + 1) % ROLES.length);
    }

    setDisplayText(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Ambient glow blobs */}
      <div className="bg-glow w-[600px] h-[600px] -top-64 -left-64"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.18), transparent)' }} />
      <div className="bg-glow w-[500px] h-[500px] top-1/4 -right-48"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.12), transparent)' }} />
      <div className="bg-glow w-[400px] h-[400px] bottom-0 left-1/3"
        style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.1), transparent)' }} />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* Left: Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col gap-6 order-2 lg:order-1 text-center lg:text-left"
        >
          {/* Tag */}
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
            <div className="section-tag">
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block animate-pulse" />
              Available for opportunities
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]"
          >
            <span className="text-gradient">Umlesh Yadav</span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div variants={itemVariants} className="h-10">
            <h2 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-muted-foreground)' }}>
              {displayText}
              <span className="blinking-cursor" style={{ color: 'var(--color-primary)' }}>|</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0"
            style={{ color: 'var(--color-muted-foreground)' }}
          >
            I'm a software developer passionate about building{' '}
            <span style={{ color: 'var(--color-foreground)', fontWeight: 600 }}>scalable web applications</span>{' '}
            and integrating{' '}
            <span style={{ color: 'var(--color-foreground)', fontWeight: 600 }}>AI technologies</span>.
            I focus on creating robust, production-ready systems that solve real-world problems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-2"
          >
            <a href="#projects" className="btn-primary">
              View My Work
              <ChevronDown size={16} />
            </a>
            <a
              href="https://drive.google.com/file/d/147JdRggxdzLJlCJgo7WYcMlftO7HjHyu/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              View Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center lg:justify-start gap-4 pt-2"
          >
            <span className="text-xs uppercase tracking-widest font-medium" style={{ color: 'var(--color-muted-foreground)' }}>
              Connect
            </span>
            <div className="h-px flex-1 max-w-[60px]" style={{ background: 'var(--color-border)' }} />
            {[
              { href: 'https://github.com/umleshyadav', icon: Github, label: 'GitHub', hoverColor: '#818cf8' },
              { href: 'https://www.linkedin.com/in/umlesh-yadav-552294290/', icon: Linkedin, label: 'LinkedIn', hoverColor: '#60a5fa' },
              { href: 'mailto:umleshyadav9506@gmail.com', icon: Mail, label: 'Email', hoverColor: '#f472b6' },
            ].map(({ href, icon: Icon, label, hoverColor }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                style={{
                  border: '1px solid var(--color-border)',
                  background: 'rgba(255,255,255,0.03)',
                  color: 'var(--color-muted-foreground)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = hoverColor;
                  e.currentTarget.style.borderColor = hoverColor + '66';
                  e.currentTarget.style.background = hoverColor + '11';
                  e.currentTarget.style.boxShadow = `0 0 20px ${hoverColor}33`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'var(--color-muted-foreground)';
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="lg:col-span-5 order-1 lg:order-2 flex justify-center relative"
        >
          {/* Spinning orbit rings */}
          <div
            className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full"
            style={{
              border: '1px dashed rgba(99,102,241,0.2)',
              animation: 'spin-slow 20s linear infinite',
            }}
          />
          <div
            className="absolute w-72 h-72 md:w-88 md:h-88 rounded-full"
            style={{
              border: '1px solid rgba(168,85,247,0.15)',
              animation: 'spin-slow 15s linear infinite reverse',
            }}
          />

          {/* Profile image wrapper */}
          <div className="relative w-56 h-56 md:w-72 md:h-72 floating">
            {/* Gradient ring border */}
            <div
              className="absolute inset-0 rounded-full p-[3px]"
              style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary), var(--color-accent))' }}
            >
              <div
                className="w-full h-full rounded-full overflow-hidden"
                style={{ border: '4px solid var(--color-background)' }}
              >
                <img
                  src="/profile.jpg"
                  alt="Umlesh Yadav"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -right-6 top-8 glass px-4 py-2.5 rounded-2xl flex items-center gap-2 shadow-xl"
            >
              <span className="text-xl">🚀</span>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold" style={{ color: 'var(--color-muted-foreground)' }}>Status</p>
                <p className="text-sm font-semibold" style={{ color: 'var(--color-foreground)' }}>Building</p>
              </div>
            </motion.div>

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute -left-8 bottom-12 glass px-4 py-2.5 rounded-2xl flex items-center gap-2 shadow-xl"
            >
              <span className="text-xl">💼</span>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-bold" style={{ color: 'var(--color-muted-foreground)' }}>Experience</p>
                <p className="text-sm font-semibold" style={{ color: 'var(--color-foreground)' }}>Intern @ Sypsys</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--color-muted-foreground)' }}>Scroll</span>
        <div
          className="w-5 h-9 rounded-full border flex items-start justify-center p-1"
          style={{ borderColor: 'var(--color-border)' }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: 'var(--color-primary)' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
