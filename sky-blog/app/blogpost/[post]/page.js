"use client"

import styles from "@/styles/blogPost.module.css"
import { useEffect, useState } from "react"

const blogPost = ({ params }) => {
    const post = decodeURI(params.post)
    const [blog, setBlog] = useState({})
    
    useEffect(() => {
        fetch(`/api/blogs/${post}`)
          .then((res) => res.json())
          .then((data) => {
            setBlog(data)
            console.log(data)
          })
      }, [])

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>{blog.title}</h1>
                <p>{blog.description}</p>
                <p className={styles.author}>-{blog.author}</p>
            </main>
        </div>
    )
}

export default blogPost