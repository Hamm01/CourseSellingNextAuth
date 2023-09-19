'use client'
import Appbar from '../AppBar'
import { CourseParams } from '@/types/zodTypes'
import { AddCourseRequest } from '@/libs/onAddCourseRequest'

import React from 'react'
import { useSession } from 'next-auth/react'

interface USERDataResponse {
  username: string | null | undefined
}
export default function AddCourse() {
  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [price, setPrice] = React.useState(0)
  const [imageLink, setImageLink] = React.useState('')
  const { data } = useSession()

  const userSession: USERDataResponse = {
    username: data?.user.username || data?.user.email
  }

  const courseDetail: CourseParams = {
    title: title,
    description: description,
    price: price,
    imageLink: imageLink
  }

  return (
    <>
      <Appbar userSession={userSession} />
      <div className="add-courses-container flex justify-center min-h-screen ">
        <div className="mt-[100px] flex items-center flex-col">
          <h2 className="text-2xl mb-5">Adding New Course Details</h2>
          <div className="shadow-lg rounded-md border-2  p-10 flex flex-col lg:w-[400px]">
            <input
              type="text"
              placeholder="Title"
              className="p-3 border-slate-500 border-2 rounded-md mb-3"
              onChange={e => {
                setTitle(e.target.value)
              }}
            />
            <input
              type="text"
              placeholder="Description"
              className="p-3 border-slate-500 border-2 rounded-md mb-3"
              onChange={e => {
                setDescription(e.target.value)
              }}
            />
            <input
              type="text"
              placeholder="Price"
              className="p-3 border-slate-500 border-2 rounded-md mb-3"
              onChange={e => {
                setPrice(parseInt(e.target.value))
              }}
            />
            <input
              type="text"
              placeholder="Imagelink"
              className="p-3 border-slate-500 border-2 rounded-md mb-3"
              onChange={e => {
                setImageLink(e.target.value)
              }}
            />

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => AddCourseRequest(courseDetail)}
            >
              AddCourse
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
