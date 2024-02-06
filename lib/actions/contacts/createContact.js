"use server"

import dbConnect from "@/lib/mongo_db/dbConnect"
import { Contact } from "@/lib/mongo_db/models/Contact"

export async function createContact(data) {
    dbConnect()
    try {
        const { name, email, message } = data
        let contact = await Contact.create({ name, email, message })
        return JSON.stringify({ "success": true, "message": contact })
    }
    catch (err) {
        return JSON.stringify({ "success": false, "message": "Somthing went wrong" })
    }
}
