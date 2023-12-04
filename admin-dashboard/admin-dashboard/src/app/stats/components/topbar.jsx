import React from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";
export const Topbar = () => {
  return (
    <div className=' z-10  '>
      <div className='  bg-[#333333] border-[1px] border-[#FFFFFF40]  w-screen  h-max  '>
        <div className='flex flex-row items-center justify-between py-[0.5rem] pl-[1rem]'>
          <input
            placeholder='Search'
            className='rounded-md w-[450px]  h-[45px] bg-gray-500  pl-[0.5rem] text-white placeholder-white'
          />
          <div className='flex flex-row items-center justify-center relative right-[21%]  gap-4'>
            <IoMdNotificationsOutline
              size={25}
              color='white'
            />
            <div className='p-[0.5rem] rounded-full bg-blue-600 text-white'>
              HR
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
