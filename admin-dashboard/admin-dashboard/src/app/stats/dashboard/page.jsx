'use client';
import React from 'react';
import PendingApprovalShorts from './dashboardComponents/PendingApprovalShorts';
import PendingApprovalPhotos from './dashboardComponents/PendingApprovalPhotos';
const pages = () => {
  return (
    <div className='bgset h-max w-full  text-white'>
      <div className='w-11/12 m-auto mt-10'>
        <div>
          <h1 className='text-2xl font-semibold cursor-pointer'>Main Dashboard</h1>
        </div>
        <div>
          <PendingApprovalShorts />
        </div>
        <div>
          <PendingApprovalPhotos />
        </div>
      </div>
    </div>
  );
};
export default pages;
