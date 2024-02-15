
const bg="dark";

const Events = () => {
    
    return (
  
      <ul id="event" className=" bg-gray-900 background">
        
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <div className="text-center pb-8 pt-16 mb-8  z-10">
            <h2 className={`z-10 text-5xl font-semibold ${bg=="dark"? "text-white" : "text-[#222]"} text-center`}>
                OUR <span className="text-red-500"> EVENTS</span>
            </h2>
            
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
        <div className="mx-auto max-w-[1200px] flex py-8"> {/* Added 'flex' class here */}
          
          

          <div className="flex flex-col gap-8 w-full">
  
            <div className="flex  justify-between max-w-[740px] overflow-hidden  bg-white self-start border-l-8 border-red-500 border-solid rounded-md">
               <div className="px-4 py-16 mt-8 flex flex-col w-7/12">
                <h2 className="text-xl font-semibold text-slate-800">Event Name</h2>
                <div className="w-8 h-[2px] bg-red-500"></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ipsam sunt id suscipit debitis numquam minus quo ipsa quas quisquam nostrum non error velit quis, ipsum vitae blanditiis ducimus? Reiciendis!</p>
               </div>
               
               <div className="w-5/12">
                <img src="https://via.placeholder.com/300x300" alt="Placeholder" className="w-full" />
               </div>
            </div>
      
            <div className="flex  justify-between max-w-[800px] bg-white self-end border-l-8 border-red-500 border-solid rounded-md">
            <div className="px-4 py-8 flex flex-col">
                <h1 className="text-xl font-semibold text-slate-800">Event Name</h1>
                <div className="w-8 h-[2px] bg-red-500"></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ipsam sunt id suscipit debitis numquam minus quo ipsa quas quisquam nostrum non error velit quis, ipsum vitae blanditiis ducimus? Reiciendis!</p>
               </div>
               <img src="https://via.placeholder.com/300x300" alt="Placeholder"  />
            </div>
    
            <div className="flex  justify-between max-w-[800px] overflow-hidden  bg-white self-start border-l-8 border-red-500 border-solid rounded-md">
               <div className="px-4 py-8 flex flex-col">
                <h1 className="text-xl font-semibold text-slate-800">Event Name</h1>
                <div className="w-8 h-[2px] bg-red-500"></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ipsam sunt id suscipit debitis numquam minus quo ipsa quas quisquam nostrum non error velit quis, ipsum vitae blanditiis ducimus? Reiciendis!</p>
               </div>
               <img src="https://via.placeholder.com/300x300" alt="Placeholder"  />               
            </div>
  
          </div>
  
        </div>
  
      </ul>
  
    )
  
  }
  
  
  
  export default Events
  