import MenuItem from './MenuItem';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';
import Image from 'next/image';

export default function Header() {
  return (
    <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6'>
      <div className='flex'>
        <MenuItem title='HOME' address='/' Icon={AiFillHome} />
        <MenuItem title='ABOUT' address='/about' Icon={BsFillInfoCircleFill} />
      </div>
      <div className='flex items-center space-x-5'>
        <DarkModeSwitch />
        <Link href='/'>
          <Image
            src='https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg'
            width={100}
            height={100}
            className='cursor-pointer active:brightness-110'
            alt=''
          />
          {/* <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
              IMDb
            </span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2> */}
        </Link>
      </div>
    </div>
  );
}
