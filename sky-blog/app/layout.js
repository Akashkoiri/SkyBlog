import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import { ToastContainer } from '@/components/nextToastify'
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SkyBlog',
  description: 'A blog for coders',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <ToastContainer/>
      </body>
    </html>
  )
}
