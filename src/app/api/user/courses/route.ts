import { NextRequest, NextResponse } from 'next/server'
import { courseBody } from '@/types/zodTypes'
import db from '@/dbConfig/dbPrisma'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/libs/auth'

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ msg: 'User Login Error!' }, { status: 401 })
    }
    const courses = await db.course.findMany()

    return NextResponse.json({ courses: courses }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ msg: 'Some error occured' }, { status: 500 })
  }
}
