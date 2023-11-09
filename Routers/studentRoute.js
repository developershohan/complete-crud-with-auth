import express from "express";
import { createStudent, deletAllStudents, deletOneStudent, getAllStudents, getOneStudent } from "../controllers/studentController.js";
import { createStudentMulter } from "../utils/multer.js";

const router = express.Router()

router.post("/student", createStudentMulter, createStudent)
router.get("/student", getAllStudents)
router.get("/student/:id", getOneStudent)
router.patch("/student/:id", deletOneStudent)
router.patch("/student/", deletAllStudents)


export default router;