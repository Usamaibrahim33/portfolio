/* eslint-disable react/no-unknown-property */
import './App.css'
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './components/Contact'
import FrontMessage from './components/FrontMessage'
import AboutMe from './components/Aboutme'
import Projects from './components/Projects'
import ServiceOffered from './components/serve'



function App() {

  return (
     <>
     <div className='bg-white  '>
     <section className='min-h-screen '>
        <Header />
        <FrontMessage />  
      


        <div className='mt-10 mx-3'>
            <h3 className='text-3xl py-1'>Services I Offer</h3>
            <p className='text-md py-2 leading-6 text-gray-80'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. span <span className='text-teal-500'> Laborum veniam</span>
                Laborum veniam mollitia ut, voluptatem repellendus <span className='text-teal-500'> Laborum veniam</span> molestiae rerum itaque, corrupti ab nam, culpa repudiandae repellat. Corrupti, odit. Reprehenderit, doloribus culpa? Quidem, soluta?</p>
        </div><div className='text-center shadow-lg p-10 rounded-xl my-10 transform transition-transform hover:scale-110 mx-5 '>
                <img src={design} width={100} height={100} className='mx-auto' alt="" />
                <h3 className='text-lg font-medium pt-6 '> Beautiful Designs</h3>
                <p>
                    Creating elegent designs suited for your needs following core design theory
                </p>

                <h4 className=' text-teal-600 py-4'>
                    Design Tools I Use
                </h4>
                <p className=' text-gray-800 '> PhotoShop</p>
                <p className='text-gray-800 '> Illustrator</p>
                <p className='text-gray-800 '> Figma </p>
            </div><div className='text-center shadow-lg p-10 rounded-xl my-10 transform transition-transform hover:scale-110 mx-5'>
                <img src={code} width={100} height={100} className='mx-auto' alt="" />
                <h3 className='text-lg font-medium pt-6 '> Beautiful Designs</h3>
                <p>
                    Creating elegent designs suited for your needs following core design theory
                </p>

                <h4 className=' text-teal-600 py-4'>
                    Design Tools I Use
                </h4>
                <p className=' text-gray-800 '> PhotoShop</p>
                <p className='text-gray-800 '> Illustrator</p>
                <p className='text-gray-800 '> Figma </p>
            </div><div className='text-center shadow-lg p-10 rounded-xl my-10 transform transition-transform hover:scale-110 mx-5'>
                <img src={consulting} width={100} height={100} className='mx-auto' alt="" />
                <h3 className='text-lg font-medium pt-6 '> Beautiful Designs</h3>
                <p>
                    Creating elegent designs suited for your needs following core design theory
                </p>

                <h4 className=' text-teal-600 py-4'>
                    Design Tools I Use
                </h4>
                <p className=' text-gray-800 '> PhotoShop</p>
                <p className='text-gray-800 '> Illustrator</p>
                <p className='text-gray-800 '> Figma </p>
            </div>


export default ServiceOffered
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />         
    </section>
     </div>
    </>
  )
}

export default App
