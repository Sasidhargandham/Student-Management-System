// src/pages/Students.jsx
import { useEffect, useState } from "react";
import StudentList from "../components/students/StudentList";
import { getStudents, deleteStudent } from "../api/studentApi";

const Students = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const data = await getStudents();
    setStudents(data);
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    fetchStudents(); // refresh list
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <StudentList students={students} onDelete={handleDelete} />
    </div>
  );
};

export default Students;
