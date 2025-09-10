import Hero from "@/components/Hero";
import Navbar from '@/components/Navbar';
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import GitHubStats from "@/components/GitHubStats";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <TechStack /> 
      <Projects />
      <GitHubStats />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
}
