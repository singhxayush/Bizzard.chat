import React from 'react'
import { IoClose } from "react-icons/io5";
import HeaderButton from './HeaderButton';

const Header = () => {
  return (
<div className='w-full flex justify-between items-center px-4 py-2 bg-slate-200/10'>
    <div className='flex flex-row items-center gap-3'>
        <div className='avatar online'>
            <div className='w-10 rounded-full'>
                <img src='https://avatar.iran.liara.run/public/boy?username=ayush' alt='user avatar' />
            </div>
        </div>
        <span>Person's Name</span>
    </div>
    <div>
        <HeaderButton />
    </div>
</div>

  )
}

export default Header
