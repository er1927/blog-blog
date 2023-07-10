import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import ProfilePicture from './components/ProfilePicture'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'A blog blog',
  description: 'Created by Elizabeth Roberts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        <ProfilePicture />
        {children}
      </body>
    </html>
  )
}
