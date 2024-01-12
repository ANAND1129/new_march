import React from 'react'
import Header from './Header';
import Footer from './Footer';

const Standard2 = () => {
  return (

    <div>
        <Header/>
        <div className='border lg:grid grid-cols-5'>
        <div className='border  flex flex-row lg:block overflow-x-auto col-span-3  lg:h-[1000px] h-[400px] lg:w-full lg:overflow-y-scroll  lg:overflow-x-hidden w-full'>
            <div className='border  h-[400px] lg:h-[800px] min-w-full lg:w-auto '></div>
            <div className='border  h-[400px] lg:h-[800px] min-w-full  lg:w-auto '></div>
           
        </div>
        <div className='border col-span-2'>
            <div className='border lg:h-[700px] h-[400px]'>

            </div>
        <div className='border flex w-full gap-4 lg:gap-11 lg:h-[300px] h-[150px] lg:p-14 p-4'>
                <div className='w-[200px]  hover:p-2 duration-500'>
            <div className=' border h-full rounded-xl shadow-xl'></div>
            </div>
            <div className='w-[200px]  hover:p-2 duration-500'>
            <div className=' border h-full rounded-xl shadow-xl'></div>
            </div>
            <div className='w-[200px]  hover:p-2 duration-500'>
            <div className=' border h-full rounded-xl shadow-xl'></div>
            </div>
            <div className='w-[200px]  hover:p-2 duration-500'>
            <div className=' border h-full rounded-xl shadow-xl'></div>
            </div>
        </div>
        </div>
    
        </div>
        <div className='border   p-5 px-[10%]'>
        
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
        <div className=' grid place-items-center mt-[10%] pb-[10%]' >
            <button className='border p-3 rounded-full'>Gift a Polo</button>
         </div>
    </div>
        <Footer/>    
    </div>
    
  )
}

export default Standard2;