import React from 'react'

const Nextlevel = () => {
  return (
    <div className='p-2 sm:px-[5%] sm:h-screen w-full  '>
        <h1 className='text-center sm:mt-[10%] md:mt-[25%]  lg:mt-[10%] mt-[20%]'>Next Level Comfy</h1>
        <div className='  px-[9%]  grid grid-cols-3  sm:gap-[5%] gap-[5%]   sm:h-[620px] h-[400px] justify-center mt-[5%] sm:overflow-x-scroll  md:overflow-x-scroll lg:overflow-x-hidden overflow-x-scroll'>
        <div className=' w-[900px] sm:w-[1500px]   sm:h-[600px] h-full  flex gap-10'>
          <div className='hover:p-3 duration-300 h-full  sm sm:w-[800px] w-[900px]'>
            <div className='border  rounded-xl sm:h-full h-[400px] '></div>
            </div>
            <div className='hover:p-3 duration-300 sm:w-[800px] w-[900px] '>
            <div className='border  rounded-xl sm:h-full h-[400px]'></div>
            </div>
            <div className='hover:p-3 duration-300 sm:w-[800px] w-[900px]'>
            <div className='border  rounded-xl sm:h-full h-[400px]'></div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Nextlevel;
