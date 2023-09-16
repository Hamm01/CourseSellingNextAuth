import { NextRequest, NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'
import { signupInput } from '@/types/zodTypes'
import db from '@/dbConfig/dbPrisma' //db client for prisma connection to db

export async function POST(req: NextRequest) {
  try {
    const reqbody = await req.json()
    // validation the inputs from request using Zod validation
    const parsedInput = signupInput.safeParse(reqbody)

    if (!parsedInput.success) {
      return NextResponse.json({ error: parsedInput.error }, { status: 411 })
    }
    const { username, password } = parsedInput.data

    //Checking that Username exists or not -> using prisma client
    const existingUser = await db.user.findUnique({
      where: { username: username }
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'Username already Exists' },
        { status: 409 }
      )
    }

    // Creating password encrypted to save into database
    const salt = await bcryptjs.genSalt(10)
    const hashPassowrd = await bcryptjs.hash(password, salt)

    // Saving the username and encrypted password into database

    const newUser = await db.user.create({
      data: { username: username, password: hashPassowrd }
    })

    console.log(newUser)
    return NextResponse.json(
      {
        message: 'User created successfully',
        success: true,
        data: {
          username: newUser.username,
          id: newUser.id
        }
      },
      { status: 200 }
    )
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
