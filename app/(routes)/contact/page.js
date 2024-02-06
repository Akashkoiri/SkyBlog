import ContactForm from './contactForm'
import Image from 'next/image'
import styles from '@/styles/contact.module.css'
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';


export default async function Contact() {
  const session = await getServerSession();
  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div className={styles.contact_form}>
      <h1>Contact Us</h1>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.content}>
            <ContactForm />
          </div>
          <div className={styles.form_img}>
            <Image src="/contact_us.png"
              width={330}
              height={284}
              style={{
                borderRadius: "5px"
              }}
              alt="Contact Us"
              priority={true} />
          </div>
        </div>
      </div>
    </div>
  )
}
