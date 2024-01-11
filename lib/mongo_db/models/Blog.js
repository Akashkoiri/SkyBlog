import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: String,
    description: String,
    slug: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    }
})

export const Blog = mongoose.models.blogs || mongoose.model("blogs", blogSchema)
