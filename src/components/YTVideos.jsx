import { forwardRef } from "react"
import Cards from "../partials/Cards"
import Reveal from "../partials/Reveal"
const bg="light"
const YTVideos = forwardRef((props, ref) => {
  return (
    <div ref={ref} id="ytvideos-section" className="bg-white w-full relative pb-24 overflow-hidden">
       
       {/* Add animation to move this below two blobs here and there*/}
       <div className='animate-blob1 absolute bg-red-500 h-96 w-96 rounded-full z-1 blur-2xl -right-20 top-80 md:top-60 lg:top-40 opacity-50'></div>
        <div className='animate-blob2 absolute bg-red-500 h-96 w-96 rounded-full z-1 blur-2xl -left-40 -bottom-20 opacity-50'></div>
     
     
      <div className="max-w-[1200px] mx-auto py-8 z-10 relative">
      
        <div className=" py-8 my-8 z-10">
        <div className="inline-block flex justify-center items-center">
          <Reveal>
          <h2 className={`z-10 text-5xl font-semibold ${bg=="dark"? "text-white" : "text-[#222]"} text-center`}>
              CHECK OUT OUR <span className="text-red-500"> VIDEOS</span>
          </h2>
          </Reveal>
          </div>
          
          <div className="flex justify-center h-5 mt-4 relative">
              <span className="relative h-[2px] bg-red-500 w-8 md:w-12 lg:w-16" style={{top:"50%"}}></span>
              <h4 className={`text-sm font-semibold mx-1 ${bg=="dark"? "text-white" : "text-[#222]"}`}>Events & Programs</h4>
              <span className="relative h-[2px] bg-red-500 w-8 md:w-12 lg:w-16" style={{top:"50%"}}></span>
          </div>

          {
              bg==="light" && (
                  <div className="flex flex-col items-center mt-8">
                      <div className=" h-[2px] bg-[#666] w-[50px] lines" ></div>
                      <div className=" h-[2px] bg-[#666] w-[50px] my-1 translate-x-2.5 lines" ></div>
                      <div className=" h-[2px] bg-[#666] w-[50px] translate-x-5 lines" ></div>
                  </div>
              )

          }
          
        </div>
      
      <div className=" flex justify-center flex-wrap gap-8 ">
        <Cards title="Northeast Festival - Bangkok" link="https://www.youtube.com/embed/ERFCsRIfzcg?si=kIavvUf1NQ2KVaeQ"/>
        <Cards title="Northeast Festival - Vietnam" link="https://www.youtube.com/embed/ERFCsRIfzcg?si=kIavvUf1NQ2KVaeQ"/>
        <Cards title="Northeast Festival - Delhi" link="https://www.youtube.com/embed/ERFCsRIfzcg?si=kIavvUf1NQ2KVaeQ"/>
        <Cards title="Northeast Festival - Delhi" link="https://www.youtube.com/embed/ERFCsRIfzcg?si=kIavvUf1NQ2KVaeQ"/>
      </div>
        
    </div>
   </div>
  )
})

export default YTVideos