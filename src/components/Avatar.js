import React from 'react'
import placeholderUrl from '../assets/placeholder.jpg';

export default function Avatar() {
  return (
    <>
        <img className='rounded-full h-[30px] w-[30px]' alt='avatar' src={placeholderUrl} />
    </>
  )
}
