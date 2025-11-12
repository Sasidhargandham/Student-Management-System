// src/components/layout/Topbar.jsx
import { Search, Bell } from "lucide-react";

const Topbar = () => {
  return (
    <header className="flex items-center justify-between bg-white shadow px-6 py-3">
      <h2 className="text-xl font-semibold text-gray-800">Student Relation System</h2>

      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-1">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none ml-2 text-sm"
          />
        </div>

        {/* Notification Icon */}
        <Bell className="text-gray-600 cursor-pointer" />
      </div>
    </header>
  );
};

export default Topbar;
