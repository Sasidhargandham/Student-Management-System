import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rollNo: { type: String, required: true, unique: true },
    department: { type: String },
    year: { type: String },
    attendance: { type: Number, default: 0 },
    averageMarks: { type: Number, default: 0 },
    contact: { type: String },
    email: { type: String },
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", studentSchema);
export default Student;
