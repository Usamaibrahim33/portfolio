import firstproject from '../assets/firstproject.png'
import fourthproject from '../assets/fourthproject.png'
import thirdproject from '../assets/thirdproject.png'

function Projects() {
    return (
        <div id='projects' className='mx-3'>
        <h1 className='text-4xl font-bold text-cyan-500 mt-20 mb-5 '> Projects</h1>
        <div>
          <div>
            <img  src={firstproject} alt="" />
          </div>
  
          <div>
          <img src={fourthproject} alt="" />
          </div>
          
          <div>
          <img src={thirdproject} alt="" />
          </div>
       
        </div>
       </div>
    )
}

export default Projects