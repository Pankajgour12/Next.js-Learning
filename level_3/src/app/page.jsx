'use client'
import Link from 'next/link'
import React, { use } from 'react'
import about from '../app/about/page.jsx'
import contect from '../app/contect/page.jsx'
import courses from './courses/page.jsx'
import { useRouter } from 'next/navigation.js'

const page = () => {
  const router = useRouter()
  return (
      <div className="flex min-h-screen items-center flex-col  gap-10 justify-center bg-zinc-50 font-sans dark:bg-black">
       <h1>this is Link Navigation </h1>
      <ul className='flex gap-4 cursor-pointer' >
        
         <Link href={"/"} ><li>Home</li></Link>
         <Link href={"/about"} ><li>About</li></Link>
         <Link href={"/courses"}><li>Courses</li></Link>
         <Link href={"/contect"}><li>Contect</li></Link>
     
        
      </ul>
      <h1>This is useRouter navigation</h1>
      <ul className='flex gap-4 cursor-pointer' >
        
        <li onClick={()=>router.push("/")} >Home</li>
          <li onClick={()=>router.push("/about")} >About</li>
          <li onClick={()=>router.push("/courses")} >Courses</li>
          <li onClick={()=>router.push("/contect")} >Contect</li>

     
        
      </ul>
        

    </div>
  )
}

export default page

