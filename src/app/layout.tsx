import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import HomeFooter from './components/HomeFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Google Clone',
  description: 'Google clone created with Next js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}
      <HomeFooter/>
      </body>
    </html>
  )
}
