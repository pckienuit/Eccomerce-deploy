import SideBar from "./Sidebar";
import NavBar from "./Navbar";
import DashBoard from "./Dashboard";
import { ToastContainer, toast } from "react-toastify";
import { createBrowserRouter, Outlet } from "react-router";

function adminPage() {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <NavBar />
      <div className="flex flex-row h-full ">
        <SideBar />
        <div className="w-full h-fit shadow-inner">
          <Outlet />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default adminPage;
