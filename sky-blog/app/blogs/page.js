"use client"

import styles from "@/styles/blog.module.css"
import Link from "next/link"
import { useEffect, useState } from "react"


export default function Blog() {

  let [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/api/blogs')
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data)
      })
  }, [])

  return (
    <div className={styles.container}>
      <main className={styles.main}>

        <h1>Blogs</h1>

        {blogs.map((item) => {
          return <div className={styles.blogItem} key={item.slug}>
            <Link href={`/blogpost/${item.slug}`}>
              <h4>{item.title}</h4>
              <p>{item.description.substr(0, 150)}</p>
            </Link>
          </div>
        })}

      </main>
    </div>
  )
}
