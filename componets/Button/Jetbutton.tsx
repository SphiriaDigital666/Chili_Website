"use client";
import React from 'react'
import Link from 'next/link'

function Jetbutton() {
  return (
    <Link href="/Kontakt" className='flex gap-2 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7 group hover:gap-5 sm:hover:gap-6 md:hover:gap-8 lg:hover:gap-8 xl:hover:gap-9 transition-all duration-300'>
    <div>
      <button className="bg-[#DDBB93] font-bold backdrop-blur-sm text-black outline outline-2 outline-[#DDBB93] outline-offset-2 h-[32px] sm:h-[36px] md:h-[40px] lg:h-[44px] xl:h-[48px] px-6 sm:px-6 md:px-8 lg:px-6 xl:px-12 rounded-full text-xs sm:text-xs md:text-sm lg:text-base xl:text-base flex items-center justify-center transition-all duration-300 group-hover:bg-[#DDBB93]/80 group-hover:backdrop-blur-md group-hover:scale-105 group-hover:outline-[#DDBB93]/80">
      J E T Z T STARTEN
      </button>
    </div>

   
  </Link>
  )
}

export default Jetbutton