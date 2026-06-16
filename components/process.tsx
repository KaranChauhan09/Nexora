'use client'

import { motion } from 'framer-motion'

export function Process() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Consultation',
      description: 'We understand your business, challenges, and technology goals through detailed consultation.',
    },
    {
      number: '02',
      title: 'Architecture & Planning',
      description: 'Create comprehensive technical architecture and implementation roadmap for your project.',
    },
    {
      number: '03',
      title: 'Infrastructure Setup',
      description: 'Configure and deploy networking, servers, cloud infrastructure, and security systems.',
    },
    {
      number: '04',
      title: 'Development & Integration',
      description: 'Build applications, integrate systems, and develop custom solutions tailored to your needs.',
    },
    {
      number: '05',
      title: 'Testing & Optimization',
      description: 'Comprehensive testing, performance optimization, and quality assurance across all systems.',
    },
    {
      number: '06',
      title: 'Deployment & Support',
      description: 'Production deployment and ongoing support to ensure continuous optimal performance.',
    },
  ]

  return (
    <section id="process" className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            Our Process
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            A structured approach to deliver results consistently
          </p>
        </motion.div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              className="flex flex-col md:flex-row gap-8 items-center"
            >
              {/* Left side - content for even, number for odd */}
              {index % 2 === 0 ? (
                <>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex-1 glass-effect rounded-xl p-8 border border-border hover:border-primary/50 transition-all"
                  >
                    <h3 className="text-2xl font-semibold mb-3 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 text-3xl font-bold text-white shadow-lg shadow-primary/30"
                  >
                    {step.number}
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-24 h-24 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0 text-3xl font-bold text-white shadow-lg shadow-secondary/30"
                  >
                    {step.number}
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex-1 glass-effect rounded-xl p-8 border border-border hover:border-secondary/50 transition-all"
                  >
                    <h3 className="text-2xl font-semibold mb-3 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
