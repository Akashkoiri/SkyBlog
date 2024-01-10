import dbConnect from '@/lib/mongo/dbConnect';
import { Blog } from '@/lib/mongo/models/Blog';

export async function GET() {
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