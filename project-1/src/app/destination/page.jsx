'use client'


import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
   const router = useRouter()       

  const destination =['bhopal','Indore','Delhi']
  return (
    <div className='min-h-screen flex justify-center items-center flex-col gap-3 '>
      <div className='text-5xl font-bold'>
         This is 
       Destination</div> 
       <div>

       </div>
       {destination.map((item,index)=>(
        <div key={index}className='font-bold text-2xl flex justify-center items-center rounded-2xl w-40 h-20 bg-white text-black hover:opacity-[0.5] transition-all duration-300'
        onClick={()=>router.push(`/destination/${item}`)}
        >
          {item}

        </div>
       ))}


       </div>
  )
}

export default page