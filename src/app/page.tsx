import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Intro />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
