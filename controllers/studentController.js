/**
 * Get all student data
 */

import Student from "../models/student.js";

export const createStudent = async (req, res) => {
	const { name, roll } = req.body;

	let studentPhoto = null;

	if (req.file?.filename) {
		studentPhoto = req.file.filename;
	}
	const data = await Student.create({
		name,
		roll,
		photo: studentPhoto
	});

	res.status(200).json(data);
};
// get all students

export const getAllStudents = async (req,res) =>{
    const data = await Student.find()
    res.status(200).json(data);

}
// get one students

export const getOneStudent = async (req,res) =>{
    const {id} = req.params
    const data = await Student.findById(id)
    res.status(200).json(data);

}
// get one students

export const deletOneStudent = async (req,res) =>{
    const {id} = req.params
    const data = await Student.findByIdAndDelete(id)
    res.status(200).json(data);

}
// get all students

export const deletAllStudents = async (req,res) =>{

    const data = await Student.deleteMany()
    res.status(200).json(data);

}