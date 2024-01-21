"use client"
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'
import styles from '@/styles/navBar.module.css'

const Navbar = () => {
  const {data: session} = useSession()
  return (
    <nav className={styles.mainnav}>
      <ul>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/blogs'}>Blogs</Link></li>
        <li><Link href={'/about'}>About</Link></li>
        <li><Link href={'/contact'}>Contact</Link></li>
        <li>
          {session ? 
            <p onClick={() => signOut()}>Logout</p> : 
            <p onClick={() => signIn()}>Login</p>
          }
        </li>
      </ul>
    </nav>
  )
}

export default Navbar