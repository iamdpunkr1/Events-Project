import { useState } from 'react';
import SocialIcons from './SocialIcons';

const Cards = ({ title, link }) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className=" bg-slate-50 w-full md:w-3/6 lg:w-2/6 rounded-lg shadow-md flex flex-col items-center">
        <h3 className="text-xl font-bold  pt-4">{title}</h3>

        {/* <button onClick={() => setModal(true)} className="relative p-4 rounded-full bg-red-500 text-white ">
          <svg className='w-8 h-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z"
              fill="#ffffff"
            />{" "}
          </g>
        </svg>

        </button> */}

        <button className='play-btn' onClick={() => setModal(true)}>
        </button>

        <div className="py-8 flex justify-center gap-4">
          <SocialIcons size="28" color="crimson" />
        </div>
      </div>

      {modal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="w-11/12 h-3/4 max-w-4xl relative">
            <iframe
              className="w-full h-full"
              src={link}
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
           <button
              onClick={() => setModal(false)}
              className="absolute right-0 top-0 md:-right-8 lg:-right-12 bg-red-500 text-white px-4 py-2 rounded-lg z-50"
            >
              X
            </button>
          </div>
        </div>
      )}
       
    </>
  );
};

export default Cards;
