"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from './components/sidebar/sidebar'
import { useSelectedLayoutSegment } from 'next/navigation'
const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({ children }) {
  const segment = useSelectedLayoutSegment()
console.log( `/${segment}` )
  return (
    <html lang="en">
      <body  className="flex mx-auto w-full">
      {`/${segment}` === "/null" || `/${segment}` === "/forgot-password" ? "" : <Sidebar/>}
<div className=" flex pt-[5rem] pl-[4rem]  w-full">
  {children}
</div>

        </body>
    </html>
  )
}