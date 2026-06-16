'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Process', href: '#process' },
    { label: 'Why Us', href: '#why-us' },
    // { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]


  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-white border-2 border-gray-300 flex items-center justify-center">
              <span className="text-lg font-bold text-transparent bg-clip-text bg-linear-to-r from-primary via-secondary to-accent">
                Nx
              </span>
            </div>
            <span className="hidden sm:inline font-semibold text-foreground">Nexora</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm text-slate-500 hover:text-foreground transition-colors rounded-lg hover:bg-gray-100"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:inline-block px-6 py-2 rounded-lg bg-black text-white font-semibold text-sm hover:bg-black/90 transition-colors"
          >
            Start creating
          </motion.button> */}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden pb-4 space-y-2"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm text-slate-500 hover:text-foreground rounded-lg hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button className="w-full px-4 py-2 rounded-lg bg-black text-white font-semibold text-sm hover:bg-black/90 transition-colors mt-4">
              Start creating
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
