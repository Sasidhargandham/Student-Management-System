// src/components/dashboard/StatsCard.jsx
import { Users, CalendarCheck, BookOpen } from "lucide-react";

const iconMap = {
  students: {
    icon: <Users size={26} className="text-blue-500" />,
    bg: "bg-blue-100",
  },
  attendance: {
    icon: <CalendarCheck size={26} className="text-green-500" />,
    bg: "bg-green-100",
  },
  grades: {
    icon: <BookOpen size={26} className="text-purple-500" />,
    bg: "bg-purple-100",
  },
};

const StatsCard = ({ type = "students", title, value }) => {
  const cardInfo = iconMap[type] || iconMap.students;

  return (
    <div className="flex items-center bg-white shadow-sm rounded-xl p-4 w-full hover:shadow-md transition-all">
      {/* Icon */}
      <div className={`p-3 ${cardInfo.bg} rounded-full mr-4`}>
        {cardInfo.icon}
      </div>

      {/* Text Content */}
      <div>
        <p className="text-gray-500 text-sm font-medium">{title}</p>
        <h2 className="text-2xl font-semibold text-gray-800">
          {value !== undefined && value !== null ? value : "—"}
        </h2>
      </div>
    </div>
  );
};

export default StatsCard;
