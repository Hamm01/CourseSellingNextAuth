import toast from 'react-hot-toast'
import { SigninParams } from '@/types/zodTypes'
import { signIn } from 'next-auth/react'

export const onSubmit = async (user: SigninParams) => {
  // This function onsubmit for signin using next/auth signin credentials
  try {
    console.log({ ...user })
    const loginInput = {
      username: user.username,
      password: user.password,
      callbackUrl: '/',
      redirect: false
    }
    const signinData = await signIn('credentials', loginInput)
    if (signinData?.error) {
      throw new Error(signinData.error)
    }
    toast.success('Login Succesful')
    window.location.href = '/'
  } catch (error: any) {
    console.log('signin failed', error.message)
    toast.error(error.message)
  }
}
