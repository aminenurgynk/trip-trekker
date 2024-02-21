import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trip Trekker',
  description: 'Trip Trekker UI/UX App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
