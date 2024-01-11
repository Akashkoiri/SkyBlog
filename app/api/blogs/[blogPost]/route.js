import dbConnect from '@/lib/mongo_db/dbConnect';
import { Blog } from '@/lib/mongo_db/models/Blog';


export async function GET(req, { params }) {
    dbConnect()
    const { blogPost } = params
    try {
        const post = await Blog.findOne({ slug: blogPost })
        if (!post) {
            return Response.json({ "success": false, "message": "No such blog found" })
        }
        return Response.json({ "success": true, "message": post })
    } catch (err) {
        return Response.json({ "success": false, "message": "Somthing went wrong" })
    }
}



