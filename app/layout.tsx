import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Source_Code_Pro } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin']
})
const sourceCodePro = Source_Code_Pro({
  variable: '--font-source-code-pro',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Nexora Technologies",
  description: 'Complete IT Infrastructure & Software Development Solutions. From office networking and enterprise servers to ERP systems, web platforms, mobile apps, and DevOps automation.',
  keywords: 'IT solutions, cloud infrastructure, software development, DevOps, enterprise networking',
  generator: 'v0.app',
  icons: {
    icon: '/NX.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#FFFFFF',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${sourceCodePro.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
