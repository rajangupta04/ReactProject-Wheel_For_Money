const Login = () => {



    let handleSubmit = (e)=>{
        e.preventDefault();
    }




    return ( 
        <div className="login">
            <h1> Login </h1>
            <form onSubmit={handleSubmit}>
                <input type="email text" placeholder="Username / mail id"/>
                <input type="placeholder" placeholder="Password"/>
                <a href="/forgot">forgot password?</a>
                <input type="submit" value="Login" />
            </form>

            <span>Don't have an Account ? </span>
            <a href="/signup">Create New Account</a>
        </div>
    );
}
export default Login
