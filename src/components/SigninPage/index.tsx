'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { SigninParams } from '@/types/zodTypes'
import { onSubmit } from '@/libs/onSigninRequest'
import Appbar from '../AppBar'
import { signIn } from 'next-auth/react'

export default function SignIn() {
  const [user, setUser] = React.useState<SigninParams>({
    username: '',
    password: ''
  })

  const [buttonDisabled, setbuttonDisabled] = React.useState(false)
  function loginWithGoogle() {
    signIn('google', { callbackUrl: '/', redirect: false })
  }

  useEffect(() => {
    if (user.username.length > 0 && user.password.length > 0) {
      setbuttonDisabled(true)
    } else {
      setbuttonDisabled(false)
    }
  }, [user])

  return (
    <>
      <Appbar />
      <div className="signin-container flex justify-center min-h-screen ">
        <div className="mt-[100px] flex items-center flex-col">
          <h2 className="text-2xl mb-5">Welcome Back | Sign-in Below</h2>
          <div className="shadow-lg rounded-md border-2  p-10 flex flex-col lg:w-[400px]">
            <input
              type="text"
              placeholder="Email"
              className="p-3 border-slate-500 border-2 rounded-md mb-3"
              onChange={e => {
                setUser({ ...user, username: e.target.value })
              }}
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 border-slate-500 border-2 rounded-md mb-3"
              onChange={e => {
                setUser({ ...user, password: e.target.value })
              }}
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                onSubmit(user)
              }}
            >
              {buttonDisabled ? 'SIGNIN' : 'NO SIGNIN'}
            </button>
            <h2 className="self-center py-5  px-10 text-xl">or</h2>
            <button
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-bold rounded-lg text-sm px-5 py-2.5  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full"
              onClick={loginWithGoogle}
            >
              Google Signin
            </button>
            <Link href={'/signup'} className="mt-5">
              To Register/Signup
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
