import Masonry from "react-masonry-css";
import { useState } from "react";
const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const imageSrc = [
  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",
  "https://images.pexels.com/photos/2147029/pexels-photo-2147029.jpeg?cs=srgb&dl=pexels-laura-stanley-2147029.jpg&fm=jpg",
  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp",
  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
  "https://i.pinimg.com/236x/b3/81/6e/b3816ef52daa13277134887e0cc7f314.jpg",
  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",
  "https://images.pexels.com/photos/2147029/pexels-photo-2147029.jpeg?cs=srgb&dl=pexels-laura-stanley-2147029.jpg&fm=jpg",
  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp",
  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
  "https://i.pinimg.com/236x/b3/81/6e/b3816ef52daa13277134887e0cc7f314.jpg",
  "https://images.pexels.com/photos/2147029/pexels-photo-2147029.jpeg?cs=srgb&dl=pexels-laura-stanley-2147029.jpg&fm=jpg",
  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",
  
  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp",
  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
  "https://i.pinimg.com/236x/b3/81/6e/b3816ef52daa13277134887e0cc7f314.jpg",
  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",
  
  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp",
  "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
  "https://images.pexels.com/photos/2147029/pexels-photo-2147029.jpeg?cs=srgb&dl=pexels-laura-stanley-2147029.jpg&fm=jpg",
  "https://i.pinimg.com/236x/b3/81/6e/b3816ef52daa13277134887e0cc7f314.jpg",

]
const Gallery = () => {

  const [modal, setModal] = useState(false);
  const [selectedImg, setImg] = useState("");


  return (
    <>
    <Masonry
    id="gallery"
    breakpointCols={breakpointColumnsObj}
    className="my-masonry-grid"
    columnClassName="my-masonry-grid_column">
    {
      imageSrc.map((src, i)=>{
      return  (
            <div key={i} className="w-full " onClick={()=>{ setImg(src); setModal(true);}}>
                <img
                  alt="gallery"
                  className="block  w-full rounded-lg object-cover object-center hover:scale-105 transition ease-in-out duration-1000"
                  src={src} />
              </div>
        )
      })
    }
  
                 
        
    </Masonry>

     {modal && (
        <div className="fixed top-0 left-0 w-full h-screen overflow-hidden bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className=" max-w-4xl relative">
            <img src={selectedImg} className="w-full max-h-screen"/>
           <button
              onClick={() =>{ setModal(false); setImg("")}}
              className="absolute right-0 top-0 md:-right-8 lg:-right-12 bg-red-500 text-white px-4 py-2 rounded-lg z-50"
            >
              X
            </button>
          </div>
        </div>
      )}
      </>
    
  )
}

export default Gallery