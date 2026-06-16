'use client'

import { motion } from 'framer-motion'

export function Services() {
  const services = [
    {
      title: 'Infrastructure & Networking',
      items: [
        'Office LAN Setup',
        'Enterprise Networking',
        'Server Installation',
        'Firewall Configuration',
        'VPN Setup',
        'Network Security',
      ],
    },
    {
      title: 'Cloud & DevOps',
      items: [
        'CI/CD Pipelines',
        'Docker & Kubernetes',
        'Azure & AWS',
        'Monitoring & Alerts',
        'Infrastructure Automation',
        'Observability',
        'High Availability',
      ],
    },
    {
      title: 'Web Development',
      items: [
        'Corporate Websites',
        'SaaS Platforms',
        'Admin Dashboards',
        'E-Commerce Solutions',
        'Custom Applications',
        'API Development',
      ],
    },
    {
      title: 'Enterprise Solutions',
      items: [
        'ERP Systems',
        'HRMS Platforms',
        'CRM Software',
        'Inventory Management',
        'Business Automation',
        'Custom Solutions',
      ],
    },
    {
      title: 'Mobile Development',
      items: [
        'Android Apps',
        'iOS Apps',
        'Flutter Development',
        'Cross-Platform Apps',
        'Progressive Web Apps',
        'Maintenance & Support',
      ],
    },
    {
      title: 'Maintenance & Support',
      items: [
        'Infrastructure Monitoring',
        'Server Maintenance',
        'Security Audits',
        'Performance Optimization',
        'Application Support',
        '24/7 Technical Support',
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Complete technology solutions tailored to your business needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, borderColor: 'rgba(79, 70, 229, 0.5)' }}
              className="glass-effect rounded-xl p-8 border border-border hover:border-primary/50 transition-all group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary p-0.5 mb-6 group-hover:shadow-lg group-hover:shadow-primary/50 transition-all">
                <div className="w-full h-full bg-background rounded-md flex items-center justify-center">
                  <div className="text-xl">→</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {service.title}
              </h3>
              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-muted flex items-center space-x-2 group/item"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary group-hover/item:scale-150 transition-transform" />
                    <span className="group-hover/item:text-foreground transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
