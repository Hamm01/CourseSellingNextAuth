'use client'
import { FC, ReactNode } from 'react'
import { RecoilRoot } from 'recoil'
import { SessionProvider } from 'next-auth/react'

interface ProviderProps {
  children: ReactNode
}

const Provider: FC<ProviderProps> = ({ children }) => {
  return (
    <SessionProvider>
      <RecoilRoot>{children}</RecoilRoot>
    </SessionProvider>
  )
}

export default Provider
