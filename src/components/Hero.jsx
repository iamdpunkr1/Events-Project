import videoplayback from "../assets/videoplayback.mp4";
const Hero = () => {
  return (
    <div className="relative h-screen z-0">
    <video  className="w-full h-full object-cover z-0" autoPlay loop muted>
      <source src={videoplayback} type="video/mp4"  />
    </video>
    
    <div
        className="absolute inset-0 w-full h-full bg-red-500 opacity-75"
        style={{ mixBlendMode: 'multiply' }}
      >

      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-8xl">TREND MMS</h1>
          <p className="text-2xl text-white text-center">We are the best in the business</p>
      </div>
   </div>
  )
}

export default Hero