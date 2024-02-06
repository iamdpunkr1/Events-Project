
const MCards = ({title}) => {
  return (
    <a
    className="flex flex-col flex-wrap mb-0 overflow-hidden rounded lg:flex-row "
    href="#"
  >
    <div className="relative w-full overflow-hidden lg:w-2/4 h-80">
      <img
        className="object-cover w-full h-full transition-all hover:scale-110"
        src="https://i.postimg.cc/sgKBp1ZS/pexels-sam-kolder-2387866.jpg"
        alt=""
      />
      {/* <span className="absolute px-4 py-2 text-xs text-white bg-red-500 rounded top-4 left-4">
        Exercise
      </span> */}
    </div>
    <div className="relative self-center flex-1 p-8 ml-0 bg-white border rounded shadow dark:border-gray-700 dark:bg-gray-700 lg:items-center lg:-ml-12">
      <span className="block mb-2 text-xs font-semibold text-red-700 uppercase dark:text-red-300">
        {" "}
        6th Feb, 2024
      </span>
      <h2 className="mb-3 text-2xl font-bold leading-9 text-black dark:text-white">
        {title}
      </h2>
      <p className="text-sm leading-7 text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam
      </p>
    </div>
  </a>
  )
}

export default MCards