/* eslint-disable react/prop-types */
// import { useEffect } from 'react'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Footer() {

  // useEffect(() => {
  //   handleDarkMode()
    
  // }, [])

    return(
      <footer className=' bg-cyan-600 text-white   mt-10 '>
            <div className='container mx-auto flex justify-between  items-center mb-5 lg:ml-40'>
                      {/* Contact Details */}
                      <div className='text-left mt-10 ml-3'>
                            <h4 className='text-lg font-bold'>Contact Me</h4>
                            <p className='text-sm'>Email: usamaibrahimusman@gmail.com</p>
                            <p className='text-sm'>Phone: 07384120031</p>
                      </div>

                      {/* Social Media Links */}
                      <div className='flex space-x-2 mr-5 lg:mr-40'>
                            <Link to='https://twitter.com/john75605124316' target='_blank'>
                            <AiFillTwitterCircle className=' text-2xl' />
                            </Link>
                        
                            <Link to='https://www.linkedin.com/in/usama-ibrahim-5b79a9271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' target='_blank'>
                            <AiFillLinkedin className=' text-2xl ' />
                            </Link>
                        
                            <Link to='https://github.com/' target='_blank'>
                            <AiFillGithub className=' text-2xl' />
                            </Link>
                      
                      </div>
             </div>

            {/* Copyright Section */}
              <div className='text-center '>
                <p className='text-sm pb-5   '>
                  &copy; 2023 Usama Ibrahim. All Rights Reserved.
                  <br />
                </p>
              </div>

      </footer>
    )
}

export default Footer