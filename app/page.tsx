import Intro from "@/components/Intro";
import Divider from "@/components/Divider";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Divider />
      <About />
      <Divider />
      <Projects />
      <Skills />
      <Divider />
      <Contact />
      

      
    </main>
  );
}
