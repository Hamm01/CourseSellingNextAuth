'use client'
import Appbar from '../AppBar'
import React, { useEffect } from 'react'
import axios from 'axios'
import { useSession } from 'next-auth/react'

interface USERDataResponse {
  username: string | null | undefined
}
interface CourseType {
  id: string
  title: string
  description: string
  price: number
  imageLink: string
  published: boolean
}

export function Courses() {
  const [courses, setCourses] = React.useState<CourseType[]>([])
  const { data } = useSession()
  const userSession: USERDataResponse = {
    username: data?.user.username || data?.user.email
  }
  useEffect(() => {
    init()
  }, [])
  async function init() {
    const response = await axios.get('/api/user/courses')
    if (response.data) {
      setCourses(response.data.courses)
    }
  }
  return (
    <>
      <Appbar userSession={userSession} />
      <div className="bg-gray-100 w-full mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4 text-center">Our Courses</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2 ">
          {courses.length !== 0 ? (
            courses.map(course => {
              return <Coursecomponent key={course.id} {...course} />
            })
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </>
  )
}

function Loading() {
  return <div>Loading Courses...</div>
}

export function Coursecomponent(props: CourseType) {
  const { title, description, price, imageLink } = props
  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <img src={imageLink} className="w-full h-52 object-cover rounded" />
      <h2
        className="text-lg font-semibold mt-2"
        style={{ marginBottom: 5, textAlign: 'center' }}
      >
        {title}
      </h2>
      <p className="text-gray-600 mt-2">{description}</p>

      <p className="text-green-600 font-semibold mt-2">${price}</p>
      <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-600">
        Edit
      </button>
    </div>
  )
}
