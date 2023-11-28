"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from './components/sidebar/sidebar'
import { useSelectedLayoutSegment } from 'next/navigation'
import { Topbar } from './components/topbar'
const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({ children }) {
  const segment = useSelectedLayoutSegment()
console.log( `/${segment}` )
  return (
    <html lang="en">
      <body  className="flex  mx-auto w-full bg-black overflow-x-hidden ">

      {`/${segment}` === "/null" || `/${segment}` === "/forgot-password" ? "" : <div className=" flex flex-row"><Sidebar/>
<Topbar/>
      </div>}

<div className={`/${segment}` === "/null" || `/${segment}` === "/forgot-password" ? "flex  w-full h-[100%]" : " overflow-x-hidden  pt-[5%] pl-[4%] pr-[5%]  w-full flex   " }>
  {children}
</div>

        </body>
    </html>
  )
}
