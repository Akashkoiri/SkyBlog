import styles from "@/styles/blogPost.module.css"

export async function getBlogs(post) {
    const res = await fetch(`http://localhost:3000/api/blogs/${post}`, {cache : "no-store"})
    return res.json()
}

export default async function blogPost({ params }) {
    const post = decodeURI(params.post)
    const { success, message } = await getBlogs(post)
    return (
        <div className={styles.container}>
            {success ?
                <main className={styles.main}>
                    <h1>{message.title}</h1>
                    <p>{message.description}</p>
                    <p className={styles.author}>-{message.author}</p>
                </main>
                : <p>{message}</p>}
        </div>
    )
}
