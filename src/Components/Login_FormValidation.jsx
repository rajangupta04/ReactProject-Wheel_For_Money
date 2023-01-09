import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [mailid, setMailid] = useState('')
    const [password, setPassword] = useState('')
    const [mailidErr, setmailidErr] = useState('');
    const [pwdError, setPwdError] = useState('');
    const [successMsg, setSuccessMsg] = useState('')
    const mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,16}$/;

    const handlemailidChange = (e) => {
        setSuccessMsg('');
        setmailidErr('');
        setMailid(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setSuccessMsg('');
        setPwdError('');
        setPassword(e.target.value)
    }
    let handleSubmit = (e) => {
        e.preventDefault();
        if (mailid !== '') {

            if (mailRegex.test(mailid)) {
                setmailidErr('');
            }
            else {
                setmailidErr("Enter valid Mailid / Username");
            }
        }
        else {
            setmailidErr("mailid/usernamerequired");
        }

        if (password !== '') {
            if (pwdRegex.test(password)) {
                setPassword('');
            }
            else {
                setPwdError("Password must be minimum 8 characters with atleast one uppercase letter, one lower case letter,one special character and one numeric type")
            }
        }
        else {
            setPwdError("password required");
        }
    }
    let handleSuccessMsg = () => {
        if (mailid.match(mailRegex)) {
            if (password.match(pwdRegex)) {
                setSuccessMsg("");
                alert("Login Successful");
            }
        }
        else {
            alert("Login Unsuccessfull")
        }

    }

    console.log("dfdf");
    return (
        <div className="login">
            <h1> Login </h1>
            <form onSubmit={handleSubmit}>
                <input type="email text" placeholder="Mail id/Username" className="form-control custom input" onChange={handlemailidChange} value={mailid} />
                {mailidErr && <div className="error-msg">{mailidErr}</div>} <br />
                <input type="placeholder" placeholder="Password" className="form-control custom input" onChange={handlePasswordChange} value={password} />
                {pwdError && <div className="error-msg">{pwdError}</div>} <br />
                <Link to="/forgotpassword">Forgot Password?</Link>
                <button onClick={handleSuccessMsg}>Login</button>
                {/* {mailidErr && <p>enter valid email</p>}
                {pwdError && <p>Password must contain minimum characters of 8 with one Uppercase letter, one special character and number</p>} */}
            </form>
            <span>Don't have an Account? </span>
            <Link to="/signup">Create New Account</Link>

        </div>
    );
}
export default Login

