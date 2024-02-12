import "./VideoAnimation.css";

const AnimatedVideo = () => {
  return (

    <>
  <div className="play-backdrop" />
  <div className="play-button">
    <svg className="play-circles w-full h-full" viewBox="0 0 152 152">
      <circle
        className="play-circle-01"
        fill="none"
        stroke="#fff"
        strokeWidth={3}
        strokeDasharray="343 343"
        cx={76}
        cy={76}
        r="72.7"
      />
      <circle
        className="play-circle-02"
        fill="none"
        stroke="#fff"
        strokeWidth={3}
        strokeDasharray="309 309"
        cx={76}
        cy={76}
        r="65.5"
      />
    </svg>
    <div className="play-perspective">
      <button className="play-close" />
      <div className="play-triangle">
        <div className="play-video">
          {/* <iframe
            width={600}
            height={400}
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            frameBorder={0}
            allow="autoplay; encrypted-media"
            allowFullScreen=""
          /> */}
        </div>
      </div>
    </div>
  </div>
</>

 
  )
}

export default AnimatedVideo