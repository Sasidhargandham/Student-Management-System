// src/components/students/StudentList.jsx
import { Link } from "react-router-dom";
import { Edit, Trash2, Eye } from "lucide-react";

const StudentList = ({ students, onDelete }) => {
  return (
    <div className="bg-white shadow rounded-xl p-4">
      <h3 className="text-lg font-semibold mb-4">All Students</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Roll No</th>
              <th className="p-3">Department</th>
              <th className="p-3">Year</th>
              <th className="p-3">Attendance</th>
              <th className="p-3">Marks</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.map((s) => (
              <tr key={s._id} className="border-b hover:bg-gray-50">
                <td className="p-3">{s.name}</td>
                <td className="p-3">{s.rollNo}</td>
                <td className="p-3">{s.department}</td>
                <td className="p-3">{s.year}</td>
                <td className="p-3">{s.attendance}%</td>
                <td className="p-3">{s.averageMarks}%</td>
                <td className="p-3 text-center flex justify-center gap-3">
                  <Link to={`/students/${s._id}`}>
                    <Eye className="text-blue-500 hover:scale-110 transition" />
                  </Link>
                  <Link to={`/students/${s._id}/edit`}>
                    <Edit className="text-green-500 hover:scale-110 transition" />
                  </Link>
                  <button onClick={() => onDelete(s._id)}>
                    <Trash2 className="text-red-500 hover:scale-110 transition" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;
