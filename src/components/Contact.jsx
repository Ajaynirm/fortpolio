import React from 'react'

const Contact = () => {
  return (
    <>
       <div className='flex flex-col  justify-center items-center gap-10 pt-32 pb-32'>
            <div className='text-2xl lg:text-5xl font-bold font-serif' id='contact'>Contact Me</div>
            <div className='border-purple-600 border-2 border-solid px-20 py-5 rounded-xl'>   
                <a href="mailto:ajaypratik888@gmail.com" className="link link-error">Click to Send a Mail</a>
            </div>
       </div>
    </>
  )
}

export default Contact



