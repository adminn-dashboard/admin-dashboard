import { BsPersonVideo2 } from 'react-icons/bs';
import { MdEvent } from 'react-icons/md';
import { MdOutlinePhotoSizeSelectActual } from 'react-icons/md';
import { MdMovie } from 'react-icons/md';
import { LiaUserSolid } from 'react-icons/lia';
import { IoLocationSharp } from 'react-icons/io5';
import { MdOutlineLocalOffer } from 'react-icons/md';
import { IoMdContacts } from 'react-icons/io';
import { CgWorkAlt } from 'react-icons/cg';
export const Statsdata = [
  {
    id: 1,
    title: 'Uploaded Shorts',
    figure: 1234,
    icons: (
      <div className='rounded-full p-8 bg-yellow-400'>
        <BsPersonVideo2 size={50} />
      </div>
    ),
  },
  {
    id: 2,
    title: 'Uploaded Events',
    figure: 34,
    icons: (
      <div className='rounded-full p-8 bg-red-400'>
        <MdEvent size={50} />
      </div>
    ),
  },
  {
    id: 3,
    title: 'Uploaded Photos',
    figure: 635,
    icons: (
      <div className='rounded-full p-8  bg-blue-600'>
        <MdOutlinePhotoSizeSelectActual size={50} />
      </div>
    ),
  },
  {
    id: 4,
    title: 'Uploaded Movies',
    figure: 184,
    icons: (
      <div className='rounded-full p-8 bg-green-400'>
        <MdMovie size={50} />
      </div>
    ),
  },
  {
    id: 5,
    title: 'Registered Users',
    figure: 94,
    icons: (
      <div className='rounded-full p-8  bg-blue-400'>
        <LiaUserSolid size={50} />
      </div>
    ),
  },
  {
    id: 6,
    title: 'Center Locations',
    figure: 434,
    icons: (
      <div className='rounded-full p-8 bg-fuchsia-400'>
        <IoLocationSharp size={50} />
      </div>
    ),
  },
  {
    id: 7,
    title: 'Available Offers',
    figure: 79,
    icons: (
      <div className='rounded-full p-8 bg-green-500'>
        <MdOutlineLocalOffer size={50} />
      </div>
    ),
  },
  {
    id: 8,
    title: 'Partners',
    figure: 12,
    icons: (
      <div className='rounded-full p-8 bg-pink-500'>
        <IoMdContacts size={50} />
      </div>
    ),
  },
  {
    id: 9,
    title: 'Posted Jobs',
    figure: 55,
    icons: (
      <div className='rounded-full p-8 bg-fuchsia-500'>
        <CgWorkAlt size={50} />
      </div>
    ),
  },
];
