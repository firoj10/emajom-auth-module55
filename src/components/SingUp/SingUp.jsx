import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const SingUp = () => {
    const [error, setError]= useState('')
const{createUser}= useContext(AuthContext);


const handleSingUp = event =>{
event.preventDefault()
const form = event.target
const email = form.email.value
const password = form.password.value
const confirm = form.confirm.value
console.log(email,password, confirm)
setError('');
if (password !== confirm){
    setError('Your Password Did not Match')
    return
}else if(password.length <6){
    setError('Password must be 8 cherectar longer');
    return
}

createUser(email,password)
.then((result) => {
    const loggedUser = result.user;
    console.log(loggedUser)
  
  })
  .catch((error) => {
    const errorMessage = error.message;
    setError(errorMessage)
  });
    }
    return (
        <div className='form-container'>
        <h2 className='form-title'>Login</h2>
        <form  onSubmit={handleSingUp}>
            <div className='form-control'>
                <label htmlFor="email">Email</label>
                <input type="text" name='email' id=''  required/>
            </div>
            <div className='form-control'>
                <label htmlFor="password">Password</label>
                <input type="password" name='password' id=''  required/>
            </div>
            <div className='form-control'>
                <label htmlFor="confirm">Confirm Password</label>
                <input type="password" name='confirm' id=''  required/>
            </div>
            <input type="submit" className='btn-submit' value="login" />
        </form>
     <small>Alrady have an account <Link to="/login">Login</Link></small>
     <p className='error-text'>{error}</p>
    </div>
    );
};

export default SingUp;