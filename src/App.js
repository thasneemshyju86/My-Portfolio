import Contact from "./components/Contact/contact";
import Intro from "./components/Intro/intro";
import Navbar from "./components/Navbar/navbar";
import About from "./components/Skill/about";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <About/>
     <Contact/>
    </div>
  );
}

export default App;
