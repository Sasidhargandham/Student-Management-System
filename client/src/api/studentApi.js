import axios from "axios";

const API_URL = "https://student-management-system-42u0.onrender.com/api/students"; // your backend URL

// Get all students
export const getStudents = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

// Get single student
export const getStudentById = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};

// Add new student
export const addStudent = async (studentData) => {
  const res = await axios.post(API_URL, studentData);
  return res.data;
};

// Update student
export const updateStudent = async (id, studentData) => {
  const res = await axios.put(`${API_URL}/${id}`, studentData);
  return res.data;
};

// Delete student
export const deleteStudent = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};
