import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";

function App() {
  return (
    <>
      <NavBar />
      <AboutMe />
      <ScrollToTopButton />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
