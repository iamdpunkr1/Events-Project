import MCards from "../partials/MCards"

const Mission = () => {
  return (
    <section className="flex items-center bg-white lg:h-screen">
  <div className="p-4 mx-auto max-w-[1200px]">
    <div className="grid grid-cols-1 gap-4 lg:gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-2">

     <MCards title="Our Mission"/>
     <MCards title="Our Vision"/>
     
    </div>
  </div>
</section>

  )
}

export default Mission