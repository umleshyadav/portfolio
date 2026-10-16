import { motion } from 'framer-motion';

const stats = [
  {
    platform: "CodeChef",
    rating: "1634",
    title: "3-Star Coder",
    link: "https://www.codechef.com/users/flash_score_95",
    color: "from-blue-500/20 to-blue-500/5",
    border: "border-blue-500/30",
    text: "text-blue-400"
  },
  {
    platform: "Codeforces",
    rating: "1521",
    title: "Specialist",
    link: "https://codeforces.com/profile/_Homelander_",
    color: "from-cyan-500/20 to-cyan-500/5",
    border: "border-cyan-500/30",
    text: "text-cyan-400"
  },
  {
    platform: "LeetCode",
    rating: "700+",
    title: "Problems Solved",
    link: "https://leetcode.com/u/Coder__221/",
    color: "from-amber-500/20 to-amber-500/5",
    border: "border-amber-500/30",
    text: "text-amber-500"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Competitive <span className="text-zinc-500">Programming</span></h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Consistent problem solver across multiple platforms with a focus on Data Structures and Algorithms.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.a
              key={i}
              href={stat.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`block glass p-8 rounded-4xl border hover:bg-zinc-800/50 transition-all duration-300 group hover:-translate-y-1 ${stat.border}`}
            >
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-xl font-bold text-zinc-100">{stat.platform}</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
className="text-zinc-500 group-hover:text-zinc-300 opacity-0 group-hover:opacity-100 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all"
><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
              </div>
              <div className="mt-4">
                <div className={`text-5xl font-extrabold mb-2 ${stat.text}`}>{stat.rating}</div>
                <div className="text-sm font-semibold tracking-widest uppercase text-zinc-400">{stat.title}</div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass p-6 md:p-8 rounded-3xl border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-xl font-bold text-zinc-100 mb-2">Hack-O-Sprint 2.0</h3>
            <p className="text-zinc-400">Ranked among the Top 10 Teams in the Internal Smart India Hackathon 2024.</p>
          </div>
          <div className="px-4 py-2 bg-zinc-800/50 text-zinc-300 rounded-full text-sm font-medium border border-zinc-700 whitespace-nowrap">
            Achievement 🏆
          </div>
        </motion.div>
      </div>
    </section>
  );
}
