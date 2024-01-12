'use client' // Error components must be Client Components

import { useEffect } from "react"
import styles from '@/styles/error.module.css'

export default function Error({ error, reset }) {
    useEffect(() => {
        console.log(error.message)
    }, [error])

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h2>Something went wrong!</h2>
                <button className={styles.err_button} onClick={() => reset()}>Try again</button>
            </main>
        </div>
    )
}