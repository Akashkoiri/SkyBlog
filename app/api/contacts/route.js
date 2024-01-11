import dbConnect from '@/lib/mongo_db/dbConnect';
import { Contact } from '@/lib/mongo_db/models/Contact';

export async function GET() {
    dbConnect()
    try {
        const contacts = await Contact.find()
        return Response.json({ "success": true, "message": contacts })
    }
    catch (err) {
        return Response.json({ "success": false, "message": "Somthing went wrong" })
    }
}

export async function POST(req) {
    dbConnect()
    try {
        const { name, email, message } = await req.json()
        let contact = await Contact.create({ name, email, message })
        return Response.json({ "success": true, "message": contact })
    }
    catch (err) {
        return Response.json({ "success": false, "message": "Somthing went wrong" })
    }
}
