import Cards from "../partials/Cards"

const bg="light"
const YTVideos = () => {
  return (
    <div className=" w-full bg-white relative pb-24 overflow-hidden">
       <div className='absolute bg-red-500 h-96 w-96 rounded-full z-1 blur-2xl -right-20 top-80 md:top-60 lg:top-40 opacity-50'></div>
        <div className='absolute bg-red-500 h-96 w-96 rounded-full z-1 blur-2xl -left-40 -bottom-20 opacity-50'></div>
     
      <div className="max-w-[1200px] mx-auto py-8 z-10">
        <div className="text-center py-8 my-8 z-10">
          <h1 className={`z-10 text-5xl font-semibold ${bg=="dark"? "text-white" : "text-[#222]"} text-center`}>
              CHECK OUT OUR <span className="text-red-500"> VIDEOS</span>
          </h1>
          
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
      
      <div className="flex justify-center flex-wrap gap-8 ">
        <Cards />
        <Cards />
        <Cards />
      </div>
        
    </div>
   </div>
  )
}

export default YTVideos