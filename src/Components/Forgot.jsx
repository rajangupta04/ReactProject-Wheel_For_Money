import React, { useState } from 'react';
import './styles/Forgot.css';
import forgotimg from "./Images/forgot-img.jpg"
import axios from 'axios';
import {Link, useHistory } from 'react-router-dom';

function Forgot() {

    let [email,setemail] = useState("");
    let [emailErr,setemailErr]=useState("");
    let [newpass,setnewpass]=useState("");
    let [repass,setrepass]=useState("");
    let [match,setMatch]=useState(false);
    let history= useHistory();

    const mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

   let handlerepass =(e)=>{
    setrepass(e.target.value)
    if(newpass == e.target.value )
    {
      setMatch(true);
    }
    else
    {
      setMatch(false);
    }

  }

   let handlesubmit=(e)=>{
   e.preventDefault()
          console.log(email , newpass);
           axios.post(`http://localhost:9091/user/resetpswd?data=${email}&newpass=${newpass}`)
           .then(()=>{
            alert("reset password done");
            history.push("/")
          })

   }

    return (
        <div className='forgotpage' >
            <div className="forgot-img">
               <img src={forgotimg} alt="" />
            </div>
            <div className='contentBx-forgot' >
              <form className='forgot-form' onSubmit={handlesubmit} >
                 <h2>Forgot password</h2>
                 <input type="email" placeholder='Email' onChange={(e)=>setemail(e.target.value)} />
                 <input type="password" placeholder='new password' onChange={(e)=>setnewpass(e.target.value)} />
                 <input type="text" placeholder='re-enter password' onChange={handlerepass} />
                  { match==true && repass.length>0 && <font color="green"> correct password </font> }
                  { match==false && repass.length>0 && <font color="red"> in-correct password </font> }
                  {emailErr && <div className="error-msg">{emailErr}</div>}       
                 <button  className='btn-fogot'>Submit</button> <br/><br/>  
                <p> <Link to="/"> Back to login</Link></p>
              </form>
              
            </div>        
        </div>
    )
}

export default Forgot
