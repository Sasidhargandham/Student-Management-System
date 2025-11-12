// src/components/layout/Sidebar.jsx
import { Home, Users, UserPlus } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/", icon: <Home size={20} /> },
    { name: "Students", path: "/students", icon: <Users size={20} /> },
    { name: "Add Student", path: "/students/add", icon: <UserPlus size={20} /> },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white h-screen flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-8 text-center">StudentSys</h1>

      <nav className="flex flex-col space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 p-2 rounded-md hover:bg-gray-700 transition 
              ${pathname === item.path ? "bg-gray-700" : ""}`}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
