import Link from 'next/link'
import styles from '@/styles/navBar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.mainnav}>
      <ul>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/blogs'}>Blogs</Link></li>
        <li><Link href={'/about'}>About</Link></li>
        <li><Link href={'/contact'}>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar