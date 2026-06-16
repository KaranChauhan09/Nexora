'use client'

import { motion } from 'framer-motion'

export function CTA() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-10 w-96 h-96 rounded-full opacity-10 blur-3xl animated-gradient" />
      <div className="absolute bottom-0 right-10 w-96 h-96 rounded-full opacity-10 blur-3xl animated-gradient" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-foreground via-primary to-secondary">
              Ready To Modernize Your Business Technology?
            </span>
          </h2>

          <p className="text-lg text-muted mb-10 max-w-2xl mx-auto">
            Lets discuss your infrastructure, software, cloud, and automation requirements. Nexora is ready to design the perfect solution for your business.
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
            >
              Schedule Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl border border-border glass-effect font-semibold hover:bg-white/10 transition-colors"
            >
              Request Proposal
            </motion.button>
          </div> */}
        </motion.div>
      </div>
    </section>
  )
}
