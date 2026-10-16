import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-4 text-center relative">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-10 md:p-16 rounded-[3rem] border-zinc-800 relative overflow-hidden"
        >
          {/* subtle background glow in the card */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-blue-500/10 blur-[50px] rounded-full pointer-events-none"></div>

          <h2 className="text-3xl font-bold mb-4 text-zinc-100 relative z-10">
            <span className="text-blue-500 font-mono text-xl mr-2">06.</span>
            What's Next?
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-zinc-100 mb-6 tracking-tight relative z-10">
            Get In Touch
          </h3>
          <p className="text-zinc-400 text-lg mb-6 leading-relaxed relative z-10">
            I'm currently looking for new opportunities and internships. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <a
            href="mailto:umleshyadav9506@gmail.com"
            className="inline-flex items-center gap-2 text-lg font-semibold mb-10 relative z-10 transition-colors duration-200"
            style={{ color: 'var(--color-primary)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--color-primary)'}
          >
            <Mail size={18} />
            umleshyadav9506@gmail.com
          </a>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a
              href="mailto:umleshyadav9506@gmail.com"
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-zinc-200 text-black font-semibold rounded-full transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              <Mail size={18} /> Say Hello
            </a>
            <a
              href="tel:+919696039506"
              className="w-full sm:w-auto px-8 py-4 bg-zinc-900 border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone size={18} /> +91-9696039506
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
