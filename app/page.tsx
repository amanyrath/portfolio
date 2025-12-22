import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0d0a] text-[#f2ebe0]">
      <Hero />

      {/* Projects Section */}
      <Projects />

      {/* About Section */}
      <About />

      {/* Contact Section & Footer */}
      <Contact />
    </main>
  );
}

