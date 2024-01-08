import styles from "@/styles/blogPost.module.css"

export async function getBlogs(post) {
    const res = await fetch(`http://localhost:3000/api/blogs/${post}`)
    return res.json()
}

export default async function blogPost ({ params }) {
    const post = decodeURI(params.post)
    const blog = await getBlogs(post)

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
