import React, { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";

export default function Model(props) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(props.isOpen);
  }, [props.isOpen]);

  const handleClose = useCallback(() => {
    if (props.disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      props.onClose();
    }, 300);
  }, [props.disabled, props.onClose]);

  const handleSubmit = useCallback(() => {
    if (props.disabled) {
      return;
    }
    props.onSubmit();
  }, [props.disabled, props.onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (props.disabled || !props.secondaryAction) {
      return;
    }
    props.secondaryAction();
  }, [props.disabled, props.secondaryAction]);

  // Don't render the modal if it's not open
  if (!props.isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-neutral-800/70">
        <div className="relative w-full h-full mx-auto my-6 md:w-4/6 lg:w-3/6 xl:w-2/5 lg:h-auto md:h-auto">
          <div
            className={`translate duration-300 h-full ${
              showModal ? "translate-y-0" : "translate-y-full"
            } ${showModal ? "opacity-100" : "opacity-0"}`}
          >
            <div className="relative flex flex-col w-full h-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none lg:h-auto md:h-auto">
              <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
                <button
                  className="absolute p-1 transition border-0 hover:opacity-70 left-9"
                  onClick={handleClose}
                >
                  <IoMdClose size={18} />
                </button>
                <div className="text-lg font-semibold">{props.title}</div>
              </div>

              <div className="relative flex-auto p-6">{props.body}</div>
              <div className="flex flex-col gap-2 p-6">
                <div className="flex flex-row items-center w-full gap-4">
                  {props.secondaryAction && props.secondaryActionLabel && (
                    <Button
                      disabled={props.disabled}
                      label={props.secondaryActionLabel}
                      onClick={handleSecondaryAction}
                      outline
                    />
                  )}
                  <Button
                    disabled={props.disabled}
                    label={props.actionLabel}
                    onClick={handleSubmit}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
