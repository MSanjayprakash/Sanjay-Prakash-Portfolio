import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";

import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";


function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        
        <Contact />
      </main>
      <Footer />
       <ScrollToTop /> 
    </div>
  );
}

export default App;