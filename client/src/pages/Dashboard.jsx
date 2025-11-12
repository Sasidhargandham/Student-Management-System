// src/pages/Dashboard.jsx
import { useEffect, useState } from "react";
import StatsCard from "../components/dashboard/StatsCard";
import AttendanceChart from "../components/dashboard/AttendanceChart";
import GradesChart from "../components/dashboard/GradesChart";
import { getStudents } from "../api/studentApi";

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch students from backend
  const fetchStudents = async () => {
    try {
      const data = await getStudents(); // GET /api/students
      setStudents(data);
    } catch (error) {
      console.error("❌ Error fetching students:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 text-gray-500">
        Loading Dashboard...
      </div>
    );
  }

  // ✅ Calculate stats dynamically
  const totalStudents = students.length;
  const avgAttendance =
    totalStudents > 0
      ? (
          students.reduce((sum, s) => sum + (s.attendance || 0), 0) /
          totalStudents
        ).toFixed(1)
      : 0;
  const avgMarks =
    totalStudents > 0
      ? (
          students.reduce((sum, s) => sum + (s.averageMarks || 0), 0) /
          totalStudents
        ).toFixed(1)
      : 0;

  return (
    <div className="space-y-6">
      {/* 🔹 Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <StatsCard
          type="students"
          title="Total Students"
          value={totalStudents}
        />
        <StatsCard
          type="attendance"
          title="Avg Attendance (%)"
          value={avgAttendance}
        />
        <StatsCard type="grades" title="Avg Marks (%)" value={avgMarks} />
      </div>

      {/* 🔹 Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AttendanceChart students={students} />
        <GradesChart students={students} />
      </div>
    </div>
  );
};

export default Dashboard;
