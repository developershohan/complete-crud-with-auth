import express from "express";
import { createStudent, deletAllStudents, deletOneStudent, getAllStudents, getOneStudent, updateStudents } from "../controllers/studentController.js";
import { createStudentMulter } from "../utils/multer.js";

const router = express.Router()

router.post("/student", createStudentMulter, createStudent)
router.get("/student", getAllStudents)
router.get("/student/:id", getOneStudent)
router.delete("/student/:id", deletOneStudent)
router.patch("/student/:id",createStudentMulter, updateStudents)
router.delete("/student/", deletAllStudents)


export default router;