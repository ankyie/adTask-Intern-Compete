import React from 'react'
import FeatureCards from '../ui/feature-cards'
import BlackButton from '../ui/black-gradient-button'

const Features = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center gap-6 pb-20'>
        <BlackButton>
          FEATURES
        </BlackButton>
        <div className='flex w-full justify-center items-center'>
          <div className='relative h-[2px] flex-1 bg-gradient-to-r from-[#0D111A] to-[#5C73AE]'></div>
          <div className='text-center px-6 text-4xl'>
            <h2>Feature packed to make</h2>
            <h2 className='text-transparent bg-clip-text bg-gradient-to-r from-[#7687B5] via-[#91B0FF] to-[#E2E8F8]'>Digital marketing easier and affordable.</h2>
          </div>
          <div className='relative h-[2px] flex-1 bg-gradient-to-l from-[#0D111A] to-[#5C73AE]'></div>
        </div>
        <div className='text-sm text-center'>
          <p>Experience Intelligent Features to optimize your marketing efforts.</p>
        </div>
      </div>
      <FeatureCards />
    </div>
  )
}

export default Features
