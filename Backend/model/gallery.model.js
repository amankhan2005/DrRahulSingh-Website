 import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
    postedBy: { type: String, required: true },
    imageUrl: { type: String, required: true },
    category: { 
        type: String, 
        enum: ["photo", "video", "news", "rewards"], 
        default: "photo" 
    }
}, { timestamps: true });

export default mongoose.model("Gallery", gallerySchema);
