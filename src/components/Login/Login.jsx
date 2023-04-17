import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const [error, setError]= useState('')
    const [show, setShow] = useState(false)

    const {singIn}= useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSingin = event =>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email,password)


        singIn(email, password)
        .then((result) => {
            const loggerSingIn = result.user;
            console.log(loggerSingIn)
            form.reset()
            navigate(from, {replace: true})
       
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
          })
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSingin}>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="text" name='email' id=''  required/>
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    
                    <input type={show ? "text" : "password"} name='password' id=''  required/>
                <p onClick={()=> setShow(!show)}>
                    <small>
                        {
                           show ? <span>hide password</span> :<span>show password</span>
                        }
                    </small>
                </p>
                </div>
                <input type="submit" className='btn-submit' value="login" />
            </form>
            <small>New to Ema-john? <Link to="/singup">Create New Account</Link></small>
        </div>
    );
};

export default Login;