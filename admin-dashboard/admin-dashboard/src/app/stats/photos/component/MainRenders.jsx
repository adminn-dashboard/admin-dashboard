import Image from 'next/image';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
function MainRenders({
  title,
  subtitle,
  images,
  alts,
  source,
  intro,
  time,
  states,
  tags,
  smallimage,
  firstheader,
  secondheader,
  content,
  fullname,
  email,
}) {
  return (
    <div>
      <div className='flex items-center gap-3 w-10/12 m-auto'>
        <h1 className=' font-semibold text-2xl text-[#FFFFFFBF]'>{title}</h1>
        <div className='flex'>
          <IoIosArrowForward color='#FFFFFF' />
          <IoIosArrowForward color='#FFFFFF' />
        </div>
        <h1 className=' font-semibold text-2xl text-[#FFFFFF]'>
          {subtitle}
        </h1>
      </div>
      <div className='grid justify-center mt-5'>
        <Image
          width={1121}
          height={458}
          src={images}
          alt={alts}
        />
      </div>
      <div className=' mt-10  h-[158px] bg-[#333333] rounded-lg w-10/12 m-auto border border-[#FFFFFF26]'>
        <div className='grid grid-cols-5  h-full items-center w-11/12 m-auto'>
          <div className=' text-[#FFFFFF] col-span-2 gap-y-1 border-r border-r-[#FFFFFF40] items-center'>
            <h1 className=' text-xl font-semibold'>{subtitle}</h1>
            <h1 className=' text-lg'>{source}</h1>
            <h1 className=' text-lg'>
              {intro}
            </h1>
          </div>
          <div className='col-span-3'>
            <div className='flex justify-between items-center w-11/12 m-auto'>
              <div>
                <h1 className=' text-[#FFFFFF] text-lg'>{time}</h1>
                <h1 className=' text-[#938BE7] text-lg'>{states}</h1>
              </div>
              <div className='flex gap-5'>
                <button className='border rounded-2xl p-2 w-[147px] border-[#FFFFFF40]'>
                  <h1 className='text-xl text-[#FFFFFFBF]'>Reject</h1>
                </button>
                <button className='border rounded-2xl p-2 w-[147px] border-[#FFFFFF40] bg-[#938BE7]'>
                  <h1 className='text-xl text-[#FFFFFF]'>Approve</h1>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-10/12 m-auto mt-10 flex gap-x-10'>
        {tags.map((item)=>{
          return (
            <div key={item.id} className=' w-[139px] h-[81px] grid items-center bg-[#333333] border border-[#FFFFFF26] rounded-lg'>
              <div className='w-9/12 m-auto'>
                <p className=' text-md text-[#FFFFFF]'>{item.title}</p>
                <h1 className=' text-lg font-semibold text-[#FFFFFF]'>{item.count}</h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className='w-10/12 m-auto grid grid-cols-2 gap-10 mt-10 mb-10'>
        <div className=' bg-[#333333] border border-[#FFFFFF26] rounded-lg'>
          <div className=' w-11/12 m-auto mt-5'>
            <div className=' flex justify-between'>
              <div>
                <Image
                  src={smallimage}
                  alt='smallimage'
                  width={349}
                  height={229}
                />
              </div>
              <div className='gap-x-5 flex'>
                <div>
                  <button className=' text-[#C5D277]'>Edit</button>
                </div>
                <div>
                  <button className='text-[#DD5B5B]'>Delete</button>
                </div>
              </div>
            </div>
            <div className=' grid gap-y-3 mt-5 mb-5'>
              <div>
                <h1 className=' text-md text-[#FFFFFF80]'>{firstheader}</h1>
                <p className=' text-[#FFFFFF] text-lg font-semibold mt-2'>
                  {subtitle}
                </p>
              </div>
              <div>
                <h1 className=' text-md text-[#FFFFFF80]'>{secondheader}</h1>
                <p className=' text-[#FFFFFF] text-lg font-semibold mt-2'>
                 {content}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=' bg-[#333333] border border-[#FFFFFF26] rounded-lg'>
            <div className='w-11/12 m-auto mt-5 mb-5 grid gap-y-3'>
              <h1 className=' text-xl text-[#FFFFFF] font-semibold'>
                Submission By
              </h1>
              <div>
                <p className=' text-md text-[#FFFFFF80]'>Full Name</p>
                <h1 className=' text-[#FFFFFF] text-lg font-semibold mt-2'>
                  {fullname}
                </h1>
              </div>
              <div>
                <p className=' text-md text-[#FFFFFF80]'>Email Address</p>
                <h1 className=' text-[#FFFFFF] text-lg font-semibold mt-2'>
                  {email}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default MainRenders;
