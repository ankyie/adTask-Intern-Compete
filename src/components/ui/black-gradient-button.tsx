import { cn } from '@/lib/utils'
import React from 'react'

const BlackButton = ({className = "", children = "Gradient"}) => {
  return (
    <button className={cn("px-5 py-2 rounded-full bg-gradient-to-r from-[#282828] from-0% to-[#000000] to-60% text-white text-xs border border-white/10", className)}>
        {children}
    </button>
  )
}

export default BlackButton
