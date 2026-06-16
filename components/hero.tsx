"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

export function Hero() {
  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "99.9%", label: "Deployment Reliability" },
    { value: "24/7", label: "Technical Support" },
    { value: "100%", label: "Custom Solutions" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-white pt-32 pb-20">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-1/2 -translate-x-1/2 h-100 w-150 rounded-full bg-slate-200/20 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto text-center"
        >
          {/* Tagline */}
          <motion.div variants={itemVariants}>
            <p className="text-sm font-mono text-slate-500 tracking-[0.3em] uppercase">
              The platform for modern teams
            </p>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className="mt-6">
            <h1 className="text-5xl md:text-6xl lg:text-5rem font-black leading-tight text-slate-900">
              Build, Scale & Automate
              <br />
              <span className="bg-linear-to-r from-blue-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Your Business              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mt-8 text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed"
          >
            Your toolkit to stop configuring and start building. From office
            networking and enterprise servers to ERP systems, web platforms,
            mobile apps, cloud deployments, and DevOps automation.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4 mt-10"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
    px-8 py-4
    rounded-xl
    bg-black
    text-white
    font-semibold
    hover:bg-neutral-800
    transition-all
    inline-flex
    items-center
    justify-center
  "
            >
              Contact Us
            </motion.a>

            <motion.a
              href="#services"

              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
px-8 py-4
rounded-xl
border
border-slate-200
bg-white
text-slate-700
hover:bg-slate-50
hover:border-slate-300
transition-all
font-semibold
"
            >
              Explore Services
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Dashboard Card */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-20 max-w-6xl mx-auto"
        >
          {/* Glow */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-10 h-[350px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
          </div>

          {/* Card */}
          <div
            className="
            rounded-3xl
            overflow-hidden
            border
            border-slate-700
            bg-[#0f172a]
            shadow-2xl
            shadow-blue-500/20
          "
          >
            {/* Window Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700">
              {/* <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" /> */}
            </div>

            <Image
              src="/vscode-preview.png"
              alt="Dashboard Preview"
              width={1600}
              height={900}
              className="w-full"
              priority
            />
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700">
              {/* <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" /> */}
            </div>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-slate-500 font-medium"
        >
          <span>.NET Core</span>
          <span>React</span>
          <span>Azure</span>
          <span>AWS</span>
          <span>Docker</span>
          <span>Kubernetes</span>
          <span>MS SQL</span>
        </motion.div>
      </div>
    </section>
  );
}
