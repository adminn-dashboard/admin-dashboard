'use client';
import React from 'react';
import { FirstDashData } from '../Dashboarddata/FirstDashData';
import Navigation from './Navigation';
import DataTable from 'react-data-table-component';
import DashStructure from './DashStructure';
function PendingApprovalPhotos() {
 var Data =FirstDashData
  const title = 'Pending Approval Photos';
       
      return (
        <div className='pb-20 mt-10'>
       <DashStructure 
            dat={Data}
            title={title}
            />
            <div>
              <Navigation />
            </div>
        </div>
      );
}

export default PendingApprovalPhotos