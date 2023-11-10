/**
 * Get all student data
 */

import Student from "../models/student.js";
let studentPhoto = null;

/**
 * @DESC POST STUDENT
 * @ROUTE STUDENT
 * @METHOD POST
 * @ACCESS PUBLIC
 */

export const createStudent = async (req, res) => {
	const { name, roll } = req.body;



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
/**
 * @DESC GET ALL STUDENT
 * @ROUTE STUDENT
 * @METHOD POST
 * @ACCESS PUBLIC
 */

export const getAllStudents = async (req,res) =>{
    const data = await Student.find()

if (data.length === 0) {
	
	return res.status(404).json({message: "student not found", Student:[]});
}

res.status(200).json({message:`Total Students ${data.length}`,Student:data});
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
// delete all students

export const deletAllStudents = async (req,res) =>{

    const data = await Student.deleteMany()
    res.status(200).json(data);

}

// get update students

export const updateStudents = async(req,res) =>{
	const {id} = req.params;
	const { name, roll } = req.body;
	
	if (req.file?.filename) {
		studentPhoto = req.file.filename;
	}
	const data = await Student.findByIdAndUpdate(id, { name, roll, photo: studentPhoto }, {new:true})
	res.status(200).json(data);
}