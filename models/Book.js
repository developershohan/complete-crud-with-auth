import mongoose, { model } from "mongoose";

const bookSchema = mongoose.Schema({
    name:{
        type: String,
        trim: true
    },
    authorName:{
        type: String,
        trim: true
    },
    photo:{
        type: String,
        default:null
    },
    status:{
        type:Boolean,
        default:true
    }
    
},
{
    timestamps: true
}
)
export default mongoose.model("Book", bookSchema)