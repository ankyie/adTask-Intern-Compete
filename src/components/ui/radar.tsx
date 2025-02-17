import { cn } from '@/lib/utils'
import React from 'react'
import { FaUser } from 'react-icons/fa'

const Radar = ({className = ""}) => {
  return (
    <div>
      <div className={cn(`radar-border relative w-96 h-96 border border-[#7687B56E] rounded-full flex justify-center items-center`, className)}>
        <div className="radar-center absolute bg-white rounded-full w-3 h-3"></div>
        <div className="bg-[conic-gradient(from_90deg_at_50%_50%,_rgba(118,135,181,1)_0%,_rgba(118,135,181,1)_2%,_rgba(51,59,79,1)_2%,_rgba(51,59,79,1)_25%,_rgba(238,130,238,0)_25%)] w-full h-full rounded-full opacity-30 animate-radar"></div>
        <div className="radar-ripple absolute w-full h-full rounded-full flex justify-center items-center bg-[#E6EDFF1F] animate-ripple"></div>
        <div className="user-icons absolute w-2/3 h-2/3">
            <div className='absolute top-0 right-0 animate-reveal delay-[0s]'>
                <FaUser className='text-2xl opacity-50 text-[#7687B5]' />
            </div>
            <div className='absolute top-1/2 left-0 animate-reveal2 delay-[0.2s]'>
                <FaUser className='text-2xl opacity-50 text-[#7687B5]' />
            </div>
            <div className='absolute top-[90%] left-1/2 animate-reveal3 delay-[0.4s]'>
                <FaUser className='text-2xl opacity-50 text-[#7687B5]' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Radar
