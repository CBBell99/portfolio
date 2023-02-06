import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from './components/Skills';
import ProjectsList from './components/ProjectsList';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <Home />
        <ProjectsList />
        <ContactForm />
      </div>
    </>
  );
}


export default App;
