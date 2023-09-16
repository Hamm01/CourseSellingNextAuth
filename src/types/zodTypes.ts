import { z } from 'zod'

export const signupInput = z.object({
  username: z.string().email(),
  password: z.string()
})

export const loginInput = z.object({
  username: z.string().email(),
  password: z.string()
})

export type SignupParams = z.infer<typeof signupInput>
export type SigninParams = z.infer<typeof loginInput>
