// src/pages/EditStudent.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import StudentForm from "../components/students/StudentForm";
import { getStudentById, updateStudent } from "../api/studentApi";

const EditStudent = () => {
  const { id } = useParams(); // ✅ Use 'id', not '_id'
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const data = await getStudentById(id); // ✅ Pass correct param
        setStudent(data);
      } catch (error) {
        console.error("Error fetching student:", error);
      }
    };
    fetchStudent();
  }, [id]);

  const handleEdit = async (updatedData) => {
    try {
      await updateStudent(id, updatedData); // ✅ Use same param
      alert("✅ Student updated successfully!");
      navigate("/students");
    } catch (error) {
      console.error("Error updating student:", error);
      alert("❌ Failed to update student!");
    }
  };

  return (
    <div>
      {student ? (
        <StudentForm initialData={student} onSubmit={handleEdit} />
      ) : (
        <p className="text-center text-gray-500">Loading student...</p>
      )}
    </div>
  );
};

export default EditStudent;
