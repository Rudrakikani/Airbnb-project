import React from "react";

export default function Button(props) {



  return (
    <>
      <button
        disabled={props.disabled}
        onClick={props.onClick}
        className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        w-full
        ${props.outline ? "bg-white" : "bg-rose-500"}
        ${props.outline ? "border-black" : "border-rose-500"}
        ${props.outline ? "text-black" : "text-white"}
        ${props.small ? "text-sm" : "text-md"}
        ${props.small ? "py-1" : "py-3"}
        ${props.small ? "font-light" : "font-semibold"}
        ${props.small ? "border-[1px]" : "border-2"}
      `}
      >
        {props.Icon && <props.Icon size={24} className="absolute left-4 top-3" />}
        {props.label}
      </button>
    </>
  );
}
