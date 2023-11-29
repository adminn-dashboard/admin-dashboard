'use client';
import React, { useState } from 'react';
import { FirstDashData } from '../Dashboarddata/FirstDashData';
import Navigation from './Navigation';
import DashStructure from './DashStructure';
function PendingApprovalShorts() {
   var Data = FirstDashData;
   const title = 'Pending Approval Shorts';
  return (
    <div className='mt-10'>
      {' '}
      <div>
        <DashStructure
          dat={Data}
          title={title}
        />
      </div>
      <div>
        <Navigation />
      </div>
    </div>
  );
}

export default PendingApprovalShorts;
