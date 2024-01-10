import dbConnect from '@/lib/mongo/dbConnect';
import { Blog } from '@/lib/mongo/models/Blog';


export async function GET(req, { params }) {
    dbConnect()
    const { slug } = params

    try {
        const blog = await Blog.findOne({ slug: slug })
        if (!blog) {
            return Response.json({ "success": false, "message": "No such blog found" })
        }
        return Response.json({ "success": true, "message": blog })
    } catch (err) {
        return Response.json({ "success": false, "message": "Somthing went wrong" })
    }
}



