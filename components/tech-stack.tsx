'use client'

import { motion } from 'framer-motion'

export function TechStack() {
  const tech = [
    { category: 'Frontend', items: ['React', 'Next.js', 'Angular', 'Flutter'] },
    { category: 'Backend', items: ['.NET', 'Node.js', 'PostgreSQL', 'SQL Server', 'MySQL'] },
    { category: 'Cloud & DevOps', items: ['Azure', 'AWS', 'Docker', 'Kubernetes', 'Nginx', 'GitHub Actions', 'Ansible' ,'Jenkins','Gitlab'] },
    { category: 'Infrastructure', items: ['Windows Server', 'Linux', 'VPN', 'Firewalls', 'Network Security', 'Virtualization'] },
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            Technology Stack
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Modern technologies for enterprise-grade solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {tech.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-effect rounded-xl p-6 border border-border hover:border-primary/50 transition-all"
            >
              <h3 className="text-lg font-semibold mb-4 text-primary">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-muted hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
