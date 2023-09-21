import { NextRequest, NextResponse } from 'next/server'
import { courseBody } from '@/types/zodTypes'
import db from '@/dbConfig/dbPrisma'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/libs/auth'

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ msg: 'User Login Error!' }, { status: 401 })
    }

    const reqbody = await req.json()
    const parsedInput = courseBody.safeParse(reqbody)
    if (!parsedInput.success) {
      return NextResponse.json({ error: parsedInput.error }, { status: 411 })
    }
    const { title, description, price, imageLink } = parsedInput.data
    const newCourse = await db.course.create({
      data: {
        title: title,
        description: description,
        price: price,
        imageLink: imageLink
      }
    })

    return NextResponse.json(
      { msg: 'Course Created Succesfully', success: true, data: newCourse },
      { status: 201 }
    )

    // if (session?.user.username) {
    //   const userData = await db.user.findUnique({
    //     where: {
    //       username: session?.user.username
    //     }
    //   })
    //   console.log('userdata', userData)
    // }
    // if (session?.user?.email) {
    //   const userData = await db.user.findUnique({
    //     where: {
    //       email: session?.user.email
    //     }
    //   })
    //   console.log('userdata', userData)
    // }
  } catch (error) {
    return NextResponse.json({ msg: 'Some error occured' }, { status: 500 })
  }
}
