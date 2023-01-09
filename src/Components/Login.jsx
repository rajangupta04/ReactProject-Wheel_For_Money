// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Home from "./Home";
// import images from "./Images/login1.svg"
// import './styles/login.css'

// const Login = () => {
//     const [username, setuser] = useState('')
//     const [password, setPassword] = useState('');
//     const [userdetails, setUserDetails] = useState(null);
    
//     let handleLogin = ()=>{
//                             axios.get("http://localhost:9091/user/login", { headers : { user: username , password : password } })
//                             .then((response)=>{console.log(response.data); setUserDetails(response.data)})
//                             .catch((error)=>{console.log(error);})
                        
//                              console.log("login");                          
//                         }

//                         let handleuser=(e)=>{
//                             setuser(e.target.value); 
//                          }

//                          let handlePsw=(e)=>{
//                              setPassword(e.target.value);  
//                          }

//                          let handleSubmit=(e)=>{
//                             console.log("submited");
//                           e.preventDefault();}
      
//     return ( 
//         <>
//           {userdetails==null && <div className="loginpage">
//             <div className="login-img">
//               <img src={images} alt="no image" />
//             </div>
//             <div className="login-contentBx">
//               <form className="login-form" onSubmit={handleSubmit}>
//                 <h1>Login </h1>
//                 <input type="email text" placeholder="Username" onChange={handleuser} value={username}/> 
//                 <input type="placeholder" placeholder="Enter your password" onChange={handlePsw} value={password}/>              
//                 <button  className="btn-login" onClick={ handleLogin}>Submit</button>
//                 <Link to="/forgot" className="forgotp"><p>Forgot Password?</p></Link>                       
//                 <div className="login-remember">
//                   <span>Don't have an Account ? </span> <Link to="/signup"className="createaccount">Create New Account</Link> 
//                 </div>    
//               </form>
//             </div>
//         </div>}

//         {userdetails!=null && <Home userdetails={userdetails} setUserDetails={setUserDetails}/>   }
//       </>
//      )
// }
// export default Login;

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import images from "./Images/login1.svg"
import './styles/login.css'

const Login = () => {
    const [username, setuser] = useState('')
    const [password, setPassword] = useState('');
    const [userdetails, setUserDetails] = useState(null);
    const [usernameErr, setUsernameErr] = useState('');
    const [pwdError, setPwdError] = useState('');
    const [successMsg, setSuccessMsg] = useState('')
    const usernameRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,16}$/;
    
    let handleLogin = ()=>{
                            axios.get("http://localhost:9091/user/login", { headers : { user: username , password : password } })
                            .then((response)=>{console.log(response.data); setUserDetails(response.data)})
                            .catch((error)=>{console.log(error);})
                        
                             console.log("login");                          
                        }

    let handleuserChange=(e)=>{
        setSuccessMsg('');
        setUsernameErr('');
        setuser(e.target.value); 
      }

    let handlePswChange=(e)=>{
        setSuccessMsg('');
        setPwdError('');
        setPassword(e.target.value);  
      }

    let handleSubmit=(e)=>{
        console.log("submited");
        e.preventDefault();
        if (username !== '') {
              if (usernameRegex.test(username)) {
              setUsernameErr('');
               }
               else {
                  setUsernameErr(<font color="red">Enter valid Username</font>);
               }
            }
        else {
              setUsernameErr(<font color="red">username required</font>);
             }     
              if (password !== '') {
                    if (passwordRegex.test(password)) {
                        setPassword('');
                        }
                    else {
                         setPwdError(<font color="red">Enter a valid password</font>)
                        }
                }
              else {
                   setPwdError(<font color="red">password required </font>);
                   }
      }
    let handleSuccessMsg = () => {
        if (username.match(usernameRegex)) {
            if (password.match(pwdRegex)) {
                setSuccessMsg("");
                alert("Login Successful");
            }
        }
        else {
              alert("Login Unsuccessfull")
             }     
      }            
      
    return ( 
        <>
          {userdetails==null && <div className="loginpage">
            <div className="login-img">
              <img src={images} alt="no image" />
            </div>
            <div className="login-contentBx">
              <form className="login-form" onSubmit={handleSubmit}>
                <h1> Login </h1>
                <input type="email text" placeholder="Username" className="form-control custom input" onChange={handleuserChange} value={username}/> 
                {usernameErr && <div className="error-msg">{usernameErr}</div>}
                <input type="placeholder" placeholder="Enter your password" className="form-control custom input" onChange={handlePswChange} value={password}/>              
                {pwdError && <div className="error-msg">{pwdError}</div>}
                <Link to="/forgot" className="forgotp"><p>Forgot Password?</p></Link>                       
                <button  className="btn-login" onClick={ handleLogin}>Submit</button>
                <div className="login-remember">
                  <span>Don't have an Account ? </span> <Link to="/signup"className="createaccount">Create New Account</Link> 
                </div>    
              </form>
            </div>
        </div>}

        {userdetails!=null && <Home userdetails={userdetails} setUserDetails={setUserDetails}/>   }
      </>
     )
}
export default Login;



