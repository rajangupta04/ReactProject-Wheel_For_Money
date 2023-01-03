import { Link } from "react-router-dom";

const Signup = () => {

    let handleSubmit = (e)=> {
        e.prevetDefault();
        alert("Account Created Successfully")
      
    }

  return (
    <div className="signup"> 
        <h1>Wheel For Money </h1>
        <form onSubmit={handleSubmit}>
          <h2>Create a new account</h2>

            <label>First Name:</label> <input type="text" placeholder="First Name"/> 
           <label>Last Name:</label>  <input type="text" placeholder="Last Name" />
            <label>Email:</label>      <input type="email" placeholder="Email" />
            <label>Password:</label>   <input type="text" placeholder="Password" />
            <label>Confirm Password:</label>  <input type="text" placeholder="Confirm Password" />
            
            <input type="submit" value="Create Account" />
            <br/ >
            <div className="login-link"> <Link to="/Login.jsx"> Already have an account?  </Link> </div>
            
        </form>
    </div>
  );
}

export default Signup;
