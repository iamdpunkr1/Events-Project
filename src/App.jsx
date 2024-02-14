import "./App.css";
import About from "./components/About";
import Events from "./components/Events";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Navbar from "./components/Navbar";
import YTVideos from "./components/YTVideos";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";


function App() {


  return (
    <>
   <Navbar />
    <Hero />
    <YTVideos />
    <About />
    <Mission />
    <Events />
    <Team/>
    <div className="max-w-[1200px] mx-auto">
        <Gallery/>
    </div>
    <Footer/>
   </>
  )
}

export default App
