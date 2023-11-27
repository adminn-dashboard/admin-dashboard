"use client"
import React from 'react'
import { useSelectedLayoutSegment } from 'next/navigation'
import Link from 'next/link'
import { MdOutlineDashboard } from "react-icons/md";
import { IoStatsChartSharp } from "react-icons/io5";
import { MdOndemandVideo } from "react-icons/md";
import { MdOutlineEventAvailable } from "react-icons/md";
import { Input } from 'postcss';

function classNames(...classes) {
return classes.filter(Boolean).join('')
}


const Sidebar = ({children}) => {
  const segment = useSelectedLayoutSegment()
console.log(segment)

const sidebaroptions2 =[
  {
    name : "Settings",
    href : "/settings",
    icon : <IoStatsChartSharp/>,
    current : `/${segment}` === "/settings" ? true : false
},
{
    name : "Dashboard",
    href : "/dashboard",
    icon : <MdOutlineDashboard />,
    current :  `/${segment}` === "/dashboard" ? true : false
},
]



   const sidebaroptions =[
    {
        name : "Stats",
        href : "/stats",
        icon : <IoStatsChartSharp/>,
        current : `/${segment}` === "/stats" ? true : false
    },
    {
        name : "Dashboard",
        href : "/dashboard",
        icon : <MdOutlineDashboard />,
        current :  `/${segment}` === "/dashboard" ? true : false
    },
    {
        name : "Shorts",
        href : "/shorts",
        icon : <MdOndemandVideo />,
        current :  `/${segment}` === "/shorts" ? true : false
    },
    {
        name : "Events",
        href : "/events",
        icon : < MdOutlineEventAvailable />,
        current :  `/${segment}` === "/events" ? true : false
    },
    {
        name : "Photos",
        href : "/photos",
        icon : <MdOutlineDashboard />,
        current :  `/${segment}` === "/photos" ? true : false
    },
    {
        name : "movies",
        href : "/movies",
        icon : <MdOutlineDashboard />,
        current :  `/${segment}` === "/movies" ? true : false
    },
    {
        name : "Profile",
        href : "/profile",
        icon : <MdOutlineDashboard />,
        current :  `/${segment}` === "/profile" ? true : false
    },
    {
        name : "Location",
        href : "/location",
        icon : <MdOutlineDashboard />,
        current :  `/${segment}` === "/location" ? true : false
    },
    {
        name : "Offer",
        href : "/offer",
        icon : <MdOutlineDashboard />,
        current :  `/${segment}` === "/offer" ? true : false
    },
    {
        name : "Partners",
        href : "/partners",
        icon : <MdOutlineDashboard />,
        current :  `/${segment}` === "/partners" ? true : false
    },
    {
        name : "Jobs",
        href : "/jobs",
        icon : <MdOutlineDashboard />,
        current :  `/${segment}` === "/jobs" ? true : false
    },
    {
        name : "Order",
        href : "/order",
        icon : <MdOutlineDashboard />,
        current :  `/${segment}` === "/order" ? true : false
    },
  ]
console.log(segment)
  return (
    <div className="flex flex-row " >
      <div className= "border-[1px] border-gray-300">
      <div className="   flex flex-col w-72 h-max  ">
<div className="flex flex-col  overflow-y-auto bg-gray-800 gap-4 py-7 pb-4 ">
  <h2 className="text-[34px] font-bold text-blue-500 pl-[1rem] pb-4" >FAME UP</h2>
{sidebaroptions.map((side) =>(
  <li key={side.name} className="list-none flex flex-col py-[0.5rem]">
<Link href={side.href} className="">
  <div className={classNames(side.current ? "flex flex-row items-center gap-3 pl-[1rem] cursor-pointer text-blue-500 border-l-[4px] border-blue-500 duration-300 ease-in " : "  border-l-[4px] border-transparent duration-300 ease-in  flex flex-row items-center gap-3 pl-[1rem] cursor-pointer text-gray-200")}>
  {side.icon}
{side.name}
  </div>
</Link>
  </li>
))}
</div>
</div>
      </div>
     
    </div>
  )
}

export default Sidebar