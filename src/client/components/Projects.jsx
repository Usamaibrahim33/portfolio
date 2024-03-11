import firstproject from '../assets/firstproject.png'
import fourthproject from '../assets/fourthproject.png'
import thirdproject from '../assets/thirdproject.png'
import secondproject from '../assets/secondproject.png'
import { useLocation } from 'react-router-dom'

function Projects() {
  const location = useLocation()
  const projectRoute = location.pathname !== '/'
  

    return (
        <div id='projects' className={`mx-3 ${projectRoute ? ' mt-32 mx-44': ''} dark:text-white`}>
           <hr  className='mt-5'/>
            <h1 className='text-4xl font-bold text-cyan-500 mt-5 mb-3 '> Projects</h1>
            <p className='leading-7'>As a dedicated developer, I've embarked on numerous projects, each a testament to my passion for innovation and problem-solving. Using a blend of React, Tailwind CSS, HTML5, and JavaScript, I've crafted versatile applications that showcase my commitment to user-centric design and seamless functionality. Explore a few of my projects below, each a product of creativity, skill, and a fervent pursuit of excellence.</p>
            


            <div className=' text-white lg:grid grid-cols-3 gap-2'>
           

                  <div className='mt-10 mx-2  bg-cyan-600  shadow-lg border rounded-lg  transform transition-transform  hover:scale-110 dark:bg-black'>
                          <img  src={firstproject} alt="" />
                          <div className=''>
                              <h1 className='mt-5'> TECHNOLOGY:</h1>
                              <ul className='ml-5'>
                                    <li className='font-bold'> React</li>
                                    <li className='font-bold'> Tailwind Css</li>
                                    <li className='font-bold'>Html 5</li>
                                    <li className='font-bold'>JavaScript</li>
                              </ul>
                              <div className='py-1 mt-9  bg-white text-black text-center rounded-lg' > 
                                  <a className=' font-bold' href="https://github.com/Usamaibrahim33/js-dom-brewery-tours-challenge">View Source Code</a>
                              </div>
                          </div>
                  </div>
          
                  <div className='mt-10 mx-2  bg-cyan-600  shadow-lg border rounded-lg  transform transition-transform  hover:scale-110 dark:bg-black '>
                            <img src={fourthproject} alt="" />
                            <div className=''>
                                <h1 className='mt-5'> TECHNOLOGY:
                                  </h1>
                                  <ul className='ml-5'>
                                  <li className='font-bold'> React</li>
                                        <li className='font-bold'> Tailwind Css</li>
                                        <li className='font-bold'>Html 5</li>
                                        <li className='font-bold'>JavaScript</li>
                                  </ul>
                            </div>
                            <div className='py-1 mt-9  bg-white text-black text-center rounded-lg' > 
                                  <a className=' font-bold' href="https://github.com/Usamaibrahim33/js-dom-pokemon-cards">View Source Code</a>
                            </div>
                  </div>
                  

                  <div className='mt-10 mx-2 bg-cyan-600  shadow-lg border-cyan-600 rounded-lg  transform transition-transform  hover:scale-110 dark:bg-black'>
                          <img   src={thirdproject}  alt="" />
                          <div className='mt-5'>
                              <h1  className='mt-5 text-xl'> TECHNOLOGY:  </h1>
                                <ul className='ml-5'>
                                    <li className='font-bold'> React</li>
                                    <li className='font-bold'> Tailwind Css</li>
                                    <li className='font-bold'>Html 5</li>
                                    <li className='font-bold'>JavaScript</li>
                                </ul>                        
                          </div>
                          <div className='py-1 mt-8  bg-white text-black text-center rounded-lg' > 
                                  <a className=' font-bold' href="https://github.com/Usamaibrahim33/react-greengrocers">View Source Code</a>
                          </div>      
                  </div>

                  <div className='mt-10 mx-2 bg-cyan-600  shadow-lg border rounded-lg  transform transition-transform  hover:scale-110 dark:bg-black'>
                            <img src={secondproject} alt="" />
                            <div className=''>
                              <h1 className='mt-5'> TECHNOLOGY: </h1>
                                <ul className='ml-5'>
                                    <li className='font-bold'> React</li>
                                    <li className='font-bold'> Tailwind Css</li>
                                    <li className='font-bold'>Html 5</li>
                                    <li className='font-bold'>JavaScript</li>
                                </ul>
                            </div>

                            <div className='py-1 mt-5  bg-white text-black text-center rounded-lg' > 
                                <a className=' font-bold' href="https://github.com/Usamaibrahim33/Individual-Project/tree/main">View Source Code</a>
                            </div>
               </div>

          
             </div>
       </div>
    )
}

export default Projects