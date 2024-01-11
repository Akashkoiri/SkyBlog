'use client'

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import FormSchema from "./FormSchema"
import { showToast } from "@/lib/components/nextToastify"
import styles from '@/styles/contact.module.css'
import SyncLoader from "react-spinners/SyncLoader";

const dynamic = 'force-dynamic'

const ContactForm = () => {
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, formState, reset } = useForm({
        defaultValues: {
            name: "",
            email: "",
            message: ""
        },
        resolver: zodResolver(FormSchema)
    })
    // Submit Handler
    async function formSubmit(data) {
        if (!loading) {
            setLoading(true)
            // API Calls
            const res = await fetch('/api/contacts', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(res => res.json())

            setLoading(false)
            reset()
            res.success ? showToast(res.success) : showToast(res.success, res.message)
        }

    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(formSubmit)} noValidate>
            <div className={styles.inputWraper}>
                <input className={styles.input} type='text' placeholder='Enter your name' {...register('name')} />
                <p className={styles.error}>{formState.errors.name?.message}</p>
            </div>
            <div className={styles.inputWraper}>
                <input className={styles.input} type='email' name='email' placeholder='Enter your email' {...register('email')} />
                <p className={styles.error}>{formState.errors.email?.message}</p>
            </div>
            <div className={styles.inputWraper}>
                <textarea className={styles.input} type='text' name='message' placeholder='Enter your message' {...register('message')} />
                <p className={styles.error}>{formState.errors.message?.message}</p>
            </div>
            <button className={styles.submitBtn} type="submit">
                {loading ? <SyncLoader color="#fff" size={8} /> : "Submit"}

            </button>
        </form>
    )
}

export default ContactForm