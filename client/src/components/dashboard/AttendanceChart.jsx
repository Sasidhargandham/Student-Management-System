// src/components/dashboard/AttendanceChart.jsx
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AttendanceChart = ({ students = [] }) => {
  // ✅ Group attendance by department
  const departmentMap = {};

  students.forEach((s) => {
    if (!s.department) return;
    if (!departmentMap[s.department]) {
      departmentMap[s.department] = { total: 0, count: 0 };
    }
    departmentMap[s.department].total += s.attendance || 0;
    departmentMap[s.department].count += 1;
  });

  // ✅ Convert grouped data into chart-friendly format
  const chartData = Object.keys(departmentMap).map((dept) => ({
    department: dept,
    averageAttendance: (
      departmentMap[dept].total / departmentMap[dept].count
    ).toFixed(1),
  }));

  // ✅ If no data, show fallback message
  if (chartData.length === 0) {
    return (
      <div className="bg-white shadow rounded-xl p-4 text-center text-gray-500">
        No attendance data available.
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-xl p-4">
      <h3 className="text-lg font-semibold mb-4">Attendance Overview</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={chartData}>
          <XAxis dataKey="department" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="averageAttendance"
            fill="#3b82f6"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
