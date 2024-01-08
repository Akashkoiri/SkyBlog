import { promises as fs } from 'fs'

export async function GET() {
    const data = await fs.readdir(process.cwd() + "/db/contactData/")
    return Response.json(data)
}

export async function POST(req) {
    const body = await req.json()
    const len = (await fs.readdir(process.cwd() + "/db/contactData/")).length
    console.log(len)
    await fs.writeFile(process.cwd() + `/db/contactData/${len + 1}.json`, JSON.stringify(body))
    return Response.json({"Success": "Data has been saved"})
}
