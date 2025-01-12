import React from 'react';
import Logo from './navbar/Logo';
import Search from './navbar/Search';
import UserMenu from './navbar/UserMenu';

export default function Container(props) {
  return (
    <div className='flex justify-between items-center max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
        <Logo image={props.container} />
        <Search/>
        <UserMenu />
    </div>
  )
}
