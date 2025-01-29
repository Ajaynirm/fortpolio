import React from 'react'

const BootScreen = () => {
  return (
    <>
        <div className='flex flex-col justify-center items-center h-screen w-auto gap-20 '>
                <div className='text-3xl md:text-4xl font-serif animate-bounce text-center'>Welcome to My Portfolio</div>
                <div className="loading loading-ring loading-lg"></div>
        </div>
    </>
  )
}

export default BootScreen;



