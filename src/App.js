import "./App.css";
import Navbar from "./componends/Navbar";
import "./componends/Navbar.style.css";
import Objective from "./componends/objective";
import "./componends/objective.css";
import Skills from "./componends/Skills";
import "./componends/skills.style.css";
import Project from "./componends/Project";
import "./componends/project.style.css";
import Contact from "./componends/Contact";
import "./componends/contact.style.css";
import Footer from "./componends/Footer";
import "./componends/footer.style.css";
import Experience from "./componends/Experience";
import "./componends/experience.style.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Objective />
      <Skills />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
