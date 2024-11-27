import { AddTodo, Sidebar, TopMenu } from "@/components/index";
import { Modal } from "@/components/index";
import {
  IoAddCircleSharp,
  IoCheckboxOutline,
  IoListOutline,
} from "react-icons/io5";

const sideItems = [
  {
    title: "Add TODO",
    Icon: <IoAddCircleSharp />,
  },
  {
    path: "/dashboard/rest-todos",
    title: "Rest TODOs",
    Icon: <IoCheckboxOutline />,
  },
  {
    path: "/dashboard/server-actions",
    title: "Server Actions",
    Icon: <IoListOutline />,
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="relative">
        <Sidebar sideItems={sideItems} />
        <div className="ml-auto lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">
          <TopMenu />
          <div className="px-6 pt-6">{children}</div>
        </div>
      </div>
      <Modal>
        <AddTodo />
      </Modal>
    </>
  );
}
