import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kush Sharma',
  description: 'Personal Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
  <body classNameName="flex flex-col min-h-screen">
    <Navbar className="flex-shrink-0" />

    <main className="flex-grow relative overflow-hidden">
      {children}
    </main>

    <Footer className="flex-shrink-0" />
  </body>
</html>

  )
}
