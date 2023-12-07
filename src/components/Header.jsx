/* eslint-disable react/prop-types */
import { useState,  } from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'


function Header({handleDarkMode}) {
    
    const [menu, setMenu] = useState(false)

    const showMenu = (event) => {
        event.preventDefault()
        setMenu(!menu)
    }

    const closeMenu =() => {
      setMenu(false)
    }

    return(
        <>
                 {menu ? <div className=' fixed top-0 z-50 w-screen text-white bg-cyan-600 rounded-lg '>
                 <nav className=' py-10  mb-12  flex justify-between fixed top-0 w-full z-10  bg-cyan-600 border-b border-white '>
                 <h1 className=' text-white ml-5 flex rounded-full  border-black border h-10 w-10  justify-center items-center font-bold text-2xl ' > U</h1>
                 <ul className='flex items-center mr-5'>
                   <li>
                      <BsFillMoonStarsFill className=' cursor-pointer text-2xl text-black ' onClick={handleDarkMode}  />
                   </li>
                   <li>
                   <a href="#" className='bg-white text-cyan-500 px-4 py-2 rounded-md ml-4 cursor-pointer  ' onClick={showMenu}>Back</a>
                     
                   </li>
                 </ul>
               </nav>

               <div className='flex justify-center  items-center'>
               <ul className='mt-20'>
                        <Link to='/' onClick={closeMenu} >
                        <li id='home' className='text-2xl mt-10 cursor-pointer'> Home</li>
                        </Link>

                        <Link to='/about' onClick={closeMenu} >
                        <li className='text-2xl mt-2 cursor-pointer' > About </li>
                        </Link>
                        

                        <Link to='/service' onClick={closeMenu}  >
                          <li className='text-2xl mt-2 cursor-pointer'> Service</li>
                        </Link>
                        

                        <Link to='contact' onClick={closeMenu} >
                        <li className='text-2xl mt-2 cursor-pointer'>Contact us</li>
                        </Link>
                       

                        <Link to='/projects' onClick={closeMenu} >
                        <li className='text-2xl mt-2 cursor-pointer' > Projects</li>
                        </Link>

                        <li className='text-4xl  bg-black rounded-lg px-2 py-1 mt-10 mb-2 hover:text-cyan-600 duration-500'> Get Started </li>
                    </ul>
               </div>
                

             </div>
                 : <nav className=' py-10  mb-12  flex justify-between fixed top-0 w-full z-10  bg-cyan-600 md:px-20 lg:px-40 rounded-lg  '>
                 <h1 className='text-xl text-black text-center flex  justify-center items-center ml-5 font-bold rounded-full bg-cyan-600 h-10 w-10 border border-white' > U </h1>
                 <div>
                 <ul className=' hidden lg:flex border-black border rounded-full gap-9 justify-center mt-2 items-center  bg-white  text-black dark:bg-black dark:text-white '>
                 <Link to='/'>
                       <li className='py-1 font-bold  pl-2'>Home</li>
                       </Link>
                      

                      <Link to='/about'>
                      <li className='font-bold'>About</li>
                      </Link>
                       

                       <Link to='/contact'>
                       <li className='font-bold'>Contact</li>
                       </Link>
                      
                        <Link to='/service'>
                        <li className='font-bold'>Service</li>
                        </Link>
                       
                       <Link to='/projects'>
                       <li className='pr-2 font-bold '>Projects</li>
                       </Link>
                   </ul>

                 </div>
                 <ul className='flex items-center mr-5'>
                   <li>
                      <BsFillMoonStarsFill className=' cursor-pointer text-2xl '   onClick={handleDarkMode}  />
                   </li>
                   <li>
                   <a href="#" className='bg-white text-cyan-500 px-4 py-2 rounded-md ml-4 cursor-pointer  hover:text-cyan-600 duration-500  lg:hidden  ' onClick={showMenu}>Menu</a>
                     {/* {menu ? <h1 className='h-screen w-screen bg-purple-600 flex justify-center items-center'> this is usaa </h1> :  } */}
                     
                   </li>
                 </ul>
               </nav>  } 
        </>

    )
}

export default Header