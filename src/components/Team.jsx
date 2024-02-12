import Member from "../partials/Member"
const Team = () => {
  return (
    <section className="pt-24 pb-36 bg-white overflow-hidden">
    <div className="max-w-[1200px] px-4 mx-auto">
      <h2 className="mb-5 text-3xl md:text-5xl xl:text-6xl text-center font-bold font-heading tracking-px-n leading-none">
        The team behind Trend MMS
      </h2>
      <p className="mb-20 text-lg text-gray-600 text-center font-medium md:max-w-xl mx-auto">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        Velit officia consequat duis enim velit mollit.
      </p>
      <div className="flex justify-center gap-x-8 flex-wrap max-w-7xl mx-auto -m-3">
        
        
        <div className="w-full md:w-1/2 lg:w-1/4 p-3">
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
        </div>

      </div>
      <Member/>
    </div>
  </section>
  

  )
}

export default Team