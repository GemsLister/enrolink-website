import { HeadSidebar } from "./HeadSidebar";
import { Outlet } from "react-router";

export const HeadLayout = () => {
  return (
    <div className="grid desktop:grid-cols-[320px_1fr] h-[100dvh] laptop:grid-cols-[320px_1fr]">
      <HeadSidebar />
      <div className="bg-gray-100 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

