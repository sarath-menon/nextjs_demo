import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Systems Development Tool',
  description: 'Systems development tool for Hard tech',
  icons: {
    icon: [
      {
        // media: "(prefers-color-scheme: light)",
        url: "/next.svg",
        href: "/next.svg",
      },
      // {
      //   media: "(prefers-color-scheme: dark)",
      //   url: "/favicon.ico",
      //   href: "/favicon.ico",
      // }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
          storageKey='simplicyti-theme'
        >

          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
