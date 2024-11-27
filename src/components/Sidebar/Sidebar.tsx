import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CiLogout } from "react-icons/ci";
import { SidebarItem } from "@/components/index";

type Item = {
  path?: string;
  title: string;
  Icon: React.ReactNode;
};

interface Props {
  sideItems: Item[];
}

export const Sidebar = ({ sideItems }: Props) => {
  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6 py-4">
          <Link href="/dashboard" title="home">
            <Image
              src="https://cdn.prod.website-files.com/656017308327dc1bc138c398/65ab703968ecdb6286b8d2be_Logo%20Asdeporte.png"
              width={128}
              height={128}
              className="w-20 rounded-lg"
              alt="asdeporte logo"
            />
          </Link>
        </div>

        <div className="mt-8 text-center">
          <Image
            src="/era.jpg"
            width={140}
            height={140}
            alt=""
            objectFit="cover"
            className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
          />
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
            Erick Rodriguez A.
          </h5>
          <span className="hidden text-gray-400 lg:block">Admin</span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
          {sideItems.map((item) => (
            <SidebarItem key={item.title} {...item} />
          ))}
        </ul>
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
          <CiLogout />
          <span className="group-hover:text-gray-700">Logout</span>
        </button>
      </div>
    </aside>
  );
};
