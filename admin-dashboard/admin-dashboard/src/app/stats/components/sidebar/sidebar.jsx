"use client"
import React from 'react'
import { useSelectedLayoutSegment } from 'next/navigation'
import Link from 'next/link'
import { MdOutlineDashboard } from "react-icons/md";
import { IoStatsChartSharp } from "react-icons/io5";
import { MdOndemandVideo } from "react-icons/md";
import { MdOutlineEventAvailable } from "react-icons/md";
import { Input } from 'postcss';
import { IoSettingsSharp } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import Stats from '../../stats';

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
    icon : <IoSettingsSharp/>,
    current : `/${segment}` === "/settings" ? true : false
},
{
    name : "Log out",
    href : "/logout",
    icon : < CiLogin />,
    current :  `/${segment}` === "/logout" ? true : false
},
]



   const sidebaroptions = [
     {
       name: 'Stats',
       href: '/stats',
       icon: <IoStatsChartSharp />,
       current: `/${segment}` === '/stats' ? true : false,
     },
     {
       name: 'Dashboard',
       href: '/stats/dashboard',
       icon: <MdOutlineDashboard />,
       current: `/${segment}` === '/stats/dashboard' ? true : false,
     },
     {
       name: 'Shorts',
       href: '/stats/shorts',
       icon: <MdOndemandVideo />,
       current: `/${segment}` === '/stats/shorts' ? true : false,
     },
     {
       name: 'Events',
       href: '/stats/events',
       icon: <MdOutlineEventAvailable />,
       current: `/${segment}` === '/stats/events' ? true : false,
     },
     {
       name: 'Photos',
       href: '/stats/photos',
       icon: <MdOutlineDashboard />,
       current: `/${segment}` === '/stats/photos' ? true : false,
     },
     {
       name: 'movies',
       href: '/stats/movies',
       icon: <MdOutlineDashboard />,
       current: `/${segment}` === '/stats/movies' ? true : false,
     },
     {
       name: 'Profile',
       href: '/stats/profile',
       icon: <MdOutlineDashboard />,
       current: `/${segment}` === '/stats/profile' ? true : false,
     },
     {
       name: 'Location',
       href: '/stats/location',
       icon: <MdOutlineDashboard />,
       current: `/${segment}` === '/stats/location' ? true : false,
     },
     {
       name: 'Offer',
       href: '/stats/offer',
       icon: <MdOutlineDashboard />,
       current: `/${segment}` === '/stats/offer' ? true : false,
     },
     {
       name: 'Partners',
       href: '/stats/partners',
       icon: <MdOutlineDashboard />,
       current: `/${segment}` === '/stats/partners' ? true : false,
     },
     {
       name: 'Jobs',
       href: '/stats/jobs',
       icon: <MdOutlineDashboard />,
       current: `/${segment}` === '/stats/jobs' ? true : false,
     },
     {
       name: 'Order',
       href: '/stats/order',
       icon: <MdOutlineDashboard />,
       current: `/${segment}` === '/stats/order' ? true : false,
     },
   ];
console.log(segment)
  return (
    <div className=' w-full  '>
      <div className=' border-[1px] border-[#FFFFFF40]'>
        <div className='   grid w-full h-[1024px] '>
          <div className='flex flex-col  overflow-y-auto bg-[#333333] gap-4 py-7 pb-4 '>
            <h2 className='text-[34px] font-bold text-blue-500 pl-[1rem] pb-4'>
              FAME UP
            </h2>
            {sidebaroptions.map((side) => (
              <li
                key={side.name}
                className='list-none flex flex-col py-[0.2rem]'>
                <Link
                  href={side.href}
                  className=''>
                  <div
                    className={classNames(
                      side.current
                        ? 'flex flex-row items-center gap-3 pl-[1rem] cursor-pointer text-blue-500 border-l-[4px] border-blue-500 duration-300 ease-in '
                        : '  border-l-[4px] border-transparent duration-300 ease-in  flex flex-row items-center gap-3 pl-[1rem] cursor-pointer text-gray-200'
                    )}>
                    {side.icon}
                    {side.name}
                  </div>
                </Link>
              </li>
            ))}
            <div className='pt-4'>
              {sidebaroptions2.map((side) => (
                <li
                  key={side.name}
                  className='list-none flex flex-col py-[0.2rem]'>
                  <Link
                    href={side.href}
                    className=''>
                    <div
                      className={classNames(
                        side.current
                          ? 'flex flex-row items-center gap-3 pl-[1rem] cursor-pointer text-blue-500 border-l-[4px] border-blue-500 duration-300 ease-in '
                          : '  border-l-[4px] border-transparent duration-300 ease-in  flex flex-row items-center gap-3 pl-[1rem] cursor-pointer text-gray-200'
                      )}>
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
    </div>
  );
}

export default Sidebar