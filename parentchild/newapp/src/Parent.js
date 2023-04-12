import React, { useRef } from 'react'
import Child from './Child'

function Parent() {
    const r=useRef()
  return (
    <div>
        <Child ref={r}/>
        <div className='z2'>
        <button onClick={()=>r.current.inc()}>parent button incr</button>
        </div>
        <div className='z3'>
        <button onClick={()=>r.current.dec()}>parent button decr</button>
        </div>
    </div>
  )
}

export default Parent