import "./VideoAnimation.css";

const AnimatedVideo = () => {
  return (
    <div className="video-container">
      <video
        className="video"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        autoPlay
        loop
        muted
      ></video>
    </div>
  )
}

export default AnimatedVideo