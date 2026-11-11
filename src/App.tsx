import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectShowcase from '@/components/ProjectShowcase';
import Developers from '@/components/Developers';
import Localities from '@/components/Localities';
import { About, Services, WhyUs } from '@/components/InfoSections';
import Faqs from '@/components/Faqs';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <ProjectShowcase />
        <Developers />
        <Localities />
        <About />
        <Services />
        <WhyUs />
        <Faqs />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
