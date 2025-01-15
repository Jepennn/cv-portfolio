import { Profil } from "./Profil.jsx";
import { Header } from "./Header.jsx";
import { AboutMe } from "./AboutMe.jsx";
import { Projects } from "./Projects/Projects.jsx";
import { ExploringNow } from "./ExploringNow.jsx";
import { Contact } from "./Contact.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Profil />
      <AboutMe />
      <Projects />
      <ExploringNow />
      <Contact />
      {/* <Header /> */}
    </div>
  );
}

export default App;
