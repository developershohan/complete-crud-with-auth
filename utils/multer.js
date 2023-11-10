import multer from "multer";

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		if (file.fieldname === "studentPhoto") {
			cb(null, "public/images/students");
		}
		if (file.fieldname === "bookPhoto") {
			cb(null, "public/images/books");
		}
	},
	filename: (req, file, cb) => {
		cb(
			null,
			Date.now() +
				"_" +
				Math.round(Math.random() * 1000000) +
				"_" +
				file.originalname
		);
	},
});

export const createStudentMulter = multer({ storage }).single("studentPhoto");
export const createBookMulter = multer({ storage }).single("bookPhoto");

