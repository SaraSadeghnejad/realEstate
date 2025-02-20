import React from 'react'
import { Link } from 'react-router'

const SignUp = () => {
  return (
    <div className='mt-3 mx-auto max-w-lg'>
      <h1 className='text-center text-3xl font-bold'>Sign Up</h1>
      <form className='flex flex-col gap-3 mx-auto mt-4'>
        <input type='text' className='border rounded-lg p-3' placeholder='Username' id='Username'/>
        <input type='email' className='border rounded-lg p-3' placeholder='Email' id='email'/>
        <input type='password'className='border rounded-lg p-3' placeholder='Password' id='Password'/>
        <button className='bg-slate-600 rounded-lg p-3 text-center text-white hover:opacity-95 disabled:opacity-80'>SIGN UP</button>
      </form>
      <div className='mt-3 flex gap-2'>
        <p>Have an Account?</p>
        <Link to='/sign-in' className='text-blue-600'>Sign in</Link>
      </div>
    </div>
  )
}

export default SignUp