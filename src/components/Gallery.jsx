import Masonry from "react-masonry-css"
const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const Gallery = () => {
  return (
        
    <Masonry
    breakpointCols={breakpointColumnsObj}
    className="my-masonry-grid"
    columnClassName="my-masonry-grid_column">
    {/* array of JSX items */}
  
        

              <div className="w-full ">
                <img
                  alt="gallery"
                  className="block  w-full rounded-lg object-cover object-center hover:scale-105 transition ease-in-out duration-1000"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
              </div>
              <div className="w-full  bg-white">
                <img
                  alt="gallery"
                  className="block  w-full rounded-lg object-cover object-center hover:scale-105 transition ease-in-out duration-1000"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
              </div>
              <div className="w-full  ">
                <img
                  alt="gallery"
                  className="block  w-full rounded-lg object-cover object-center hover:scale-105 transition ease-in-out duration-1000"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
              </div>
            
              <div className="w-full  ">
                <img
                  alt="gallery"
                  className="block  w-full rounded-lg object-cover object-center hover:scale-105 transition ease-in-out duration-1000"
                  src="https://i.pinimg.com/236x/b3/81/6e/b3816ef52daa13277134887e0cc7f314.jpg" />
              </div>

              <div className="w-full ">
                <img
                  alt="gallery"
                  className="block w-full rounded-lg object-cover object-center hover:scale-105 transition ease-in-out duration-1000"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
              </div>
              <div className="w-full  ">
                <img
                  alt="gallery"
                  className="block w-full rounded-lg object-cover object-center hover:scale-105 transition ease-in-out duration-1000"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
              </div>
           
              <div className="w-full  ">
                <img
                  alt="gallery"
                  className="block  w-full rounded-lg object-cover object-center hover:scale-105 transition ease-in-out duration-1000"
                  src="https://i.pinimg.com/236x/b3/81/6e/b3816ef52daa13277134887e0cc7f314.jpg" />
              </div>
              <div className="w-full ">
                <img
                  alt="gallery"
                  className="block w-full rounded-lg object-cover object-center hover:scale-105 transition ease-in-out duration-1000"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
              </div>
              <div className="w-full  ">
                <img
                  alt="gallery"
                  className="block w-full rounded-lg object-cover object-center hover:scale-105 transition ease-in-out duration-1000"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
              </div>
            
              <div className="w-full  ">
                <img
                  alt="gallery"
                  className="block  w-full rounded-lg object-cover object-center hover:scale-105 transition ease-in-out duration-1000"
                  src="https://i.pinimg.com/236x/b3/81/6e/b3816ef52daa13277134887e0cc7f314.jpg" />
              </div>
            
        
        </Masonry>
  )
}

export default Gallery