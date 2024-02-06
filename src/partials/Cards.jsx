import React from 'react'
import SocialIcons from './SocialIcons'
const Cards = () => {
  return (
    <div class="max-w-[340px] bg-slate-100 py-4 rounded-lg overflow-hidden shadow-md z-10">
        <h3 class="text-xl font-bold mb-2 pl-4 py-2">Card Title</h3>
    <iframe class="w-full h-48" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>

    <div class="py-8 flex justify-center gap-8">
      <SocialIcons size="28" color="red" />
    </div>
  </div>
  )
}

export default Cards