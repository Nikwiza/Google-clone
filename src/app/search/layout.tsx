import '@/app/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import HomeFooter from '@/app/components/HomeFooter'
import SearchHeader from '../components/SearchHeader'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Google Clone',
  description: 'Google clone created with Next js',
}

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div>
        <SearchHeader/>
      {children}
      </div>
  )
}
