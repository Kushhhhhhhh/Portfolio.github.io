import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata = {
  title: 'Kush Sharma',
  description: 'Personal Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark, light">
  <body className="flex flex-col min-h-screen">
    <Navbar className="flex-shrink-0" />

    <main className="flex-grow relative overflow-hidden">
      {children}
    </main>

    <Footer className="flex-shrink-0" />
  </body>
</html>

  )
}
