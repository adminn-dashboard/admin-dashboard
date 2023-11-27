'use client';
import React, { useState } from 'react';
import { FirstDashData } from '../Dashboarddata/FirstDashData';
import { IoSearchOutline } from 'react-icons/io5';
import { IoMdOptions } from 'react-icons/io';
import { useTable } from 'react-table'


function PendingApprovalShorts() {
 const data = React.useMemo(() => FirstDashData,[]);
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
    
     
   ],
   
 );
    const {getTableProps, getTableBodyProps, HeaderGroups,rows, prepareRow} = useTable({data,
    columns,
    // getCoreRowModel : getCoreRowModel()
    })
//console.log(getTableProps);

  return (
    <div className='mt-10'>
      {' '}
      <div className='flex justify-between items-center'>
        <div>
          <h1 className='text-2xl font-semibold'>Pending Approval Shorts</h1>
        </div>
        <div className='cardbg h-11 rounded-full flex items-center justify-around'>
          <div>
            <IoSearchOutline />
          </div>
          <input
            placeholder='Search'
            className='cardbg h-full'
          />
          <div>
            <IoMdOptions />
          </div>
        </div>
      </div>
      <div className='mt-5 rounded-lg border-slate-600 border '>
       
      </div>
    </div>
  );
}

export default PendingApprovalShorts;
