import dbConnect from '@/lib/mongo_db/dbConnect';
import { Blog } from '@/lib/mongo_db/models/Blog';

export async function GET(req) {
  dbConnect()
  try {
    const blogs = await Blog.find()
    return Response.json({ "success": true, "message": blogs })
  }
  catch (err) {
    return Response.json({ "success": false, "message": "Somthing went wrong" })
  }
}

export async function POST(req) {
  dbConnect()
  try {
    const { title, description, slug, author } = await req.json()
    let blog = await Blog.create({ title, description, slug, author })
    return Response.json({ "success": true, "message": blog })
  }
  catch (err) {
    return Response.json({ "success": false, "message": "Somthing went wrong" })
  }
}