'use client';
import React from 'react';
import { FirstDashData } from '../Dashboarddata/FirstDashData';
import { IoSearchOutline } from 'react-icons/io5';
import { IoMdOptions } from 'react-icons/io';
import DataTable from 'react-data-table-component';

function PendingApprovalPhotos() {
 
  
       
      return (
        <div className='mt-10 pb-20'>
          {' '}
          <div className='flex justify-between items-center'>
            <div>
              <h1 className='text-2xl font-semibold'>
                Pending Approval Shorts
              </h1>
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

export default PendingApprovalPhotos