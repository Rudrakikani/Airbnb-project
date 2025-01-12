import React from "react";

export default function MenuItem(props) {
  return (
    <>
      <div onClick={props.onClick} className="px-4 py-3 font-semibold transition hover:bg-neutral-100">
        {props.label}
      </div>
    </>
  );
}
