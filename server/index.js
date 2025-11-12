import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import studentRoutes from "./routes/studentRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors({
    origin: "https://student-management-system-eight-snowy.vercel.app", // your React frontend port
    methods: ["GET", "POST", "PUT", "DELETE"]
}));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Student API is running...");
});

app.use("/api/students", studentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
