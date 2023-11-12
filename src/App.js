import About from "./components/About";
import Codewars from "./components/Codewars";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Timelines from "./components/Timelines";
import ToTopButton from "./components/ToTopButton";
import Work from "./components/Work";
import Youtube from "./components/Youtube";
import Loader from "./components/loader";


function App() {
  return (
    <div className="bg-[#181818] w-full overflow-hidden scroll-smooth">
      <Loader/>
      <Navbar />
      <Home />
      <About />
      <Youtube/>
      <Skills />
      <Timelines/>
      <Codewars />
      <Contact/>
      <Work />
      <Footer/>
      <ToTopButton/>
    </div>
  );
}

export default App;
