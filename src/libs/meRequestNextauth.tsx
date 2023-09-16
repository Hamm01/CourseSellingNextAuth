import { authOptions } from './auth'
import { getServerSession } from 'next-auth'

export async function meRequestNextAuth() {
  //Function that will return the session from server and this function can used in server components
  try {
    const session = await getServerSession(authOptions)
    return session
  } catch (error: any) {
    console.error(error.message)
  }
}
