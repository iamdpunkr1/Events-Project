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
import { useEffect, useRef, useState } from "react";
// use this loader to display till other components are loaded
import Loader from "./partials/Loader";

function App() {
  const YTVideosRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating loading time with setTimeout
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after a certain time (simulating loading completion)
    }, 3000); // Change the time to suit your loading needs

    // Clean up the timer on unmount or if loading completes before timeout
    return () => clearTimeout(timer);
  }, []);


  const scrollToYTVideos = () => {
    // Check if YTVideosRef is available
    if (YTVideosRef.current) {
      // Scroll to the YTVideos section
      YTVideosRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
   <Navbar />
    <Hero handleClick={scrollToYTVideos}/>
    <YTVideos ref={YTVideosRef}/>
    <About />
    <Mission />
    <Events />
    <Team/>
    {/* <Sponsors/> */}
    <div className="max-w-[1200px] mx-auto">
        <Gallery/>
    </div>
    <Footer/>
   </>
  )
}

export default App
