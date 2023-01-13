import Socials from "./components/Socials";
import Skills from "./components/Skills";
import ProjectsList from "./components/ProjectsList";
import ProfilePic from "./components/ProfilePic";
import Navbar from "./components/Navbar";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <main className="bg-white px-10 md:px-20 lg:px-40">
      <section className="min-h-screen">
        <Navbar />
        <About />

        <Socials />
        <ProfilePic />
      </section>
      <Skills />

      <ProjectsList />
    </main>
  );
}

export default App;
