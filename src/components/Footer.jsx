import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative py-12 px-4 z-10"
      style={{
        borderTop: '1px solid var(--color-border)',
        background: 'var(--color-background)',
      }}
    >
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--color-primary), transparent)' }}
      />

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white"
              style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}
            >
              UM
            </div>
            <span className="font-semibold text-sm" style={{ color: 'var(--color-foreground)' }}>
              Umlesh Yadav
            </span>
          </div>

          {/* Copyright */}
          <p className="text-xs font-mono flex items-center gap-1.5" style={{ color: 'var(--color-muted-foreground)' }}>
            Designed & Built with <Heart size={12} style={{ color: '#f472b6' }} fill="#f472b6" /> by Umlesh Yadav © {year}
          </p>

          {/* Social icons */}
          <div className="flex gap-3">
            {[
              { href: 'https://github.com/umleshyadav', icon: Github, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/umlesh-yadav-552294290/', icon: Linkedin, label: 'LinkedIn' },
              { href: 'mailto:umleshyadav9506@gmail.com', icon: Mail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-xl transition-all duration-200 hover:scale-110 hover:-translate-y-0.5"
                style={{
                  border: '1px solid var(--color-border)',
                  background: 'rgba(255,255,255,0.03)',
                  color: 'var(--color-muted-foreground)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'var(--color-foreground)';
                  e.currentTarget.style.borderColor = 'var(--color-primary)';
                  e.currentTarget.style.background = 'rgba(99,102,241,0.08)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'var(--color-muted-foreground)';
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
