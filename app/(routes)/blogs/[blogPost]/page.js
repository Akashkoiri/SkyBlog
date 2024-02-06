import { getBlogs } from "@/lib/actions/blogs/getBlogs";
import styles from "@/styles/blogPost.module.css";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export default async function blogPost({ params }) {
  const session = await getServerSession();
  if (!session) {
    redirect("/api/auth/signin");
  }

  const post = decodeURI(params.blogPost);
  const { success, message } = await getBlogs(post);

  return (
    <div className={styles.container}>
      {success ? (
        <main className={styles.main}>
          <h1>{message.title}</h1>
          <p>{message.description}</p>
          <p className={styles.author}>-{message.author}</p>
        </main>
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
}
