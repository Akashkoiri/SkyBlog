import styles from "@/styles/page.module.css";
import Link from "next/link";
import { getBlogs } from "@/lib/actions/blogs/getBlogs";


export default async function Home() {
  const { success, message } = await getBlogs();

  return (
    <main className={styles.main}>
      <h1>SKY BLOG</h1>
      <div className={styles.grid}>
        <h2 className={styles.latest}>Latest blogs</h2>
        {success ? (
          message.slice(0, 4).map((blog) => {
            return (
              <div className={styles.card} key={blog.slug}>
                <Link href={`/blogs/${blog.slug}`}>
                  <h3>{blog.title}</h3>
                  <p>{blog.description.substr(0, 50)}...</p>
                </Link>
              </div>
            );
          })
        ) : (
          <p>{message}</p>
        )}
      </div>
    </main>
  );
}
