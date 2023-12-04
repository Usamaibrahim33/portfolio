import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'

function Footer() {
    return(
        <footer className=' bg-cyan-600 text-white  mt-10 '>
   <div className='container mx-auto flex justify-between items-center '>
    {/* Contact Details */}
    <div className='text-left ml-3'>
      <h4 className='text-lg font-bold'>Contact Me</h4>
      <p className='text-sm'>Email: your.email@example.com</p>
      <p className='text-sm'>Phone: +1234567890</p>
    </div>

    {/* Social Media Links */}
    <div className='flex space-x-2 mr-5'>
      <a href='#' className='text-2xl transform  transition-transform hover:110'>
        <AiFillTwitterCircle />
      </a>
      <a href='#' className='text-2xl transform transition-transform hover:scale-110'>
        <AiFillLinkedin />
      </a>
      <a href='#' className=' text-2xl transform transition-transform hover:scale-110'>
        <AiFillYoutube />
      </a>
     
    </div>
  </div>

  {/* Copyright Section */}
  <div className='text-center mt-4'>
    <p className='text-sm '>
      &copy; 2023 Usama Ibrahim. All Rights Reserved.
    </p>
  </div>
   </footer>
    )
}

export default Footer