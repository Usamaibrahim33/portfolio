
import consulting from './consulting.png'
import design from './design.png'
import code from './code.png'
import { useLocation } from 'react-router-dom'

function ServerOffered() {

    const location = useLocation()
    const projectRoute = location.pathname !== '/'
    return (

        <>
        <div className={`mx-5 ${projectRoute ? 'mt-32' : ""} dark:text-white`}>
            <h3 className='text-3xl mt-5n py-1'>Services I Offer</h3>
            <p className='text-md py-2 leading-6 text-gray-80'>
            As a versatile professional, I specialize in crafting robust software solutions, encompassing web and mobile applications. With expertise in programming and a touch of cybersecurity, I focus on delivering high-quality, secure, and innovative digital products </p>
         
        </div>

        <div className='lg:flex gap-5 '>

                <div className='text-center shadow-lg p-10 rounded-xl my-10 transform transition-transform hover:scale-110 mx-5   dark:bg-white'>
                    <img src={design} width={100} height={100} className='mx-auto' alt="" />
                    <h3 className='text-lg font-medium pt-6 '> Backend Development</h3>
                    <p>
                    Crafting robust backend solutions to power your applications, ensuring scalability and performance.                    </p>

                    <h4 className=' text-teal-600 py-4'>
                        Design Tools I Use
                    </h4>
                    <p className='text-gray-800'>Node.js</p>
                   <p className='text-gray-800'>Python (Django/Flask)</p>
              
                </div>


                <div className='text-center shadow-lg p-10 rounded-xl my-10 transform transition-transform hover:scale-110 mx-5 dark:bg-white'>
                    <img src={code} width={100} height={100} className='mx-auto' alt="" />
                    <h3 className='text-lg font-medium pt-6 '> Web Application Development</h3>
                    <p>
                        Crafting elegant and user-friendly web applications that align with your vision and follow the best design practices.
                    </p>

                    <h4 className=' text-teal-600 py-4'>
                        Design Tools I Use
                    </h4>
                    <p className='text-gray-800'>HTML</p>
                    <p className='text-gray-800'>CSS</p>
                    <p className='text-gray-800'>JavaScript</p>
                    <p className='text-gray-800'>React</p>
                    <p className='text-gray-800'>Node.js</p>
                </div>
                
                
                <div className='text-center shadow-lg p-10 rounded-xl my-10 transform transition-transform hover:scale-110 mx-5  dark:bg-white'>
                    <img src={consulting} width={100} height={100} className='mx-auto' alt="" />
                    <h3 className='text-lg font-medium pt-6 '> Mobile App Development </h3>
                    <p>
                    Building engaging and functional mobile applications, providing a seamless user experience across platforms.
                    </p>

                    <h4 className=' text-teal-600 py-4'>
                        Design Tools I Use
                    </h4>
                    <p className='text-gray-800'>React Native</p>
                    <p className='text-gray-800'>Flutter</p>
                    <p className='text-gray-800'>Swift</p>
                </div>

        </div>
            
        </>
    )
}

export default ServerOffered