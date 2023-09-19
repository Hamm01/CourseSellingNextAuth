import { z } from 'zod'

export const signupInput = z.object({
  username: z.string().email(),
  password: z.string()
})

export const loginInput = z.object({
  username: z.string().email(),
  password: z.string()
})

export const courseBody = z.object({
  title: z.string().min(2, { message: 'Must be 2 or more characters long' }),
  description: z
    .string()
    .min(2, { message: 'Must be 2 or more characters long' }),
  price: z.number().nonnegative(),
  imageLink: z.string().url()
})

export type SignupParams = z.infer<typeof signupInput>
export type SigninParams = z.infer<typeof loginInput>
export type CourseParams = z.infer<typeof courseBody>
