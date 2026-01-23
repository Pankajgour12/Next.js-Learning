import React from 'react'

async function page({params}){
    const {username} = await params

  return (
    <div> 
        <h1> 
            this is profile page of {username}
        </h1>
      
    </div>
  )
}

export default page
