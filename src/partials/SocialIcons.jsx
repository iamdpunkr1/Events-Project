import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

const SocialIcons = ({ size, color, facebookUrl, twitterUrl, youtubeUrl, instagramUrl, whatsappUrl }) => {
    const iconStyles = {
        size: size,
        color: color
    };

    return (
        <>
            {facebookUrl && (
                <a href={facebookUrl}>
                    <FaFacebookF {...iconStyles} />
                </a>
            )}

            {twitterUrl && (
                <a href={twitterUrl}>
                    <FaTwitter {...iconStyles} />
                </a>
            )}

            {youtubeUrl && (
                <a href={youtubeUrl}>
                    <TfiYoutube {...iconStyles} />
                </a>
            )}

            {instagramUrl && (
                <a href={instagramUrl}>
                    <FaInstagram {...iconStyles} />
                </a>
            )}

            {whatsappUrl && (
                <a href={whatsappUrl}>
                    <FaWhatsapp {...iconStyles} />
                </a>
            )}
        </>
    );
};

export default SocialIcons;
