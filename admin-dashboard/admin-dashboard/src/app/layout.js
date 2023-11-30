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
      <body  className="flex mx-auto  w-screen bg-black overflow-x-hidden overflow-y-auto ">

      {`/${segment}` === "/null" || `/${segment}` === "/forgot-password" ? "" : <div className="fixed flex flex-row "><Sidebar/>
<Topbar/>
      </div>}
<div className={`/${segment}` === "/null" || `/${segment}` === "/forgot-password" ? "flex  w-full h-[100%]" : "  overflow-y-auto pt-[5%] pl-[10%] place-content-center  w-full flex items-center justify-center " }>
  {children}
</div>

        </body>
    </html>
  )
}
