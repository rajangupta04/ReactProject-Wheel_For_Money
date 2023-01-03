import React from "react";
import { Link } from "react-router-dom";
import imgage from '../components/signup_img.svg'


const Signup = () => {

    let handleSubmit = (e)=> {
        e.prevetDefault();
        alert("Account Created Successfully")
      
    }

  return (
    
    <div className="signup"> 
        {/* <h2>Wheel For Money </h2> */}
          <div className="img">
            <img src={imgage} alt="No image found" width="460px" height="520px"/>
          </div>

          <div className="form">
              <form onSubmit={handleSubmit}>
                <h1>Create a new account</h1>
                <div className="form_input">
                    <input type="text" placeholder="First Name"/> 
                    <input type="text" placeholder="Last Name" />
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Password" />
                    <input type="text" placeholder="Confirm Password" /> <br/>
                    <input type="submit" value="Create Account" />
                    <br/ >
                </div>
                <Link to="/Login.jsx"> <h3> Already have an account? </h3> </Link> 
              </form>
          </div>
    </div>
  );
}

export default Signup;
