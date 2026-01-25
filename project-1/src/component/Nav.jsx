'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Nav = () => {
   const pathname =  usePathname()
 

  return (
    <div className='fixed top-0 w-full h-16 bg-black/45 text-white flex items-center justify-between px-20 '>
        <div>📍Travels Guide</div>
        <div>
            <ul className='flex items-center justify-center gap-3'>
                <Link href='/' className={pathname=='/'?'text-blue-600':''} ><li>Home</li></Link>
                <Link href='/destination' className={pathname=='/destination'?'text-blue-600':''}><li>Destination</li></Link>
                <Link href='/contect'className={pathname=='/contect'?'text-blue-600':''}><li>contect</li> </Link>
                
                
            
            </ul>
        </div>


    </div>
  )
}

export default Nav