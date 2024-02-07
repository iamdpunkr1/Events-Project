import React from 'react'
import SocialIcons from './SocialIcons'
const Cards = ({title, link}) => {
  return (
    <div class="max-w-[340px] bg-slate-100 py-4 rounded-lg overflow-hidden shadow-md z-10">
        <h3 class="text-xl font-bold mb-2 pl-4 py-2">{title}</h3>
        <iframe
          className='w-full '
          src="https://www.youtube.com/embed/SK9AlIbexOE?si=gZAc-JD9Jwjcjbv5"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen=""
        />


    <div class="py-8 flex justify-center gap-8">
      <SocialIcons size="28" color="red" />
    </div>
  </div>
  )
}

export default Cards