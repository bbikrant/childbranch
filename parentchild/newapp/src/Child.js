import React, { forwardRef, useImperativeHandle, useState } from 'react'

const Child=forwardRef((props,ref)=>{ 
    const[count,setcount]=useState(0)

useImperativeHandle(ref,()=>({
    inc:increment,
    dec:decrement
}))

    const decrement=()=>
    {
        setcount(count-1)
    }
    const increment=()=>{
        setcount(count+1)
    }
  return (
<>
      
        <br/>
        <div className='y1'>
            <div className='z1'>
            <button onClick={increment}>child button incr</button>
            </div>
            <div className='z4'>
            <button onClick={decrement}>child button decr</button>
        </div>
        </div>
        <h1 className='ff1'>{count}</h1> 
        
        </>
   
  )
}
)

export default Child