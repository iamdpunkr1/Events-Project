import SocialIcons from "./SocialIcons"

const Member = ({title, role, imgUrl, desc}) => {
  return (
    <div className="flex member gap-4  w-full md:w-3/6 lg:w-5/12 py-6 px-4 bg-gray-900 rounded-md">
         
         <div className="flex justify-center flex-col w-5/12 overflow-hidden">
          <img
                className="rounded-md  transform hover:scale-105 transition ease-in-out duration-1000"
                src={imgUrl}
                alt="w-full"
                
              />
            <div className=" flex justify-center gap-2 md:gap-4 py-4">
              <SocialIcons color={"#eee"} size={20} />
            </div>
         </div>

        <div className="flex flex-col  w-7/12">
          <h2 className="text-lg text-red-500 font-bold leading-snug">
            {title}
          </h2>
          <p className="text-gray-200 text-md">{role}</p>
          <div className="h-[2px] bg-gray-200 w-2/6 my-2"></div>

          <p className="text-gray-200 text-xs">
            {desc}
           </p>
        </div>
        
    </div>

  )
}

export default Member