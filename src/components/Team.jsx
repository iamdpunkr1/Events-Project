import Member from "../partials/Member"
import memberImage1 from "../assets/member33.jpeg"
import memberImage2 from "../assets/member22.jpeg"
const Team = () => {
  return (
    <section id="team" className="py-24 bg-gradient-to-b from-gray-900 via-gray-700 to-white overflow-hidden">
    <div className="max-w-[1200px] px-4 mx-auto">
      <h2 className="text-gray-200 mb-5 text-2xl md:text-4xl xl:text-5xl text-center font-bold font-heading tracking-px-n leading-none">
        The team behind Trend MMS
      </h2>
      <p className="mb-20 text-lg text-gray-300 text-center font-medium md:max-w-xl mx-auto">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        Velit officia consequat duis enim velit mollit.
      </p>
      <div className="flex justify-center gap-8 flex-wrap w-full">
        
        {/* <div className="w-full md:w-1/2 lg:w-1/4 p-3">
          <div className="relative max-w-max mx-auto h-full overflow-hidden rounded-3xl">
            <img
              className="h-full object-cover transform hover:scale-105 transition ease-in-out duration-1000"
              src="https://shuffle.dev/flaro-assets/images/team/team4.png"
              alt=""
            />
            <div className="absolute bottom-0 left-0 w-full p-2">
              <div
                className="bg-black bg-opacity-80 w-full py-4 px-5 rounded-lg"
                style={{ backdropFilter: "blur(3px)" }}
              >
                <h3 className="mb-1 text-lg text-white font-bold leading-snug">
                  Devon Lane
                </h3>
                <p className="text-gray-400 font-medium">Marketing Manager</p>
              </div>
            </div>
          </div>
        </div> */}
        <Member title="Shyam Kanu Mahanta" role="Chief Functionary" imgUrl={memberImage1}/>
        <Member title="Anita Deka Mahanta" role="Chief Functionary" imgUrl={memberImage2}/>

      </div>
      
    </div>
  </section>
  

  )
}

export default Team