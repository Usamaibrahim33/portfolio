
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import usama from  '../assets/usama.png'
import { Link } from 'react-router-dom'
function FrontMessage() {
    return(
        <div className='dark:text-white'>
            <div className='text-center p-5 mt-24 md:text-xl max-w-xl mx-auto'>
            <h2 className='text-4xl font-medium text-cyan-600 py-2 md:text-6xl'> Usama Ibrahim</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Developer & Cybersecurity Enthusiast.</h3>
            <p className='text-md pt-3 px-4  text-gray-800 md:text-xl dark:text-white'>
            Freelance professional offering expertise in programming and design. Equipped with a deep understanding of cybersecurity, I'm passionate about creating robust solutions for your digital needs.
            </p>
        </div>
        <div className='text-3xl flex justify-center  mt-7 gap-2'>
                 <Link to='https://twitter.com/john75605124316' target='_blank'>
                 <AiFillTwitterCircle />
                 </Link>
            
                <Link to='https://www.linkedin.com/in/usama-ibrahim-5b79a9271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' target='_blank'>
                <AiFillLinkedin />
                </Link>
             
                <Link to='https://github.com/' target='_blank'>
                <AiFillGithub />
                </Link>
             
            
            </div><div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden object-cover md:h-96 md:w-96'>
                <img src={usama}  alt="" />

            </div>
        </div>
    )
}

export default FrontMessage