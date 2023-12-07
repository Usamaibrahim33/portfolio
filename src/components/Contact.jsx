import { useState } from "react"

import { useLocation } from "react-router-dom"


const getContactDetail = () => {
    const firstName = localStorage.getItem('firstName')
    const secondName = localStorage.getItem('secondName')
    const email = localStorage.getItem('email')
    const textarea = localStorage.getItem('textarea')

    return  {
        firstName: firstName || '',
        secondName: secondName || '',
        email: email || '',
        textarea: textarea || ''
    }
  

}



function Contact() {
    const [form, setForm] = useState(getContactDetail())


    const location = useLocation()
    const projectRoute = location.pathname !== '/'

    
    const postToUsama = () => {
        const options = {
            method: "POST",
            header: { "Content-Type" : "application/json"},
            body: JSON.stringify(form)         
        }

        fetch("urltosenddatato", options)
           .then((response) => response.json())
           .then((data) => console.log(data) )
           .catch((error) => console.log(error))
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('you wanna contact me right!', form)
        
        localStorage.removeItem('firstName');
        localStorage.removeItem('secondName');
        localStorage.removeItem('email');
        localStorage.removeItem('textarea')

        setForm(getContactDetail())

    }

    const handleChange = (event) => {
        const { name, value} = event.target
        setForm({...form, [name]: value})
        localStorage.setItem(name, value)

    }


    return(
        <section className={`mx-3 ${projectRoute ? 'mt-32' : ''} dark:text-white flex justify-center items-center `} >

        <form onSubmit={handleSubmit} >
        <label htmlFor="firstName">
        <h1 className='text-4xl font-bold text-cyan-500 mt-10 mb-3'> Contact </h1>
          <h1 className=''>First Name</h1>
        <input className=' rounded-lg w-full border-2 border-cyan-600  shadow-lg py-1' type="text" name='firstName' value={form.firstName} required placeholder='whats your first Name'  onChange={handleChange} /> <br />
        </label> <br />

      
        <label htmlFor="firstName">
         <h1 className=' '> Second Name</h1>  
        <input className=' rounded-lg w-full border-2 border-cyan-600  shadow-lg py-1' type="text" name='secondName' value={form.secondName} required placeholder='whats your first Name' onChange={handleChange} /> <br />
        </label> <br />

        <label htmlFor="email">
          Email <br />
          <input className=' rounded-lg shadow-lg z-10 border-2 border-cyan-600  w-full py-1' type="email" name='email' value={form.email} required placeholder='whats your email address '   onChange={handleChange}/>
        </label> <br />

        <label htmlFor="textarea"> <br />
           <h1 className="">  Message  </h1> 
            <textarea className="border-2 w-full border-cyan-600" name="textarea" value={form.textarea} id="textarea" cols="30" rows="10" placeholder="write your message here" onChange={handleChange}></textarea>
        </label>

        <input className='w-full border text-1xl hover:scale-110 duration-500 cursor-pointer shadow-lg bg-gold-600 bg-cyan-600 text-white rounded-md py-2 mt-40 lg:bg-black ' type="submit" value='Submit' />
        </form>   
      </section>
    )
}

export default Contact