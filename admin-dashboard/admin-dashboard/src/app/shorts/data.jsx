import Image from "next/image";
import Link from "next/link";
 export const info =[
    {
        header : "Total Uploaded Shorts",
        number : "1,234"
    },
    {
        header : "Pending Shorts",
        number : "211"
    },
    {
        header : "Rejected Shorts",
        number : "14"
    },
    {
        header : "Approved Shorts",
        number : "991"
    },
 ]

 export const shortsData = [

    {
      title: 'Dancing Compettion',
      link : "/shorts/dancing-competition",
      submitted: (
        <div className='flex items-center gap-2 '>
          <div>
            <Image
              alt='modal'
              src='/tableavatar.png'
              height={32}
              width={32}
            />
          </div>
          <div>
            <h1 className='text-sm'>Syeda Omesh Lahore</h1>
          </div>
        </div>
      ),
      email: 'syedaomesh@gmail.com Lahore',
      date: '22/10/2023, 8:40am',
      status: <div className="text-purple">Pending</div>,
    },
    {
      title: 'Yoga Compettion',
      link : "/shorts/yoga-competition",
      submitted: (
        <div className='flex items-center gap-2'>
          <div>
            <Image
              alt='modal'
              src='/tableavatar.png'
              height={32}
              width={32}
            />
          </div>
          <div>
            <h1 className='text-sm'>Syeda Omesh Lahore</h1>
          </div>
        </div>
      ),
      email: 'syedaomesh@gmail.com Lahore',
      date: '22/10/2023, 8:40am',
      status:  <div className="text-red-600">Rejected</div>,
    },
    {
      title: 'Self-Defense Compettion',
      link : "/shorts/selfdefense-competition",
      submitted: (
        <div className='flex items-center gap-2'>
          <div>
            <Image
              alt='modal'
              src='/tableavatar.png'
              height={32}
              width={32}
            />
          </div>
          <div>
            <h1 className='text-sm'>Syeda Omesh Lahore</h1>
          </div>
        </div>
      ),
      email: 'syedaomesh@gmail.com Lahore',
      date: '22/10/2023, 8:40am',
      status:  <div className="text-green-500">Approved</div>,
    },


     {
      title: 'Dancing Compettion',
      link : "/shorts/dancing-competition",
      submitted: (
        <div className='flex items-center gap-2'>
          <div>
            <Image
              alt='modal'
              src='/tableavatar.png'
              height={32}
              width={32}
            />
          </div>
          <div>
            <h1 className='text-sm'>Syeda Omesh Lahore</h1>
          </div>
        </div>
      ),
      email: 'syedaomesh@gmail.com Lahore',
      date: '22/10/2023, 8:40am',
      status: <div className="text-purple">Pending</div>,
    },
    {
      title: 'Yoga Compettion',
      link : "/shorts/yoga-competition",
      submitted: (
        <div className='flex items-center gap-2'>
          <div>
            <Image
              alt='modal'
              src='/tableavatar.png'
              height={32}
              width={32}
            />
          </div>
          <div>
            <h1 className='text-sm'>Syeda Omesh Lahore</h1>
          </div>
        </div>
      ),
      email: 'syedaomesh@gmail.com Lahore',
      date: '22/10/2023, 8:40am',
      status:  <div className="text-red-600">Rejected</div>,
    },
    {
      title: 'Self-Defense Compettion',
      link : "/shorts/selfdefense-competition",
      submitted: (
        <div className='flex items-center gap-2'>
          <div>
            <Image
              alt='modal'
              src='/tableavatar.png'
              height={32}
              width={32}
            />
          </div>
          <div>
            <h1 className='text-sm'>Syeda Omesh Lahore</h1>
          </div>
        </div>
      ),
      email: 'syedaomesh@gmail.com Lahore',
      date: '22/10/2023, 8:40am',
      status:  <div className="text-green-500">Approved</div>,
    },

    {
        title: 'Dancing Compettion',
        link : "/shorts/dancing-competition",
        submitted: (
          <div className='flex items-center gap-2'>
            <div>
              <Image
                alt='modal'
                src='/tableavatar.png'
                height={32}
                width={32}
              />
            </div>
            <div>
              <h1 className='text-sm'>Syeda Omesh Lahore</h1>
            </div>
          </div>
        ),
        email: 'syedaomesh@gmail.com Lahore',
        date: '22/10/2023, 8:40am',
        status: <div className="text-purple">Pending</div>,
      },
      {
        title: 'Yoga Compettion',
        link : "/shorts/yoga-competition",
        submitted: (
          <div className='flex items-center gap-2'>
            <div>
              <Image
                alt='modal'
                src='/tableavatar.png'
                height={32}
                width={32}
              />
            </div>
            <div>
              <h1 className='text-sm'>Syeda Omesh Lahore</h1>
            </div>
          </div>
        ),
        email: 'syedaomesh@gmail.com Lahore',
        date: '22/10/2023, 8:40am',
        status:  <div className="text-red-600">Rejected</div>,
      },
      {
        title: 'Self-Defense Compettion',
        link : "/shorts/selfdefense-competition",
        submitted: (
          <div className='flex items-center gap-2'>
            <div>
              <Image
                alt='modal'
                src='/tableavatar.png'
                height={32}
                width={32}
              />
            </div>
            <div>
              <h1 className='text-sm'>Syeda Omesh Lahore</h1>
            </div>
          </div>
        ),
        email: 'syedaomesh@gmail.com Lahore',
        date: '22/10/2023, 8:40am',
        status:  <div className="text-green-500">Approved</div>,
      },
  ];