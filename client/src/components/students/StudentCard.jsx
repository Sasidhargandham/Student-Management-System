// src/components/students/StudentCard.jsx
import { Link } from "react-router-dom";
import { User } from "lucide-react";

const StudentCard = ({ student }) => {
  return (
    <div className="bg-white shadow rounded-xl p-4 flex flex-col items-start">
      <div className="flex items-center gap-3 mb-3">
        <div className="bg-gray-200 p-2 rounded-full">
          <User size={22} className="text-blue-500" />
        </div>
        <div>
          <h3 className="font-semibold">{student.name}</h3>
          <p className="text-sm text-gray-500">{student.rollNo}</p>
        </div>
      </div>

      <p className="text-sm"><b>Dept:</b> {student.department}</p>
      <p className="text-sm"><b>Year:</b> {student.year}</p>
      <p className="text-sm"><b>Marks:</b> {student.averageMarks}%</p>

      <Link
        to={`/students/${student._id}`}  
        className="mt-3 text-blue-600 text-sm hover:underline"
      >
        View Profile →
      </Link>
    </div>
  );
};

export default StudentCard;
