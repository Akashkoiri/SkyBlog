"use client"

import Image from 'next/image'
import { useState } from 'react'
import { toast } from 'react-toastify'
import styles from '@/styles/contact.module.css'


function showToast(data) {
  if (data.success) {
    toast.success('Success', {
      position: "top-right",
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  }
  else {
    toast.error(data.message, {
      position: "top-right",
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  }
}

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleChange(e) {
    if (e.target.name == "name") {
      setName(e.target.value)
    }
    else if (e.target.name == "email") {
      setEmail(e.target.value)
    }
    else if (e.target.name == "message") {
      setMessage(e.target.value)
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    
    const data = await fetch(`${window.location.origin}/api/contact`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, message })
    }).then(res => res.json())
    
    showToast(data)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className={styles.contact_form}>
      <h1>Contact Us</h1>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.content}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <input className={styles.input} value={name} onChange={handleChange} type='text' name='name' placeholder='Enter your name' />
              <input className={styles.input} value={email} onChange={handleChange} type='email' name='email' placeholder='Enter your email' />
              <textarea className={styles.input} value={message} onChange={handleChange} type='text' name='message' placeholder='Enter your message' />
              <button className={styles.submitBtn} type="submit">Submit</button>
            </form>
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