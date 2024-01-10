import mongoose from 'mongoose'

const mongo_url = process.env.mongo_url

if (!mongo_url) {
  throw new Error(
    'Please define the mongo_url environment variable inside .env.local'
  )
}

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    try {
      cached.promise = mongoose.connect(mongo_url).then(mongoose => {
        console.log("db is Connected")
        return mongoose
      })
    } catch (error) {
      handleError(error);
    }
  }
  cached.conn = await cached.promise
  return cached.conn
}

export default dbConnect