import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Provider from '@/components/provider'
import { Toaster } from 'react-hot-toast'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Toaster />
          <div className="mx-auto w-100 min-h-full">{children}</div>
        </Provider>
      </body>
    </html>
  )
}
