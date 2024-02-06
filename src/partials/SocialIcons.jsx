import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";



const SocialIcons = ({size, color}) => {
    const iconStyles= {
        size: size,
        color: color
    }
  return (
    <>
    <FaFacebookF {...iconStyles} />
    <FaTwitter {...iconStyles}/>
    <TfiYoutube {...iconStyles}/>
    <FaInstagram {...iconStyles}/>
    </>
  )
}

export default SocialIcons