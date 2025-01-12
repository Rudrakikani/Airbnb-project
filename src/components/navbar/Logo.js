import React from 'react';

export default function Logo(props) {
  return (
    <>
        <img className="hidden md:block cursor-pointer h-[40px] w-[auto]" src={props.image}/>
    </>
  )
}
