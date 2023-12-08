import About from "../ContentCards/About";
import Contact from "../ContentCards/Contact";
import Home from "../ContentCards/Home";
import Projects from "../ContentCards/Projects";
import Skills from "../ContentCards/Skills";
import "./Maincomp.css";

export default function Maincomp() {
  return (
    <>

     <div id='main-comp'>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
     </div>

    </>
  )
}
