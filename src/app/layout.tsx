import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import GlobalSearch from '@/components/GlobalSearch'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lucera 2 Knowledge Base',
  description: 'Comprehensive knowledge base for Lucera 2 server administration and configuration',
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
          defaultTheme="dark"
          storageKey="lucera-theme"
        >
          <div className="min-h-screen bg-gray-900">
            {/* Header with Global Search */}
            <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900/95 backdrop-blur-sm">
              <div className="mx-auto max-w-7xl px-4 py-3">
                <GlobalSearch />
              </div>
            </header>

            {/* Main Content */}
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
} 