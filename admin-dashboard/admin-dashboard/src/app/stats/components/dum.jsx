'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from './components/sidebar/sidebar';
import { useSelectedLayoutSegment } from 'next/navigation';
import { Topbar } from './components/topbar';
const inter = Inter({ subsets: ['latin'] });
export default function RootLayout({ children }) {
  const segment = useSelectedLayoutSegment();
  console.log(`/${segment}`);
  return (
    <html lang='en'>
      <body className='bgset '>
        {`/${segment}` === '/null' || `/${segment}` === '/forgot-password' ? (
          ''
        ) : (
          <div className='grid grid-cols-8'>
            <div className=' col-span-1 cardbg'>
              <Sidebar />
            </div>
            <div className=' col-span-7 '>
              <Topbar />
              <div className=' pt-20'>{children}</div>
            </div>
          </div>
        )}
        <div
          className={
            `/${segment}` === '/null' || `/${segment}` === '/forgot-password'
              ? 'flex  w-full h-[100%]'
              : ' overflow-x-hidden overflow-y-auto pt-[5%] pl-[10%]  w-full flex  justify-center '
          }>
          {children}
        </div>
      </body>
    </html>
  );
}
