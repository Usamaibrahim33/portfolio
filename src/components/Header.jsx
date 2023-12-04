import { useState,  } from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs'
function Header() {
    const [darkMode, setDarkMode] = useState(false)
    const [menu, setMenu] = useState(false)

    const handleDarkMode = () => {
        setDarkMode(!darkMode)
   
    }

    const showMenu = (event) => {
        event.preventDefault()
        setMenu(!menu)
       
    }

    return(
        <>
                 {menu ? <div className=' fixed top-0 z-50 w-screen text-white bg-cyan-600 '>
                 <nav className=' py-10  mb-12  flex justify-between fixed top-0 w-full z-10  bg-cyan-600 border-b border-white '>
                 <h1 className='text-xl text-white ml-5' > Usama</h1>
                 <ul className='flex items-center mr-5'>
                   <li>
                      <BsFillMoonStarsFill className=' cursor-pointer text-2xl text-black ' onClick={handleDarkMode} />
                   </li>
                   <li>
                   <a href="#" className='bg-white text-cyan-500 px-4 py-2 rounded-md ml-4 cursor-pointer  ' onClick={showMenu}>Back</a>
                     {/* {menu ? <h1 className='h-screen w-screen bg-purple-600 flex justify-center items-center'> this is usaa </h1> :  } */}
                     
                   </li>
                 </ul>
               </nav>


               <div className='flex justify-center  items-center'>
               <ul className='mt-20'>
                        <li id='projects' className='text-2xl mt-10 cursor-pointer'> Home</li>
                        <li className='text-2xl mt-2 cursor-pointer' > About </li>
                        <li className='text-2xl mt-2 cursor-pointer'> Service</li>
                        <li className='text-2xl mt-2 cursor-pointer'>Contact us</li>
                        <li className='text-2xl mt-2 cursor-pointer'> Projects</li>

                        <li className='text-4xl  bg-black rounded-lg px-2 py-1 mt-10 mb-2 hover:text-cyan-600 duration-500'> Get Started </li>
                    </ul>
               </div>
                

                    </div>
                 :         <nav className=' py-10  mb-12  flex justify-between fixed top-0 w-full z-10  bg-cyan-600 '>
                 <h1 className='text-xl text-black text-center flex  justify-center items-center ml-5 font-bold rounded-full bg-cyan-600 h-10 w-10 border border-white' > U </h1>
                 <ul className='flex items-center mr-5'>
                   <li>
                      <BsFillMoonStarsFill className=' cursor-pointer text-2xl ' onClick={handleDarkMode} />
                   </li>
                   <li>
                   <a href="#" className='bg-white text-cyan-500 px-4 py-2 rounded-md ml-4 cursor-pointer  ' onClick={showMenu}>Menu</a>
                     {/* {menu ? <h1 className='h-screen w-screen bg-purple-600 flex justify-center items-center'> this is usaa </h1> :  } */}
                     
                   </li>
                 </ul>
               </nav>  } 
        </>

    )
}

export default Header