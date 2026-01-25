import React from 'react'

async function  page({params}){
    const {city} = await params
   
   
  return (
    <div className='min-h-screen flex justify-center items-center'> City page {city}</div>
  )
}

export default  page