import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from './components/Skills';

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Home />
        <Skills />
      </div>
    </>
  );
}


export default App;
