import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t py-12 max-w-7xl w-full mx-auto">
    <div className="container">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold">Portfolio</span>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
        <nav className="flex gap-4">
          <Link href="#" className="text-sm text-muted-foreground hover:underline">
            Privacy
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:underline">
            Terms
          </Link>
        </nav>
      </div>
    </div>
  </footer>
  )
}

export default Footer