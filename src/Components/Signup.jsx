import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles/Signup.css';
import img from './Images/login.png';
import axios from 'axios';


function Signup() {
  let [firstname, setfirstname] = useState("");
  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");
  let history = useHistory();

  let fname = (fname) => setfirstname(fname.target.value);
  let mail = (mail) => setemail(mail.target.value);
  let psw = (psw) => setpassword(psw.target.value);

  const register =()=>{
     axios.post(" http://localhost:9091/user/signUp",
     {
      username:firstname,
      password:password,
      email:email

     }).then((res)=>{
      console.log(res);
      history.push("/")

     })
  }
  let handlesubmit = (e) => {
    e.preventDefault()
    if (firstname.length < 3) {
    }
    alert("submited")
    history.push("/")
  }
  return (
    <div>
      <div className='signup'>
        <div className='img-signup' >
          <img src={img} alt="" />
        </div>
        <div className='content-box-signup'>
            <div className="sign-form">
              <h2>Create your Account</h2>
                <form className='' onSubmit={handlesubmit}>
                  <input type="text"  placeholder='Username' onChange={fname} />
                  <input type="password"  placeholder='Password' onChange={psw} />
                  <input type="email"   placeholder='Email' onChange={mail} />
                  <button className='btn-signup'  onClick={register}>Submit</button>
                </form>
                <p> <span>Already have an account ?</span><Link to="/"> Sign in</Link></p>
              </div>
        </div>
      </div>
    </div>)
}
export default Signup;