import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Deedts Construct',
  description: 'Website under construction',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
