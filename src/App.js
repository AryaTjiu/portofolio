import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Timelines from "./components/Timelines";
import ToTopButton from "./components/ToTopButton";
import Work from "./components/Work";
import Loader from "./components/loader";


function App() {
  return (
    <div className="w-full overflow-hidden scroll-smooth">
      <Loader/>
      <Navbar />
      <Home />
      <section className="w-full h-[100vh] bg-transparent"></section>
      <About />
      {/* <Skills /> */}
      {/* <Timelines/> */}
      <Contact/>
      <Work />
      <Footer/>
      <ToTopButton/>
    </div>
  );
}

export default App;
