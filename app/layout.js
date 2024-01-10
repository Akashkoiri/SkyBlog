import { Inter } from 'next/font/google'
// 3rd party libraries
import Navbar from '@/lib/components/navbar'
import { ToastContainer } from '@/lib/components/nextToastify'
import NextTopLoader from 'nextjs-toploader';
// CSS Files
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
        <NextTopLoader />
        <Navbar />
        {children}
        <ToastContainer />
      </body>
    </html>
  )
}
