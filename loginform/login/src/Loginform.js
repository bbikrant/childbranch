import React, { useState } from 'react'
import validator from 'validator';
// import p from 'validator'
function Loginform() {
// const[name,setName]=useState("");
const[emailok,setemailok]=useState(false)
const[passok,setpassok]=useState(false)
const [statusbutton,setstatusbutton]=useState(true)
const validateEmail=(e)=>{
    var email=e.target.value;

    if(validator.isEmail(email)){
        setemailok(true)
    }
    
}

const validatepass=(e)=>
{
    var upper=false;
    var lower=false;
    var symbol=false;
    
    var pass=e.target.value;
    for(let p of pass)
    {
        var pattern=/[a-zA-Z0-9]+[@!#$%^&*\(\)+=-]{1,}/

        if(p==p.toLowerCase())
        lower=true;
        if(p==p.toUpperCase())
        upper=true;

        if(pattern.test(pass))
        symbol=true;

       if(upper && lower && symbol && emailok)
       {
setstatusbutton(false);
       } 
        
    }

}


return(
    <>
      <div id='t3'>
        <div id='t1'>
        <span>Enter Email</span>
        <input type="text" id='userEmail' onChange={(e)=>validateEmail(e)}></input>
        </div>
        <div id='t2'>
        <span>Enter pass</span>
        <input type="text" id='pass' onChange={(e)=>validatepass(e)}></input>
</div>
        <button id='t4' type='submit' disabled={statusbutton} >submit</button>
      </div>
      </>
    )
}
export default Loginform