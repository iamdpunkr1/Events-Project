import SocialIcons from "../partials/SocialIcons";
import eventImage from "../assets/eventImage.jpg";
import SingleEvent from "../partials/SingleEvent";
import Reveal from "../partials/Reveal";
const bg="dark";

const Events = () => {
    
    return (
  
      <ul id="event" className=" bg-gray-900 background">
        {/* For animation */}
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>

        <div className="text-center pb-8 pt-16 mb-8  z-10">
        <div className="inline-block flex justify-center items-center">
          <Reveal>
          <h2 className={`z-10 text-5xl font-semibold ${bg=="dark"? "text-white" : "text-[#222]"} text-center`}>
                OUR <span className="text-red-500"> EVENTS</span>
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
        <div className="mx-auto max-w-[1200px] flex py-8"> {/* Added 'flex' class here */}
          
          

          <div className="flex flex-col gap-8 w-full">
  
            <SingleEvent title="Event Name"
                         description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ipsam sunt id suscipit debitis numquam minus quo ipsa quas quisquam nostrum non error velit quis, ipsum vitae blanditiis ducimus? Reiciendis!"
                         socialLinks={{facebookUrl: "https://www.facebook.com", twitterUrl: "https://www.twitter.com", youtubeUrl: "https://www.youtube.com", instagramUrl: "https://www.instagram.com"}}
                         imageUrl={eventImage}  />
            
            <SingleEvent title="Event Name 2"
                         description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ipsam sunt id suscipit debitis numquam minus quo ipsa quas quisquam nostrum non error velit quis, ipsum vitae blanditiis ducimus? Reiciendis!"
                         socialLinks={{facebookUrl: "https://www.facebook.com", twitterUrl: "https://www.twitter.com", youtubeUrl: "https://www.youtube.com", instagramUrl: "https://www.instagram.com"}}
                         imageUrl={eventImage}
                         position="self-end"  />
      
            <SingleEvent title="Event Name 3"
                         description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ipsam sunt id suscipit debitis numquam minus quo ipsa quas quisquam nostrum non error velit quis, ipsum vitae blanditiis ducimus? Reiciendis!"
                         socialLinks={{facebookUrl: "https://www.facebook.com", twitterUrl: "https://www.twitter.com", youtubeUrl: "https://www.youtube.com", instagramUrl: "https://www.instagram.com"}}
                         imageUrl={eventImage}  />
      
  
          </div>
  
        </div>
  
      </ul>
  
    )
  
  }
  
  
  
  export default Events
  