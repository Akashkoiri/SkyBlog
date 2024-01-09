import { promises as fs } from 'fs'


export async function GET(req, { params }) {
    const { slug } = params;

    try {
        var file = await fs.readFile(process.cwd() + `/db/blogData/${slug}.json`, 'utf-8');
    } catch {
        return Response.json({ "Error": "No such blog found" })
    }

    return Response.json(JSON.parse(file))
}
