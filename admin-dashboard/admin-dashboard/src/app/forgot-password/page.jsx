"use client"
import React,{useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
const page = () => {
    const [page,setpage] = useState(1)
 function Addpage() {
    setpage(page + 1)
 }

  return (
    <div className='w-[100%] grid items-center  bg-black h-screen'>
      <div>
        {page === 1 ? (
          <div>
            <div className=' flex flex-col items-center justify-center gap-[2rem] '>
              <h2 className='text-[40px] font-bold text-[#938BE7]  '>
                FAME UP
              </h2>
              <div className='flex flex-col items-center justify-center border-[1px] border-[#FFFFFF40] rounded-md'>
                <div className='flex flex-col  p-[2rem] gap-[2rem]'>
                  <div className='flex flex-col items-center justify-center'>
                    <h3 className='text-white font-semibold text-[24px] '>
                      Reset Password
                    </h3>
                    <h4 className='text-gray-300 font-normal text-[16px] text-center'>
                      Enter the email associated with your account, <br></br>{' '}
                      we'll email you a link to reset your password
                    </h4>
                  </div>
                  <div className='flex flex-col gap-[1rem] '>
                    <div className='grid gap-[0.5rem]'>
                      <label className=' text-white text-[18px] '>
                        Email adress
                      </label>
                      <input
                        label='Email address'
                        placeholder='Email address'
                        type='text'
                        className=' focus:border-gray-400  h-[70px] w-[500px] p-[1rem]  text-gray-400 border-[1px] border-gray-400 bg-transparent rounded-md'
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => Addpage()}
                    className='text-white flex rounded-3xl bg-[#938BE7] py-[1rem] items-center justify-center'>
                    send reset link
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}

        {page === 2 ? (
          <div>
            <div className=' flex flex-col items-center justify-center mt-[7rem] gap-[2rem] '>
              <h2 className='text-[40px] font-bold text-[#938BE7]  '>
                FAME UP
              </h2>
              <div className='flex flex-col items-center justify-center border-[1px] border-gray-400 rounded-md'>
                <div className='flex flex-col  p-[2rem] gap-[2rem]'>
                  <div className='flex flex-col items-center justify-center'>
                    <h3 className='text-white font-semibold text-[24px] '>
                      Create New Password
                    </h3>
                    <h4 className='text-gray-300 font-normal text-[16px] text-center'>
                      Your new password must be different from previously{' '}
                      <br></br>used password and must at least be 8 characters
                      long
                    </h4>
                  </div>
                  <div className='flex flex-col gap-[1rem] '>
                    <div className='grid gap-[0.5rem]'>
                      <label className=' text-white text-[18px] '>
                        New Password
                      </label>
                      <input
                        label='Email address'
                        placeholder='Enter password (8 characters long)'
                        type='text'
                        className=' focus:border-gray-400  h-[70px] w-[500px] p-[1rem]  text-gray-400 border-[1px] border-gray-400 bg-transparent rounded-md'
                      />
                    </div>
                    <div className='grid gap-[0.5rem]'>
                      <label className=' text-white text-[18px] '>
                        Confirm New Password
                      </label>
                      <input
                        label='Password'
                        placeholder='Enter confirm password'
                        type='password'
                        id
                        className=' focus:border-gray-400 h-[70px] w-[500px] p-[1rem]  text-gray-400 border-[1px] border-gray-400 bg-transparent rounded-md'
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => Addpage()}
                    className='text-white flex rounded-3xl bg-[#938BE7] py-[1rem] items-center justify-center'>
                    reset password
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}

        {page === 3 ? (
          <div>
            <div className=' flex flex-col items-center justify-center mt-[8rem] gap-[2rem] ]'>
              <div className='flex flex-col items-center justify-center  '>
                <div className='flex flex-col  p-[2rem] gap-[2rem]'>
                  <div className='flex flex-col items-center justify-center gap-[1rem]'>
                    <Image
                      src='/images/tick.png'
                      className='w-auto h-auto'
                      width={100}
                      height={100}
                    />
                    <h3 className='text-white font-semibold text-[24px] '>
                      Password reset successfully
                    </h3>
                    <h4 className='text-gray-300 font-normal text-[16px] text-center'>
                      Check email address for your password reset link.<br></br>{' '}
                      Click to reset your password
                    </h4>
                  </div>

                  <Link href='/'>
                    <button className='text-white w-full flex rounded-3xl bg-[#938BE7] py-[1rem] items-center justify-center'>
                      back to login
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default page