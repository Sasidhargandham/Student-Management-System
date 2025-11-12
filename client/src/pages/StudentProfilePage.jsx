// src/pages/StudentProfilePage.jsx
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStudentById } from "../api/studentApi";
import StudentProfile from "../components/students/StudentProfile";
import { ArrowLeft } from "lucide-react";

const StudentProfilePage = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      const data = await getStudentById(id);
      setStudent(data);
    };
    fetchStudent();
  }, [id]);

  return (
    <div>
      <Link
        to="/students"
        className="flex items-center text-blue-600 mb-4 hover:underline"
      >
        <ArrowLeft size={18} className="mr-1" /> Back to Students
      </Link>

      {student ? (
        <StudentProfile student={student} />
      ) : (
        <p className="text-center text-gray-500">Loading...</p>
      )}
    </div>
  );
};

export default StudentProfilePage;
