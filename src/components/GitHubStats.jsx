import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, Activity, Code2, BookOpen } from 'lucide-react';

const GITHUB_USERNAME = 'umleshyadav';

// Fallback static data in case API is rate-limited
const FALLBACK_STATS = {
  public_repos: 18,
  followers: 42,
  following: 31,
  public_gists: 5,
};

const FALLBACK_REPOS = [
  {
    name: "WorkVista",
    stargazers_count: 0,
    forks_count: 0,
    language: "JavaScript",
    html_url: "https://github.com/umleshyadav/WorkVista",
    description: "Full-stack MERN job portal with job search, applications, company management, JWT authentication, and Cloudinary file uploads."
  },
  {
    name: "Mental-Disorder-Detection",
    stargazers_count: 0,
    forks_count: 0,
    language: "Python",
    html_url: "https://github.com/umleshyadav/MENTAL-DISORDER-DETECTION-BY-FACIAL-EXPRESSION",
    description: "AI/ML project using Vision Transformer (ViT), LSTM, PyTorch, and OpenCV to analyze facial expressions and identify emotional patterns."
  },
  {
    name: "ConnectX",
    stargazers_count: 0,
    forks_count: 0,
    language: "JavaScript",
    html_url: "https://github.com/umleshyadav/ConnectX",
    description: "Real-time MERN chat application with Socket.IO, JWT authentication, online user status, and instant messaging."
  }

];

const LANG_COLORS = {
  Python: '#3572A5',
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  'C++': '#f34b7d',
  Java: '#b07219',
  Go: '#00ADD8',
  Rust: '#dea584',
  default: '#8888aa',
};

export default function GitHubStats() {
  const [stats, setStats] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=stars&per_page=6`),
        ]);

        if (userRes.ok && reposRes.ok) {
          const userData = await userRes.json();
          const reposData = await reposRes.json();
          setStats(userData);
          setRepos(reposData.slice(0, 3));
        } else {
          setStats(FALLBACK_STATS);
          setRepos(FALLBACK_REPOS);
        }
      } catch {
        setStats(FALLBACK_STATS);
        setRepos(FALLBACK_REPOS);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const statCards = stats ? [
    { label: 'Repositories', value: stats.public_repos, icon: BookOpen, color: 'text-indigo-400' },
    { label: 'Followers', value: stats.followers, icon: Activity, color: 'text-purple-400' },
    { label: 'Following', value: stats.following, icon: Code2, color: 'text-cyan-400' },
    { label: 'Public Gists', value: stats.public_gists, icon: Code2, color: 'text-green-400' },
  ] : [];

  return (
    <section id="github" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-tag mx-auto w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-current inline-block" />
            GitHub Activity
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: 'var(--color-foreground)' }}>
            Live <span className="text-gradient">GitHub Stats</span>
          </h2>
          <p className="mt-4 text-lg" style={{ color: 'var(--color-muted-foreground)' }}>
            Real-time data fetched from GitHub API
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-10 h-10 rounded-full border-2 border-transparent"
              style={{ borderTopColor: 'var(--color-primary)', animation: 'spin-slow 0.8s linear infinite' }} />
          </div>
        ) : (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {statCards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="github-stat-card glass text-center"
                >
                  <div className={`text-3xl font-extrabold mb-1 ${card.color}`}>{card.value}</div>
                  <div className="text-xs uppercase font-semibold tracking-widest" style={{ color: 'var(--color-muted-foreground)' }}>{card.label}</div>
                </motion.div>
              ))}
            </div>

            {/* GitHub Contribution Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-6 mb-10 overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-4">
                <Github size={20} style={{ color: 'var(--color-primary)' }} />
                <span className="font-semibold" style={{ color: 'var(--color-foreground)' }}>Contribution Graph</span>
              </div>
              <img
                src={`https://ghchart.rshah.org/6366f1/${GITHUB_USERNAME}`}
                alt="GitHub contribution graph"
                className="w-full rounded-xl"
                style={{ filter: 'brightness(0.9)', minHeight: '80px' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </motion.div>

            {/* Top Repos */}
            <div className="grid md:grid-cols-3 gap-5">
              {repos.map((repo, i) => (
                <motion.a
                  key={i}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-6 rounded-2xl flex flex-col gap-3 hover:border-indigo-500/40 transition-all duration-300 group"
                  style={{ borderColor: 'var(--color-border)' }}
                >
                  <div className="flex items-start justify-between">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: 'rgba(99,102,241,0.1)' }}>
                      <BookOpen size={16} style={{ color: 'var(--color-primary)' }} />
                    </div>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs px-2 py-1 rounded-full"
                      style={{ background: 'rgba(99,102,241,0.1)', color: 'var(--color-primary)' }}>
                      View →
                    </span>
                  </div>
                  <h3 className="font-semibold text-sm group-hover:text-indigo-400 transition-colors" style={{ color: 'var(--color-foreground)' }}>
                    {repo.name}
                  </h3>
                  {repo.description && (
                    <p className="text-xs leading-relaxed line-clamp-2" style={{ color: 'var(--color-muted-foreground)' }}>
                      {repo.description}
                    </p>
                  )}
                  <div className="flex items-center gap-4 text-xs mt-auto pt-3"
                    style={{ borderTop: '1px solid var(--color-border)', color: 'var(--color-muted-foreground)' }}>
                    {repo.language && (
                      <span className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full inline-block"
                          style={{ background: LANG_COLORS[repo.language] || LANG_COLORS.default }} />
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Star size={12} /> {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={12} /> {repo.forks_count}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Profile Link */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-10"
            >
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                <Github size={18} /> View Full GitHub Profile
              </a>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
