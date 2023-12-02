'use client';
import React, { useState } from 'react';
import { FirstDashData } from '../Dashboarddata/FirstDashData';
import { IoSearchOutline } from 'react-icons/io5';
import { IoMdOptions } from 'react-icons/io';
import { useTable } from 'react-table';
import DropDownShorts from './DropDownShorts';
import DropDownPhotos from './DropDownPhotos';

function DashStructure({ dat, title }) {
  const data = React.useMemo(() => dat, []);
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
          <button className=' text-green-600 text-sm'>View more</button>
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
      // getCoreRowModel : getCoreRowModel()
    });
  const [dropDown, setDropDown] = useState(false);
  const dropDownFunc = () => {
    setDropDown(!dropDown);
  };
  return (
    <div className='mt-10 relative'>
      {' '}
      <div className='flex justify-between items-center'>
        <div>
          <h1 className='text-2xl font-semibold'>{title}</h1>
        </div>
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
              <IoMdOptions />
            </button>
          </div>
        </div>
      </div>
      <div className='mt-5 rounded-lg border-slate-600 border'>
        <div
          style={{ border: '1px solid #FFFFFF26' }}
          className=' rounded-lg '>

          <table
            {...getTableProps()}
            style={{ border: '' }}
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
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td
                        {...cell.getCellProps()}
                        style={{ borderBottom: '1px solid #FFFFFF26' }}>
                        <div className=' text-slate-300  justify-center grid m-auto h-14 items-center'>
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
      </div>
      <div
        className={`absolute  top-14 right-0 ${
          dropDown === true ? 'grid' : 'hidden'
        }`}>
        {title === 'Pending Approval Shorts' ? (
          <DropDownShorts />
        ) : (
          <DropDownPhotos />
        )}
      </div>
    </div>
  );
}

export default DashStructure;
