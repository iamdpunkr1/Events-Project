import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";



const SocialIcons = ({size, color, facebookUrl, twitterUrl, youtubeUrl, instagramUrl}) => {
    const iconStyles= {
        size: size,
        color: color
    }
  return (
    <>
    <a href={facebookUrl}>
      <FaFacebookF {...iconStyles} />
    </a>
    
    <a href={twitterUrl}>
      <FaTwitter {...iconStyles}/>
    </a>
    
    <a href={youtubeUrl}>
      <TfiYoutube {...iconStyles}/>
    </a>

    <a href={instagramUrl}>
      <FaInstagram {...iconStyles}/>
    </a>
    </>
  )
}

export default SocialIcons