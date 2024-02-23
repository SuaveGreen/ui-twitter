import { NavLink } from 'react-router-dom';
import twitterLogo from '../assets/twitter-logo.svg'
import { House, Hash, Bell, Envelope, BookmarkSimple, FileText, User, DotsThreeCircle, Pencil } from "phosphor-react";

export function SideBar() {
  return(
    <aside className='py-6 px-5 flex flex-col gap-8 w-60'>
        <img src={twitterLogo} alt='logo' className='w-8 h-8'/>
        <nav className='flex flex-col gap-8'>
          <NavLink className='flex items-center gap-5 font-bold' to='/'>
            <House weight='fill' className='w-8 h-8'/>
            <p className='invisible w-0 sm:visible sm:w-24'>
              Home
            </p>
          </NavLink>
          <a className='flex items-center gap-5 font-bold' href=''>
            <Hash className='w-8 h-8' />
              <p className='invisible sm:visible sm:w-24'>Explore</p>
            </a>
          <a className='flex items-center gap-5 font-bold' href=''>
            <Bell className='w-8 h-8' />
            <p className='invisible sm:visible sm:w-24'>Notification</p>
          </a>
          <a className='flex items-center gap-5 font-bold' href=''>
            <Envelope className='w-8 h-8' />
            <p className='invisible sm:visible sm:w-24'>Message</p>
          </a>
          <a className='flex items-center gap-5 font-bold' href=''>
            <BookmarkSimple className='w-8 h-8' />
            <p className='invisible sm:visible sm:w-24'>Bookmarks</p>
          </a>
          <a className='flex items-center gap-5 font-bold' href=''>
            <FileText className='w-8 h-8' />
            <p className='invisible sm:visible sm:w-24'>List</p>
          </a>
          <a className='flex items-center gap-5 font-bold' href=''>
            <User className='w-8 h-8' />
            <p className='invisible sm:visible sm:w-24'>Profile</p>
          </a>
          <a className='flex items-center gap-5 font-bold' href=''>
            <DotsThreeCircle className='w-8 h-8' />
            <p className='invisible sm:visible sm:w-24'>More</p>
          </a>
        </nav>

        <button className='sm:flex text-white text-xl ml-[-6px] font-black justify-center border-none p-[.80rem] sm:p-2 rounded-full w-12 h-12 sm:w-full bg-twitter hover:brightness-90 ' type='button'>
          <Pencil className='sm:hidden h-6 w-6' />
          <p className='invisible sm:visible'>
          Tweet
          </p>
        </button>
      </aside>
  )
}