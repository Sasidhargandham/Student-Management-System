// src/components/students/StudentForm.jsx
import { useState } from "react";

const StudentForm = ({ initialData = {}, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: initialData.name || "",
    rollNo: initialData.rollNo || "",
    department: initialData.department || "",
    year: initialData.year || "",
    attendance: initialData.attendance || "",
    averageMarks: initialData.averageMarks || "",
    contact: initialData.contact || "",
    email: initialData.email || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow rounded-xl p-6 space-y-4 max-w-2xl mx-auto"
    >
      <h3 className="text-lg font-semibold mb-4">Student Details</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          name="rollNo"
          placeholder="Roll Number"
          value={formData.rollNo}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="year"
          placeholder="Year"
          value={formData.year}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="attendance"
          placeholder="Attendance (%)"
          type="number"
          value={formData.attendance}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="averageMarks"
          placeholder="Marks (%)"
          type="number"
          value={formData.averageMarks}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="contact"
          placeholder="Contact"
          value={formData.contact}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Save Student
      </button>
    </form>
  );
};

export default StudentForm;
