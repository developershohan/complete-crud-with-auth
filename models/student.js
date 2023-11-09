import mongoose from "mongoose";

const studentSchema = mongoose.Schema(
	{
		name: {
			type: String,
			trim: true,
		},
        roll: {
			type: String,
			trim: true,
        },
        photo: {
			type: String,
			default:null
        },
		stuts: {
			type: Boolean,
			default: true,
		},
        
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("Student", studentSchema);
