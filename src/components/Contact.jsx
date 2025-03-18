import React from 'react'
import { toast } from 'react-toastify';
import { motion } from "motion/react"

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7233a702-07b6-4cbe-9e02-ff240b566d9f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };


  return (
    <motion.div
    initial={{opacity:0,x:200}}
    transition={{duration : 1.5}}
    whileInView={{opacity:1,x:0}}
    viewport={{once: true}}
    className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>
        Contact <span className='underline underline-offset-4 decoration-1 font-light'>With Us</span>
      </h1>
      <p className='text-gray-500 max-w-80 text-center mb-8 mx-auto'>Whenever You're Ready!</p>

      <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
        {/* Wrap both inputs inside a flex container */}
        <div className='flex flex-wrap md:flex-nowrap gap-4'>
          <div className='w-full md:w-1/2 text-left'>
            <label className='block text-gray-700'>Your Name</label>
            <input
              className='w-full border border-gray-300 rounded py-3 px-4 mt-2'
              type="text"
              name='Name'
              placeholder='Your Name'
              required
            />
          </div>

          <div className='w-full md:w-1/2 text-left'>
            <label className='block text-gray-700'>Your Email</label>
            <input
              className='w-full border border-gray-300 rounded py-3 px-4 mt-2'
              type="email"
              name='Email'
              placeholder='Your Email'
              required
            />
          </div>
        </div>
        <div className='py-2'>
            Message
            <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none'
            name="Message" placeholder='Message' required></textarea>
        </div>
        <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => console.log('hover started!')}
        className='bg-blue-600 text-white px-8 py-2 rounded'>{result ? result : "Send Message"}</motion.button>
      </form>
    </motion.div>
  )
}

export default Contact;
