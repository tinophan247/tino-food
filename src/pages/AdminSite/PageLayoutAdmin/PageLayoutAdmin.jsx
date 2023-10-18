/* eslint-disable react/prop-types */
import AdminHeader from "./AdminHeader";
import LeftSidebar from "./LeftSidebar";

function PageLayoutAdmin({ children }) {
  return (
    <div>
      <AdminHeader />
      <div className="w-full flex bg-gray-100 min-h-screen h-auto ">
        <LeftSidebar />
        <div className="w-[80%] mt-20">{children}</div>
      </div>
    </div>
  );
}

export default PageLayoutAdmin;
