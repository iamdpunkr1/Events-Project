import "./App.css";
import About from "./components/About";
import Events from "./components/Events";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Navbar from "./components/Navbar";
import YTVideos from "./components/YTVideos";
import Team from "./components/Team";


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
   </>
  )
}

export default App
