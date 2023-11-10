import express from "express"
import { createBook } from "../controllers/bookController.js"
import { createBookMulter } from "../utils/multer.js"

const router = express.Router()

router.post("/book",createBookMulter,createBook)

export default router