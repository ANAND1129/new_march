import React from 'react'

const FreshVibes = () => {
  return (
    <div className='border p-5 px-[8%] '>
    <h1 className='text-center mt-[15%]'>Fresh Vibes</h1>
    <div className='grid place-items-center mt-[10%] ' >
        <button className='border p-3 rounded-full'>Shop All</button>
        </div>
    <div className='md:mb-[20%] sm:grid sm:grid-cols-2 md:grid-cols-none lg:grid lg:grid-cols-2  mt-[5%] '>
        <div className='sm:h-[200px] md:w-[600px] lg:w-[780px] h-[150px] hover:p-3 duration-500'>
        <div className='border sm:h-full md:h-[170px] h-[120px]  rounded-2xl'>All Day Tee</div>
        </div>
        <div className='sm:h-[200px] md:w-[600px] lg:w-[780px] h-[150px] hover:p-3 duration-500 '>
        <div className='border sm:h-full md:h-[170px] h-[120px]  rounded-2xl'>Classic V</div>
        </div>
        <div className='sm:h-[200px] md:w-[600px] lg:w-[780px] h-[150px] hover:p-3 duration-500'>
        <div className='border sm:h-full md:h-[170px] h-[120px]  rounded-2xl'>Cooped Tee</div>
        </div>
        <div className='sm:h-[200px] md:w-[600px] lg:w-[780px] h-[150px] hover:p-3 duration-500'>
        <div className='border sm:h-full md:h-[170px] h-[120px]  rounded-2xl'>Polo Dress</div>
        </div>
        <div className='sm:h-[200px] md:w-[600px] lg:w-[780px] h-[150px] hover:p-3 duration-500'>
        <div className='border sm:h-full md:h-[170px] h-[120px]  rounded-2xl'>Waffle Knit Tee</div>
        </div>
        <div className='sm:h-[200px] md:w-[600px] lg:w-[780px] h-[150px] hover:p-3 duration-500'>
        <div className='border sm:h-full md:h-[170px] h-[120px]  rounded-2xl'>Waffle Flat Pants</div>
        </div>
    </div>
</div>
  )
}

export default FreshVibes;