'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
// import { axios } from 'axios'

const LoginPage = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  })

  const onLogin = async () => {}

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1 className='mb-8 text-xl text-blue-300'>Login</h1>
      <hr />
      <label htmlFor='username'>username: </label>
      <input
        type='text'
        id='username'
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder='username...'
        className='p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-600 text-black'
      />

      <label htmlFor='email'>email: </label>
      <input
        type='email'
        id='email'
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder='email...'
        className='p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-600 text-black'
      />

      <label htmlFor='password'>password: </label>
      <input
        type='password'
        id='password'
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder='password...'
        className='p-2 border border-gray-300 rounded-md focus:outline-none focus:border-gray-600 text-black'
      />
      <button
        className='bg-blue-500 hover:bg-blue-700 my-4 text-white font-bold py-2 px-4 rounded transition-transform ease-in-out hover:scale-110'
        onClick={onLogin}
      >
        Login Here
      </button>
      <Link className='my-4' href='/signup'>
        Sign Up Here
      </Link>
    </div>
  )
}

export default LoginPage
