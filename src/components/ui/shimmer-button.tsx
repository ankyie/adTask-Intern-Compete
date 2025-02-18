import React from 'react'
import Image from 'next/image';

const ShimmerButton = () => {
  return (
    <div>
      <button className='relative flex items-center justify-center md:p-3 p-2 bg-zinc-800/40 backdrop-blur-md rounded-xl border border-gray-800 overflow-hidden'>
      <div className='absolute h-14 w-1 bg-white -rotate-12 blur animate-shine'></div>
      <Image 
        src={"/svgs/star.svg"}
        alt='AI sparkle'
        height={24}
        width={24}
        ></Image>
        <span className='ml-2 text-xs'>TRANSFORM YOUR DIGITAL PRESENCE WITH AI AGENTS</span>
      </button>
    </div>
  )
}

export default ShimmerButton
