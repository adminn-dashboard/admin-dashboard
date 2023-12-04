import React, { useEffect, useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
function Navigation() {
    const style = 'text-sm p-4 cardbg rounded-lg';
    const [page, setPage]=useState(0)
    useEffect(()=>{
      setPage(1)
    },[])
    const increasePage=()=>{
      setPage(page+1)
    }
    const decreasePage=()=>{
      setPage(page-1)
    }
  return (
    <div className='flex justify-center mt-10 items-center gap-5'>
      <button
        onClick={decreasePage}
        className={`${style}`}>
        <IoIosArrowBack size={20} />
      </button>
      <button className={`${style} ${page === 1 ? 'pagecolor' : ''}`}>1</button>
      <button className={`${style} ${page === 2 ? 'pagecolor' : ''}`}>2</button>
      <button className={`${style} ${page === 3 ? 'pagecolor' : ''}`}>3</button>
      <button className={`${style} ${page === 4 ? 'pagecolor' : ''}`}>4</button>
      <button className={`${style} ${page === 5 ? 'pagecolor' : ''}`}>5</button>
      <button className={`${style} ${page >= 6 ? 'pagecolor block ' : 'hidden'}`}>{page}</button>
      <button
        onClick={increasePage}
        className={`${style}`}>
        <IoIosArrowForward size={20} />
      </button>
    </div>
  );
}

export default Navigation