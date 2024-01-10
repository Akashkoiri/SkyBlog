import styles from "@/styles/blog.module.css"
import Link from "next/link"

async function getData() {
  const res = await fetch("http://localhost:3000/api/blogs", { cache: 'no-store' })
  return res.json()
}

export default async function Blog() {
  const {success, message} = await getData()
  
  return (
    <div className={styles.container}>
      <main className={styles.main}>

        <h1>Blogs</h1>

        {success? message.map((blog) => {
          return <div className={styles.blogItem} key={blog.slug}>
            <Link href={`/blogpost/${blog.slug}`}>
              <h3>{blog.title}</h3>
              <p>{blog.description.substr(0, 150)}</p>
            </Link>
          </div>
        }) : <p>Somthing went wrong</p>}

      </main>
    </div>
  )
}
