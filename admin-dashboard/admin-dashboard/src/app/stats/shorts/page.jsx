"use client"
import React,{useState} from 'react'
import { info } from './data'
import { shortsData } from './data'
import { useTable } from 'react-table';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { IoSearchOutline } from 'react-icons/io5';
import { IoMdOptions } from 'react-icons/io';
import DropDownshort from './widgets/dropdown';
import Image from 'next/image';
import { FaPlus } from "react-icons/fa6";
function pages () {
const navigate = useRouter
let link
{shortsData.map((short) => <div>
  { link = short.link}
  {console.log(link)}
</div>)}
const data = React.useMemo(() => shortsData, []);
  const columns = React.useMemo(
    () => [
      {
        header: 'Short Title',
        accessor: 'title',
      },
      {
        header: 'Submitted By',
        accessor: 'submitted',
      },
      {
        header: 'Email Address',
        accessor: 'email',
      },
      {
        header: 'Date Of Submission',
        accessor: 'date',
      },
      {
        header: 'Status',
        accessor: 'status',
      },
      {
        header: '',
        accessor: (row) => (
     <Link href={row.link}> <button className=' text-green-600 cursor-pointer '>View more</button></Link>
          ),
        id: 'dummy',
      },
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      data,
      columns,
    });
    const [dropDown, setDropDown] = useState(false);
    const dropDownFunc = () => {
      setDropDown(!dropDown);
    };
  return (
    <div className="flex flex-col gap-8 items-center justify-center ">
      <div className="flex flex-col gap-6">
<h2 className="text-white text-[30px] font-bold cursor-pointer">Shorts</h2>
<div className="flex flex-row gap-12">
  {info.map((inf) => <div className="bg-[#333333] flex flex-col gap-[1rem] px-[2rem] py-[0.5rem] rounded-lg">
<h4 className="text-gray-300 text-[16px] font-semibold">{inf.header}</h4>
<h5 className="text-white text-[28px] font-bold">{inf.number}</h5>
    </div>)}
</div>

<Image
          width={1121}
          height={458}
          src="/images/video.png"
          alt="alt"
        />
      </div>
<div className="flex flex-col gap-4 relative">
<div className='flex justify-between items-center'>
        <div>
          <h1 className='text-2xl font-semibold text-white'>All Shorts</h1>
        </div>
<div className="flex flex-row items-center justify-center gap-4">


<button className=" py-[0.5rem] text-white bg-[#938BE7] rounded-lg  flex flex-row items-center justify-center pl-4 pr-8" >
<FaPlus size={25} className=" text-white px-[0.3rem] bg-[rgba(147,139,231,1)] " />
  <h4 className="text-white font-normal text-[15px] pl-[0.1rem]  bg-[rgba(147,139,231,0.75)]">Add Movie</h4></button>

        <div className='cardbg h-11 rounded-full grid items-center '>

          <div className='grid grid-cols-8 items-center justify-center'>
            <div className='flex col-span-7 ml-3 gap-2 items-center'>
              <div className='  h-full grid items-center'>
                <button>
                  <IoSearchOutline />
                </button>
              </div>
              <div>
                <input
                  placeholder='Search'
                  className='cardbg h-11'
                />
              </div>
            </div>
            <button onClick={dropDownFunc}>
              <IoMdOptions className="" />
            </button>
          </div>
        </div>
        </div>
      </div>
      <table
            {...getTableProps()}
            style={{ border: '1px solid #FFFFFF26' }}
            className='w-full  '>

            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps()}
                      style={{ borderBottom: '1px solid #FFFFFF26' }}
                      className=' cardbg '>
                      <div className='grid text-slate-300  m-auto justify-left h-14 items-center'>
                        {column.render('header')}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()} >
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td
                        {...cell.getCellProps()}
                        style={{ borderBottom: '1px solid #FFFFFF26' }} >

                        <div className=' text-slate-300  justify-center grid m-auto h-16 px-[1rem] items-center'>
                          {cell.render('Cell')}
                        </div>
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div
        className={`absolute  top-14 right-0 ${
          dropDown === true ? 'grid' : 'hidden'
        }`}>
          <DropDownshort/>
      </div>
          </div>

    </div>
  )
}

export default pages
