'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#' },
        { label: 'Services', href: '#services' },
        // { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Infrastructure', href: '#' },
        { label: 'Cloud & DevOps', href: '#' },
        { label: 'Web Development', href: '#' },
        { label: 'Mobile Apps', href: '#' },
      ],
    },
    // {
    //   title: 'Resources',
    //   links: [
    //     { label: 'Blog', href: '#' },
    //     { label: 'Documentation', href: '#' },
    //     { label: 'Case Studies', href: '#' },
    //     { label: 'FAQ', href: '#' },
    //   ],
    // },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Cookie Policy', href: '#' },
      ],
    },
  ]

  const socialLinks = [
    { icon: '𝕏', href: '#', label: 'Twitter' },
    { icon: 'in', href: '#', label: 'LinkedIn' },
    { icon: 'f', href: '#', label: 'Facebook' },
    { icon: 'ig', href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="relative overflow-hidden border-t border-border bg-linear-to-b from-background via-background to-black/20 mesh-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            className="col-span-2 md:col-span-1"
          >
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-border flex items-center justify-center">
                <div className="w-8 h-8 bg-background flex items-center justify-center rounded-md">
                  <span className="text-lg font-bold text-transparent bg-clip-text bg-linear-to-r from-primary via-secondary to-accent">
                    Nx
                  </span>
                </div>
              </div>
              <span className="font-semibold text-foreground">Nexora</span>
            </Link>
            <p className="text-sm text-muted mb-6">
              Complete IT Infrastructure & Software Development Solutions
            </p>
            {/* Social Links */}
            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-muted hover:text-primary hover:border-primary/50 transition-colors"
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: (index + 1) * 0.1 }}
            >
              <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-8" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-col md:flex-row justify-between items-center text-sm text-muted"
        >
          <p>
            © {currentYear} Nexora Solutions Technologies. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full opacity-5 blur-3xl bg-primary mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-5 blur-3xl bg-secondary mix-blend-screen pointer-events-none" />
    </footer>
  )
}
