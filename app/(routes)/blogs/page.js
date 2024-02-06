import styles from "@/styles/blog.module.css";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { getBlogs } from "@/lib/actions/blogs/getBlogs";


export default async function Blog() {
  const session = await getServerSession();
  if (!session) {
    redirect("/api/auth/signin");
  }

  const { success, message } = await getBlogs();
  
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Blogs</h1>
        {/* Todo: Add a button to create a new blog */}
        
        {/* end */}
        {success ? (
          message.map((blog) => {
            return (
              <div className={styles.blogItem} key={blog.slug}>
                <Link href={`/blogs/${blog.slug}`}>
                  <h3>{blog.title}</h3>
                  <p>{blog.description.substr(0, 150)}</p>
                </Link>
              </div>
            );
          })
        ) : (
          <p>{message}</p>
        )}
      </main>
    </div>
  );
}
