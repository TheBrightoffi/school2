import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

type LayoutProps = {
  children: React.ReactNode
  title?: string
}

const Layout: React.FC<LayoutProps> = ({ children, title = 'School Management System' }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="bg-blue-600 text-white p-4">
        <nav>
          <Link href="/" className="mr-4">Home</Link>
          <Link href="/students" className="mr-4">Students</Link>
          <Link href="/employees" className="mr-4">Employees</Link>
          <Link href="/classes" className="mr-4">Classes</Link>
          {/* Add more navigation links as needed */}
        </nav>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-gray-200 p-4 text-center">
        <p>&copy; 2023 School Management System. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Layout