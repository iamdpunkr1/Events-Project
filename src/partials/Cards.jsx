import React from 'react'

const Cards = () => {
  return (
    <div class="w-[420px] bg-slate-100 py-4 rounded-lg overflow-hidden shadow-md z-10">
        <h3 class="text-xl font-bold mb-2 pl-4 py-2">Card Title</h3>
    <iframe class="w-full h-48" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>

    <div class="p-4">
      

      <p class="text-gray-700">
        Here's a brief description of the video content. You can add more details here to entice viewers to watch.
      </p>
    </div>
  </div>
  )
}

export default Cards