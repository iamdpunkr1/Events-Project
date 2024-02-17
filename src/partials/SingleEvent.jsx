import SocialIcons from "./SocialIcons"

const SingleEvent = ({title, description, socialLinks, imageUrl, position=""}) => {
  return (
    <div className={"flex  justify-between max-w-[740px] overflow-hidden  bg-white self-start border-l-8 border-red-500 border-solid rounded-md " +position}>
               <div className="px-4   flex flex-col w-7/12">
                <h2 className="text-xl pt-16 font-bold text-slate-800">{title}</h2>
                <div className="w-8 h-[2px] bg-red-500"></div>
                <p>{description}</p>

                <div className="flex gap-4 pt-8">
                  <SocialIcons size="24" color="gray" 
                                facebookUrl={socialLinks.facebookUrl}
                                twitterUrl={socialLinks.twitterUrl}
                                youtubeUrl={socialLinks.youtubeUrl}
                                instagramUrl={socialLinks.instagramUrl} />
                </div>
               </div>
               
               <div className="w-5/12">
                <img src={imageUrl} alt="Placeholder" className="w-full" />
               </div>
    </div>
  )
}

export default SingleEvent