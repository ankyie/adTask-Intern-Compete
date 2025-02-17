import React from 'react'
import reactElementToJSXString from "react-element-to-jsx-string";
import Image from 'next/image';

const ShimmerButton = () => {
  return (
    <div>
      {/* <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(70deg,#080808,45%,#D9D9D9,55%,#080808)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <Image 
        src={"/svgs/star.svg"}
        alt='AI sparkle'
        height={24}
        width={24}
        ></Image>
        <span className='ml-2'>TRANSFORM YOUR DIGITAL PRESENCE WITH AI AGENTS</span>
      </button> */}
      <button className='relative flex items-center justify-center p-3 bg-zinc-800/40 backdrop-blur-md rounded-xl border border-gray-800 overflow-hidden'>
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
