import "./App.css";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Bio from "./Components/Bio";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="font-mono flex flex-col gap-10 sm:gap-16 ml-16 bg-navy h-full text-slate-light pt-4 px-3 sm:px-16 sm:pt-8">
      <Navbar />
      <Intro />
      <Bio />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
