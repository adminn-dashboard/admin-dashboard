"use client"
import Image from 'next/image'
import Link from 'next/link';
import { Input } from 'postcss'
import { FaRegEye } from "react-icons/fa";
export default function Home() {
  return (
    <main className='w-full bg-black h-screen grid items-center  '>
      <div className=' flex flex-col items-center justify-center  gap-[2rem] '>
        <h2 className='text-[40px] font-bold text-[#938BE7]  '>
          WELCOME TO FAME UP
        </h2>
        <div className='flex flex-col items-center justify-center border-[1px] border-[#FFFFFF40] rounded-md'>
          <div className='flex flex-col  p-[2rem] gap-[2rem]'>
            <div className='flex flex-col items-center justify-center'>
              <h3 className='text-white font-semibold text-[24px] '>Sign in</h3>
              <h4 className='text-gray-300 font-normal text-[16px]'>
                Glad to meet you again!
              </h4>
            </div>
            <div className='flex flex-col gap-[1rem] '>
              <div className='grid gap-[0.5rem]'>
                <label className=' text-white text-[18px] '>Email adress</label>
                <input
                  label='Email address'
                  placeholder='Email address'
                  type='text'
                  className=' focus:border-gray-400  h-[70px] w-[500px] p-[1rem]  text-gray-400 border-[1px] border-gray-400 bg-transparent rounded-md'
                />
              </div>
              <div className='grid gap-[0.5rem]'>
                <label className=' text-white text-[18px] '>Password</label>
                <input
                  label='Password'
                  placeholder='Password'
                  type='password'
                  id
                  className=' focus:border-gray-400 h-[70px] w-[500px] p-[1rem]  text-gray-400 border-[1px] border-gray-400 bg-transparent rounded-md'
                />
              </div>
            </div>
            <Link href='/forgot-password'>
              <h4 className='font-semibold text-orange cursor-pointer '>
                Forgot Password?
              </h4>
            </Link>
            <Link href='/stats'>
              <button className='text-white w-full flex rounded-3xl bg-[#938BE7] py-[1rem] items-center justify-center'>
                Sign in
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
