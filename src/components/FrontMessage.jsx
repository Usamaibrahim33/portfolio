
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube , AiFillGithub} from 'react-icons/ai'
import usama from  '../assets/usama.png'
function FrontMessage() {
    return(
        <><div className='text-center p-5 mt-24 md:text-xl max-w-xl mx-auto'>
            <h2 className='text-4xl font-medium text-cyan-600 py-2'> Usama Ibrahim</h2>
            <h3 className='text-2xl py-2'>Developer & Designer</h3>
            <p className='text-md pt-3 px-4  text-gray-800'>Freelance providing services for programming and design with backend content needs, join me down below and let get cracking</p>
        </div><div className='text-3xl flex justify-center  mt-7 gap-2'>
                <AiFillTwitterCircle />
                <AiFillLinkedin />
                <AiFillYoutube />
                <AiFillGithub />
            </div><div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden object-cover'>
                <img src={usama}  alt="" />

            </div></>
    )
}

export default FrontMessage