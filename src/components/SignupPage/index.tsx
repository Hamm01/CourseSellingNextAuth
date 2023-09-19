'use client'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { SignupParams } from '@/types/zodTypes'
import { onSignupRequest } from '@/libs/onSignupRequest'
import Appbar from '../AppBar'
import { useSession } from 'next-auth/react'
interface USERDataResponse {
  username: string | null | undefined
}

export default function SignUp() {
  const [user, setUser] = React.useState<SignupParams>({
    username: '',
    password: ''
  })
  const [buttonDisabled, setbuttonDisabled] = React.useState(false)
  const { data } = useSession()
  const userSession: USERDataResponse = {
    username: data?.user.username || data?.user.email
  }
  console.log(userSession)

  useEffect(() => {
    if (user.username.length > 0 && user.password.length > 0) {
      setbuttonDisabled(true)
    } else {
      setbuttonDisabled(false)
    }
  }, [user])

  return (
    <>
      <Appbar userSession={userSession} />

      <div className="signup-container flex justify-center min-h-screen ">
        <div className="mt-[100px] flex items-center flex-col">
          <h2 className="text-2xl mb-5">
            Welcome To Course Selling website | Signup below
          </h2>
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
              onClick={() => onSignupRequest(user)}
            >
              {buttonDisabled ? 'SIGNUP' : 'No SIGNUP'}
            </button>
            <Link href={'/signin'} className="mt-5">
              For Login Click here
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
