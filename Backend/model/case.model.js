import mongoose from "mongoose";

const caseSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        // description: { type: String, required: true },
        imageUrl: { type: String, required: true },
    },
    { timestamps: true } 
);

const Case = mongoose.model("Case", caseSchema);

export default Case;
