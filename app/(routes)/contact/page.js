import ContactForm from './contactForm'
import Image from 'next/image'
import styles from '@/styles/contact.module.css'

const Contact = () => {
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
              width={284}
              height={178}
              alt="Contact Us"
              priority={true} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact