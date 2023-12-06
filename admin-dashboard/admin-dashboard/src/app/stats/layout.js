import Sidebar from './components/sidebar/sidebar';
import { Topbar } from './components/topbar';

export default function Layout({ children }) {
  return (
    <div className='grid grid-cols-8  bgset'>
      <div className=' col-span-1'>
        <div className='  w-full'>
          <div className=''>
            <Sidebar />
          </div>
        </div>
      </div>
      <div className=' col-span-7'>
        <div className='fixed z-10'>
          <Topbar />
        </div>
        <div className=' mt-28'>{children}</div>
      </div>
    </div>
  );
}
