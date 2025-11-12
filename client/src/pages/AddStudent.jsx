// src/pages/AddStudent.jsx
import { useNavigate } from "react-router-dom";
import StudentForm from "../components/students/StudentForm";
import { addStudent } from "../api/studentApi";

const AddStudent = () => {
  const navigate = useNavigate();

  const handleAdd = async (newStudent) => {
    await addStudent(newStudent);
    alert("✅ Student added successfully!");
    navigate("/students");
  };

  return (
    <div>
      <StudentForm onSubmit={handleAdd} />
    </div>
  );
};

export default AddStudent;
