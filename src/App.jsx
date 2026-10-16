import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import GitHubStats from './components/GitHubStats';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ParticlesBackground from './components/ParticlesBackground';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div
      className="relative min-h-screen"
      style={{ background: 'var(--color-background)', color: 'var(--color-foreground)' }}
    >
      {/* Global UI Elements */}
      <CustomCursor />
      <ParticlesBackground />
      <ScrollProgress />
      <ScrollToTop />

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Achievements />
          <Projects />
          <Experience />
          <Skills />
          <GitHubStats />
          <Testimonials />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
