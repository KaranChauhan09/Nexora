'use client'

import { motion } from 'framer-motion'

export function WhyUs() {
  const reasons = [
    {
      title: 'Infrastructure + Software Expertise',
      description: 'Most companies provide either networking or software. We deliver both comprehensive solutions.',
    },
    {
      title: 'Business-Oriented Approach',
      description: 'Technology aligned with your business goals. Every solution drives measurable business value.',
    },
    {
      title: 'Scalable Architecture',
      description: 'Built for future growth. Our solutions grow with your business without major rebuilds.',
    },
    {
      title: 'Security First',
      description: 'Enterprise-grade security standards. Your data and infrastructure are protected by industry best practices.',
    },
    {
      title: 'Faster Delivery',
      description: 'Agile implementation and rapid deployment. Get to market quickly without sacrificing quality.',
    },
    {
      title: 'Long-Term Partnership',
      description: 'Continuous support after launch. We are committed to your long-term success.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="why-us" className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            Why Choose Nexora
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Unique strengths that set us apart from the competition
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass-effect rounded-xl p-8 border border-border hover:border-secondary/50 transition-all group"
            >
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <span className="text-lg">✓</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {reason.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
