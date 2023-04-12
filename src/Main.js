import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import styled from "styled-components";
function Main() {
  return (
    
    <div className='body'>
       <nav>
      <header className='z8'>
          <ul className='z9'>
             <Link to="home" className='z10'>Home</Link> 
              <Link to="login" className='z10'>Login</Link>
         </ul>
       </header>  
        </nav>
         <Outlet />
  </div>
         )
}

export default Main