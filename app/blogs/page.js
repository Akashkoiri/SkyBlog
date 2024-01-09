import styles from "@/styles/blog.module.css"
import Link from "next/link"

async function getData() {
  const res = await fetch('http://localhost:3000/api/blogs')
  return res.json()
}

export default async function Blog() {
  const blogs = await getData()

  return (
    <div className={styles.container}>
      <main className={styles.main}>

        <h1>Blogs</h1>

        {blogs.map((item) => {
          return <div className={styles.blogItem} key={item.slug}>
            <Link href={`/blogpost/${item.slug}`}>
              <h3>{item.title}</h3>
              <p>{item.description.substr(0, 150)}</p>
            </Link>
          </div>
        })}

      </main>
    </div>
  )
}
