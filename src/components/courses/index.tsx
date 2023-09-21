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
      <div className="courses-container grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-col-1 gap-4 p-3 ">
        {courses.length !== 0 ? (
          courses.map(course => {
            return <Coursecomponent key={course.id} {...course} />
          })
        ) : (
          <Loading />
        )}
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
    <div className="shadow-lg rounded-md border-2 py-6 px-3">
      <h3
        className=" text-xl antialiased  font-semibold hover:font-bold"
        style={{ marginBottom: 5, textAlign: 'center' }}
      >
        {title}
      </h3>
      <h5 style={{ marginBottom: 5, textAlign: 'center' }}>{description}</h5>
      <img src={imageLink} style={{ width: '100%', height: '70%' }} />

      <h5 style={{ marginBottom: 5, textAlign: 'center' }}>${price}</h5>
      <button
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-bold rounded-lg text-sm px-5 py-2.5  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full"
        style={{
          alignSelf: 'center',
          marginTop: 5,
          marginBottom: 5
        }}
      >
        Edit
      </button>
    </div>
  )
}
