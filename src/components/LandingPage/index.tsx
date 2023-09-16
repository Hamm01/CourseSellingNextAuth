'use client'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useRecoilValue } from 'recoil'
import { userEmailState } from '@/store/selectors/userEmail'

function LandingPage() {
  const router = useRouter()
  const userEmail = useRecoilValue(userEmailState)
  return (
    <main className="">
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center items-center">
          <div>
            <h2 className="text-4xl font-normal">Course Selling App Admin</h2>
            <h3 className="text-xl font-normal mt-2">
              A place to learn, earn and grow
            </h3>
            {!userEmail && (
              <div className="btn-container mt-5">
                <button
                  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-[20px] mt"
                  onClick={() => {
                    router.push('/signup')
                  }}
                >
                  Signup
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    router.push('/signin')
                  }}
                >
                  Login
                </button>
              </div>
            )}
          </div>
        </div>
        <div className=" mt-[100px]">
          <Image
            src="/images/classroompic.jpg"
            width={546}
            height={450}
            alt="Picture of classroom"
          />
        </div>
      </div>
    </main>
  )
}

export default LandingPage
