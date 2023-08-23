import './globals.css'
import { Inter } from 'next/font/google'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SDMS',
  description: 'Capstone Project For PreRequisites in Graduation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
