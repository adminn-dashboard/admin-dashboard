import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';
function DropDownPhotos() {
  return (
    <div>
      <div className=' w-44 h-fit cardbg'>
        <div className='grid gap-y-2 p-5'>
          <div className='flex items-center justify-between'>
            <h1>Photo Title</h1>
            <IoIosArrowForward />
          </div>
          <div>
            <h1>Name</h1>
          </div>
          <div>
            <h1>Email Address</h1>
          </div>
          <div>
            <h1>Date</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropDownPhotos