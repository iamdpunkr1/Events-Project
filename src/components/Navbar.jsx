import logo from '../assets/logo.jpg'
const Navbar = () => {
  return (
    <header className='bg-transparent sticky top-0 z-10 text-white'>
        <nav className='max-w-[1200px] mx-auto flex justify-between py-6'>
            <div className='text-xl font-bold'>
              TREND MMS
              {/* <img src={logo} alt='logo' className='w-32 ' /> */}
            </div>
            <ul className='flex gap-8'>
                <li className=' font-medium'>Home</li>
                <li className=' font-medium'>About</li>
                <li className=' font-medium'>Services</li>
                <li className=' font-medium'>Contact</li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar