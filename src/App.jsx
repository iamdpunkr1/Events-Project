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
import Slider from "./partials/Slider";
import { useRef } from "react";
// import Sponsors from "./components/Sponsors";


function App() {
  const YTVideosRef = useRef(null);

  const scrollToYTVideos = () => {
    // Check if YTVideosRef is available
    if (YTVideosRef.current) {
      // Scroll to the YTVideos section
      YTVideosRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
   <Navbar />
    <Hero handleClick={scrollToYTVideos}/>
    <YTVideos ref={YTVideosRef}/>
    <About />
    <Mission />
    <Events />
    <Team/>
    <Slider/>
    {/* <Sponsors/> */}
    <div className="max-w-[1200px] mx-auto">
        <Gallery/>
    </div>
    <Footer/>
   </>
  )
}

export default App
