// 'use client'

// import { motion } from 'framer-motion'

// export function Projects() {
//   const projects = [
//     {
//       title: 'Enterprise ERP Platform',
//       description: 'Employee, Inventory & Operations Management',
//       tags: ['ERP', 'Full Stack', '.NET'],
//     },
//     {
//       title: 'Multi-Branch Office Network',
//       description: 'Secure networking and centralized infrastructure',
//       tags: ['Infrastructure', 'Networking', 'Security'],
//     },
//     {
//       title: 'Corporate Business Portal',
//       description: 'Modern responsive web application',
//       tags: ['Web Development', 'React', 'AWS'],
//     },
//     {
//       title: 'Mobile Workforce App',
//       description: 'Cross-platform business application',
//       tags: ['Mobile', 'Flutter', 'Backend'],
//     },
//     {
//       title: 'Cloud Migration Project',
//       description: 'Server and application modernization',
//       tags: ['Cloud', 'Azure', 'Migration'],
//     },
//     {
//       title: 'DevOps Transformation',
//       description: 'CI/CD automation and deployment pipelines',
//       tags: ['DevOps', 'Docker', 'Kubernetes'],
//     },
//   ]

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6 },
//     },
//   }

//   return (
//     <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: '-100px' }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
//             Featured Projects
//           </h2>
//           <p className="text-lg text-muted max-w-2xl mx-auto">
//             Successful implementations across various industries and technologies
//           </p>
//         </motion.div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: '-100px' }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
//         >
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               whileHover={{ y: -10, borderColor: 'rgba(6, 182, 212, 0.5)' }}
//               className="glass-effect rounded-xl p-8 border border-border hover:border-accent/50 transition-all group cursor-pointer overflow-hidden"
//             >
//               {/* Background gradient on hover */}
//               <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

//               <div className="relative z-10">
//                 <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-accent transition-colors">
//                   {project.title}
//                 </h3>
//                 <p className="text-muted mb-6 leading-relaxed">
//                   {project.description}
//                 </p>

//                 <div className="flex flex-wrap gap-2">
//                   {project.tags.map((tag, idx) => (
//                     <span
//                       key={idx}
//                       className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted group-hover:border-accent/50 group-hover:text-accent transition-colors"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }
