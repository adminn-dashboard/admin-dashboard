import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
function DropDownShorts() {
  return (
    <div className=' w-44 h-[164px] cardbg'>
      <div className='grid gap-y-2 p-5'>
        <div className='flex items-center justify-between'>
          <h1>Short Title</h1>
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
  );
}

export default DropDownShorts;
