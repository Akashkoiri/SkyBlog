"use server";

import dbConnect from "@/lib/mongo_db/dbConnect";
import { Blog } from "@/lib/mongo_db/models/Blog";


export async function getBlogs(post) {
  dbConnect();
  try {
    if (post) {
      const resPost = await Blog.findOne({ slug: post });
      if (!resPost) {
        return { success: false, message: "No such blog found" };
      }
      return { success: true, message: resPost };
    }
    // return all blogs
    const blogs = await Blog.find();
    return { success: true, message: blogs };
  } catch (err) {
    return { success: false, message: "Something went wrong" };
  }
}
