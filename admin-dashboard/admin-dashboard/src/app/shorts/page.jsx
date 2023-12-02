"use client"
import React from 'react'
import { info } from './data'
import { shortsData } from './data'
import { useTable } from 'react-table';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function pages () {
const navigate = useRouter
let link
{shortsData.map((short) => <div>
  { link = short.link}
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

       <button className=' text-green-600 cursor-pointer ' onClick={()=> navigate("/")}>View more</button>

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
<img src="/images/video.png" className="w-5xl" />
      </div>

      <table
            {...getTableProps()}
            style={{ border: '1px solid #FFFFFF26' }}
            className='w-full cursor-pointer  '>

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
                        style={{ borderBottom: '1px solid #FFFFFF26' }} className="cursor-pointer">

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
      </div>
  )
}

export default pages
