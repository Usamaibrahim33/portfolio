import { useLocation } from "react-router-dom"
function AboutMe() {
  const location = useLocation()
  const projectRoute = location.pathname !== '/'
    return(
        <div className={`mx-3 ${projectRoute ? 'mt-32 mx-44' : ''} dark:text-white`}>
                {/* <h1 className='text-4xl text-cyan-500 font-bold text-center'> About</h1> */}
                <h1 className={`text-4xl  text-cyan-500 font-bold ${projectRoute ? 'text-center' : ''}`}>About</h1>

                <h2 className="text-2xl mt-5 text-cyan-500 font-bold "> Introduction </h2>
                <p className='text-md  leading-7 text-gray-80'> 
                     Hi there! I'm Usama Ibrahim, a 20-year-old Nigerian currently based in the UK, passionately exploring the realms of cybersecurity and coding. Two years ago, my journey into the world of cybersecurity began, and it's been an exhilarating ride ever since.
                </p>


                <h2 className="text-2xl mt-5 text-cyan-500 font-bold"> Background </h2>
                 <p className='text-md  line leading-7'>
                     After completing my cybersecurity course, I proudly obtained my CompTIA Security+ certification, a milestone that marked the initiation of my venture into the digital security domain. However, amidst all the security protocols and protocols, a curious love for coding blossomed within me.
                 </p>

                 <h2 className="text-2xl mt-5 text-cyan-500 font-bold"> Coding Passion </h2>
                 <p className='text-md  leading-7 text-gray-80'>
                 It's a bit funny, to be honest—I found myself irresistibly drawn to lines of code, even if their full meaning eluded me. This fascination spurred me to pursue my interest further. I found my way to Booleans, where I immersed myself in the world of full-stack software development.
                </p>

                <h2 className="text-2xl mt-5 text-cyan-500 font-bold"> Skill Set </h2>
                <p className="leading-7"> At Booleans, I've delved into JavaScript, HTML, CSS, Node.js, and TypeScript, honing my skills with frameworks like Figma, Tailwind, and Bootstrap. While my cybersecurity background acquainted me with Python and a touch of Golang, my heart truly sings when crafting components—something I've had a knack for since childhood.

                </p>

                <h2 className="text-2xl mt-5 text-cyan-500 font-bold">Vision</h2>
                <p className="leading-7">It's not just about building apps anymore. It's about fortifying them with reliable security measures. Here, I aim not only to construct applications but to fortify them with robust security elements.

                </p>

                <h2 className="text-2xl mt-5 text-cyan-500 font-bold"> Conclusiom</h2>
                <p className=" leading-7">                I'm excited to merge my cybersecurity expertise with my newfound passion for coding, creating not just applications but fortified digital spaces. Let's build something sturdy and secure together!
</p>
        </div>
    )
}

export default AboutMe