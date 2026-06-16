'use client'

import { motion } from 'framer-motion'
import logisticsIcon from "@/app/icon/delivery-truck.png";
import manufacturingIcon from "@/app/icon/enterprise.png";
import enterpriseIcon from "@/app/icon/industry.png";
import healthcareIcon from "@/app/icon/medical-test.png";
import educationIcon from "@/app/icon/mortarboard.png";
import servicesIcon from "@/app/icon/professional-services.png";
import retailIcon from "@/app/icon/retailer.png";
import startupIcon from "@/app/icon/rocket.png";
import Image from "next/image";
export function Industries() {
  const industries = [
    { name: "Healthcare", icon: healthcareIcon },
    { name: "Manufacturing", icon: manufacturingIcon },
    { name: "Education", icon: educationIcon },
    { name: "Logistics", icon: logisticsIcon },
    { name: "Retail", icon: retailIcon },
    { name: "Startups", icon: startupIcon },
    { name: "Professional Services", icon: servicesIcon },
    { name: "Enterprises", icon: enterpriseIcon },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
    <section id="industries" className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Expertise across diverse sectors with proven solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect rounded-xl p-8 text-center border border-border hover:border-primary/50 transition-all group cursor-pointer"
            >
              <div className="mb-4 flex justify-center">
                <Image
                  src={industry.icon}
                  alt={industry.name}
                  width={48}
                  height={48}
                  className="group-hover:scale-110 transition-transform"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {industry.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
