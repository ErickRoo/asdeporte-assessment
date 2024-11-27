"use client";

import { useAppDispatch, useAppSelector } from "@/store";
import { closeModal } from "@/store/modal/modalSlice";
import { IoCloseCircleSharp } from "react-icons/io5";

export const Modal = ({ children }: { children: React.ReactNode }) => {
  const { isOpen } = useAppSelector((state) => state.modalForm);
  const dispatch = useAppDispatch();

  const handleModal = () => {
    dispatch(closeModal());
  };
  return (
    <>
      {isOpen && (
        <div className="absolute z-10 top-0 left-0 bg-slate-500 bg-opacity-50 w-screen h-screen flex flex-col justify-center">
          <button
            onClick={handleModal}
            className="w-full flex justify-end mt-10 pr-10"
          >
            <IoCloseCircleSharp size={80} />
          </button>
          <div>{children}</div>
        </div>
      )}
    </>
  );
};
