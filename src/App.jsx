import "./App.css";
import About from "./components/About";
import Events from "./components/Events";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Navbar from "./components/Navbar";
import YTVideos from "./components/YTVideos";


function App() {


  return (
    <>
   <Navbar />
    <Hero />
    <YTVideos />
    <About />
    <Mission />
    <Events />
   </>
  )
}

export default App
