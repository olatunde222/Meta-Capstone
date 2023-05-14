import React from 'react'
import './Auth.css'

const Auth = () => {

  const handleForm = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson =Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <div className='container-form'>
      <form className='auth-form' method='post' onSubmit={handleForm}>
          <h1>Sign In</h1>
          <div>
            <label htmlFor="name">Username</label> <br/>
            <input type="text" name='name' placeholder='Name' minLength={3} maxlength="25" required/>
          </div>
          <div>
            <label htmlFor="email">Email</label> <br/>
            <input type="email" name='email' placeholder='Email' pattern=".+@globex\.com" size="30" required/>
          </div>
          <div>
            <label htmlFor="password">Password</label> <br/>
            <input type="password" name='password' placeholder='Password' minlength="8" required/>
          </div>
          <a href="https://support.google.com/accounts/answer/41078?hl=en&co=GENIE.Platform%3DDesktop">Forgot Password?</a>
          <div className='btn'>
            <button type='button'>Sign Up</button>
            <button type='button'>Sign In</button>
          </div>
      </form>
  </div>
  )
}

export default Auth;