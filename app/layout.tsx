import './globals.css'
import type { Metadata } from 'next'

import { Poppins, Kaushan_Script, Permanent_Marker } from 'next/font/google'
const poppins = Poppins({ subsets: ['devanagari', 'latin', 'latin-ext'], weight: [ '100', '200', '300', '400', '500', '600', '700', '800', '900' ] })
const kaushan_script = Kaushan_Script({subsets:['latin'], weight: ['400']})
const permanent_marker = Permanent_Marker({subsets:['latin'], weight: ['400']})

import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Kenani',
  description: 'Generated by create next app',
}
// Dynamic metadata
// export async function generateMetadata({ params }) {
//   return {
//     title: {
//       default: 'Kenani'
//     }
//   }
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}

      </body>
    </html>
  )
}
