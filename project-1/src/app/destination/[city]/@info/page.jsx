'use client'

import { useParams } from 'next/navigation'
import React from 'react'

function page(){
    const {city} = useParams()
   
  
    
  return (
    <div className=''>
        <h1>Parallel route</h1>
        <h2>{city} is the best city in India
            
        </h2>
    
    </div>

  )
}

export default page
