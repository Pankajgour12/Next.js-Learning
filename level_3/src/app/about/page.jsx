import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
      <div className="flex min-h-screen items-center flex-col justify-center gap-14 bg-zinc-50 font-sans dark:bg-black">
        <h1>this is About Page</h1>
        <Image src={"https://images.pexels.com/photos/34861112/pexels-photo-34861112.jpeg"} alt='imgae'
        width={200}
        height={300}
        
        />
    
    </div>
   

  )
}

export default page
