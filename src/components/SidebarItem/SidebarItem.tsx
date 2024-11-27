"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { openModal } from "@/store/modal/modalSlice";
import { useAppDispatch } from "@/store";

type Props = {
  path?: string;
  title: string;
  Icon: React.ReactNode;
};

export const SidebarItem = ({ Icon, title, path = "" }: Props) => {
  const location = usePathname();
  const isActive = location === path;
  const dispatch = useAppDispatch();
  const handleButton = () => {
    dispatch(openModal());
  };
  return (
    <li>
      {path != "" ? (
        <Link
          href={path}
          className={`
            relative px-4 py-3 flex items-center space-x-4 rounded-xl 
            hover:bg-gradient-to-r hover:bg-sky-600 hover:text-white
            ${
              isActive
                ? "text-white bg-gradient-to-r from-sky-600 to-cyan-400"
                : "rounded-md text-gray-600 group"
            }`}
        >
          {Icon}
          <span className="-mr-1 font-medium">{title}</span>
        </Link>
      ) : (
        <button
          onClick={handleButton}
          className={`
            relative w-full px-4 py-3 flex items-center space-x-4 rounded-xl text-black border-2 border-orange-700 
            hover:border-sky-600 hover:bg-gradient-to-r hover:bg-sky-600 hover:text-white`}
        >
          {Icon}
          <span className="-mr-1 font-medium">{title}</span>
        </button>
      )}
    </li>
  );
};
