import { Inter } from 'next/font/google'
//Auth-Session
import SessionProvider from "@/lib/components/SessionProvider"
import { getServerSession } from 'next-auth';
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

export default async function RootLayout({ children }) {
  const session = await getServerSession()
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <NextTopLoader />
          <Navbar />
          <ToastContainer />
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
