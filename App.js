import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import SocialLink from "./Components/SocialLink";
import About from "./Components/About";
import Project from "./Components/Project";
import Experience  from "./Components/Experience"
import Contact from "./Components/Contact";
export default function App() {
  return (
    <>
      <Navbar />

      <Home />
      <SocialLink/>
      <About/>
      <Project/>
      <Experience />
      <Contact/>
    </>
  );
}
