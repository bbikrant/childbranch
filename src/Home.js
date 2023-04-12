import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
function Home() {
  const[count,setcount]=useState([])
  // const[newcount,setnewcount]=useState([])


  useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(r=>{
        let ab=r.data;
        console.log(ab);
        ab.sort((a,b)=>{

          // console.log(a.name,b.name);
        if(a.name>b.name)
        return 1;
         if (a.name<b.name)
        return -1;
        
        return 0; 
        })
        setcount(ab)
        // console.log("count is "+count[0].name)
         
        // setnewcount(count)
        // setnewcount(count)
          
          
          // console.log("count is "+count[0].name)
      })
      .catch(err=>{
          console.log('error in finding data')
      })
 
  },[])
  return (
    <div>
      
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
        
          {count.map((m) => (
            <tr border="1">
            <td>{m.name}</td></tr>
          ))}
        
        </tbody>
        
      </table>
 
  </div>
  )
}

export default Home

  



