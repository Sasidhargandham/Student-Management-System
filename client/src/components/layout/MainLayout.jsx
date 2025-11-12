// src/components/layout/MainLayout.jsx
import Sidebar from "./SideBar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 p-6">
          <Outlet /> {/* This renders the active page */}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
