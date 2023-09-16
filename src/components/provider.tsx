'use client'
import { FC, ReactNode } from 'react'
import { RecoilRoot } from 'recoil'

interface ProviderProps {
  children: ReactNode
}

const Provider: FC<ProviderProps> = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>
}

export default Provider
