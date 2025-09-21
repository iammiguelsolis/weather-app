import React from 'react'
import { MdWbSunny, MdMyLocation, MdOutlineLocationOn } from "react-icons/md";
import SearchBox from './SearchBox';

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className='shadow-sm sticky top-0 left-0 z-50'>
      
      <div className='h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto'>
        <div className='flex items-center gap-2'>
          <h2 className='text-gray-500 text-3xl'>Weather</h2>
          <MdWbSunny className='text-3xl mt-1 text-yellow-500'/>
        </div>

        <section className='flex items-center gap-2'>
          <MdMyLocation className='text-xl mt-1 text-gray-400'/>
          <MdOutlineLocationOn className='text-3xl mt-1 text-black'/>
          <p>Perú</p>
          <div>
            <SearchBox />
          </div>
        </section>
      </div>
    </nav>
  )
}