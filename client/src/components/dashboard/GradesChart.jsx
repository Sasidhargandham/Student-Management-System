// src/components/dashboard/GradesChart.jsx
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = ["#22c55e", "#3b82f6", "#facc15", "#ef4444"];

const GradesChart = ({ students = [] }) => {
  // ✅ Count how many students fall into each grade category
  const gradeCounts = { A: 0, B: 0, C: 0, D: 0 };

  students.forEach((s) => {
    const marks = s.averageMarks || 0;

    if (marks >= 85) gradeCounts.A++;
    else if (marks >= 70) gradeCounts.B++;
    else if (marks >= 50) gradeCounts.C++;
    else gradeCounts.D++;
  });

  // ✅ Prepare data for chart
  const data = [
    { name: "A Grade (85–100%)", value: gradeCounts.A },
    { name: "B Grade (70–84%)", value: gradeCounts.B },
    { name: "C Grade (50–69%)", value: gradeCounts.C },
    { name: "D Grade (<50%)", value: gradeCounts.D },
  ];

  // ✅ Show fallback message if no data
  const totalStudents =
    gradeCounts.A + gradeCounts.B + gradeCounts.C + gradeCounts.D;
  if (totalStudents === 0) {
    return (
      <div className="bg-white shadow rounded-xl p-4 text-center text-gray-500">
        No grade data available.
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-xl p-4">
      <h3 className="text-lg font-semibold mb-4">Grades Distribution</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={90}
            label
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GradesChart;
