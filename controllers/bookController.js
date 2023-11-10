import Book from "../models/book.js";

let bookPhoto = null;
export const createBook = async (req, res) => {
	const { name, authorName } = req.body;

	if (req.file?.filename) {
		bookPhoto = req.file.filename;
	}
	const data = await Book.create({
		name,
		authorName,
		photo: bookPhoto,
	});
	res.status(200).json(data);
};
