// src/components/students/StudentProfile.jsx
const StudentProfile = ({ student }) => {
  if (!student) return <p>No student found</p>;

  return (
    <div className="bg-white shadow rounded-xl p-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">{student.name}</h2>

      <div className="grid grid-cols-2 gap-3 text-sm">
        <p><b>Roll No:</b> {student.rollNo}</p>
        <p><b>Department:</b> {student.department}</p>
        <p><b>Year:</b> {student.year}</p>
        <p><b>Attendance:</b> {student.attendance}%</p>
        <p><b>Average Marks:</b> {student.averageMarks}%</p>
        <p><b>Contact:</b> {student.contact}</p>
        <p><b>Email:</b> {student.email}</p>
      </div>
    </div>
  );
};

export default StudentProfile;
