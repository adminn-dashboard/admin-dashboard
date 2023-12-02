import React from 'react'

function Statscards({title,figure,icon}) {
  return (
    <div className='grid justify-center items-center '>
      <div className='cardbg w-80 rounded-lg  h-40 grid items-center '>
        <div className='flex items-center  gap-5 p-3'>
          <div>{icon}</div>
          <div>
            <h1 className=' text-lg'>{title}</h1>
            <h1 className='text-4xl font-semibold'>{figure}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statscards