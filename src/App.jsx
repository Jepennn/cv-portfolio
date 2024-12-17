import { Profil } from "./Profil.jsx";
import { Header } from "./Header.jsx";
import { AboutMe } from "./AboutMe.jsx";
import { Projects } from "./Projects/Projects.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Profil />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
