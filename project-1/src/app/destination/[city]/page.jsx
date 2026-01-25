'use client'
import { useParams } from 'next/navigation'
import React from 'react'
import bpl from '@/assets/bhopal.jpg'
import indore from '@/assets/indore.jpg'
import delhi from '@/assets/delhi.jpg'
import Image from 'next/image'



 function  page({params}){
    const {city} = useParams(params)
   
  return (
    <div className=''>{city} is the beautiful city 
    {
      city === 'bhopal' && <Image src={bpl} alt='bhopal' width={300} height={300} className='border rounded-3xl mt-6 object-cover'  />
    }
     {
      city === 'Indore' && <Image src={indore} alt='indore' width={300} height={300} className='border rounded-3xl mt-6 object-cover'  />
    }
    {
      city === 'Delhi' && <Image src={delhi} alt='Delhi' width={300} height={300} className='border rounded-3xl mt-6 object-cover'  />
    }
    
      
       
    
    </div>
  )
}

export default  page