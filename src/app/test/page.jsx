"use client"
import React, { useState } from 'react'

const page = () => {
 const [count, setCount]=useState(0)
 console.log(count)
    return (
    <div>
      <button onClick={()=>setCount((prev)=>prev+1)}>increase</button>
      <p>{count}</p>
    </div>
  )
}

export default page
