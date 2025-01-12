import React from 'react';
import logoUrl from '../../assets/logo.png';
import Container from '../Container';

export default function Navbar() {
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <div className='p-4 border-b-[1px]'>
        <Container container={logoUrl}/>
        
      </div>
    </div>
  )
}
