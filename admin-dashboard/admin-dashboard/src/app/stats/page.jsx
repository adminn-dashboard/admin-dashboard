import React from 'react';
import Statscards from './statsComponents/statsCard';
import { Statsdata } from './statsdata/statsdata';
const page = () => {
  return (
    <div className=' bgset  text-white w-full h-screen'>
      <div className=' w-11/12 m-auto'>
        <div className='w-11/12 m-auto'>
          <h1 className=' text-2xl font-semibold mt-10'>Stats</h1>
        </div>
        <div className=' grid grid-cols-1 lg:grid-cols-3 gap-y-5 lg:gap-y-10 mt-10 '>
          {Statsdata.map((item) => {
            return (
              <div
                className='grid justify-center items-center'
                key={item.id}>
                <Statscards
                  title={item.title}
                  figure={item.figure}
                  icon={item.icons}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
