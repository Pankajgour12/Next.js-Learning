import React from 'react'

function cityLayout({children,info}) {
  return (
    <div className='flex text-2xl justify-between py-30 px-20 p-4'>
       {children}
       {info} 
        
        
    </div>
  )
}

export default cityLayout