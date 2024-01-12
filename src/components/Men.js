import React from 'react'
import { Link } from 'react-router-dom';

const Men = () => {
  return (
    <div className='flex flex-col border flex-1 overflow-y-scroll h-[810px] '>
    <div className=''>
    <div className='border text-xl p-10'>
        <Link to="/standard1" className='hover:ml-5 duration-500'>
        All Tee
        </Link>
        </div>
    <div className='border text-xl p-10 '>
    <h1 className='hover:ml-5 duration-500'>
        Clasic Tee
        </h1>
    </div>
    <div className='border text-xl p-10 '>
    <h1 className='hover:ml-5 duration-500'>
        Hammo
        </h1>
    </div>
    </div>
    <div className='flex flex-col gap-10 mt-10'>
    <div className=''>
        <h1>Classic Tee</h1>
        <h4>
            <Link to="standard2">
            1
            </Link>
            </h4>
        <h4>2</h4>
        <h4>3</h4>
        <h4>4</h4>
        <h4>5</h4>
        <h4>6</h4>
    </div>
    <div>
        <h1>Hamoo</h1>
        <h4>1</h4>
        <h4>2</h4>
        <h4>3</h4>
        <h4>4</h4>
        <h4>5</h4>
        <h4>6</h4>
    </div>
    <div>
        <h1>Exclusive</h1>
        <h4>1</h4>  
    </div>
    <div>
        <h1>Unit Tee</h1>
        <h4>1</h4>
        <h4>2</h4>
        <h4>3</h4>
        <h4>4</h4>
        <h4>5</h4>
        <h4>6</h4>
    </div>
    <div>
        <h1>Essentials</h1>
        <h4>1</h4>
        <h4>2</h4>
    </div>
    </div>
    </div>

  )
}

export default Men;