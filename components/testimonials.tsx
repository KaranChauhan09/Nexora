// 'use client'

// import { motion } from 'framer-motion'

// export function Testimonials() {
//   const testimonials = [
//     {
//       name: 'Rajesh Kumar',
//       company: 'TechCorp Industries',
//       role: 'CTO',
//       text: 'Optimus Technologies transformed our entire infrastructure. Their expertise in both networking and software development was exactly what we needed. Exceptional professionalism and delivery quality.',
//       image: '👨‍💼',
//     },
//     {
//       name: 'Priya Sharma',
//       company: 'Healthcare Solutions Ltd',
//       role: 'Operations Director',
//       text: 'From server setup to application development, they handled everything seamlessly. Their 24/7 support has been invaluable. Highly recommend for enterprise infrastructure projects.',
//       image: '👩‍💼',
//     },
//     {
//       name: 'Amit Patel',
//       company: 'Manufacturing Global',
//       role: 'IT Manager',
//       text: 'The team&apos;s DevOps expertise automated our entire deployment process. Deployment reliability increased to 99.9%. They truly understand enterprise-scale infrastructure.',
//       image: '👨‍💼',
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
//     <section className="py-20 md:py-32 relative overflow-hidden mesh-gradient">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: '-100px' }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
//             Client Testimonials
//           </h2>
//           <p className="text-lg text-muted max-w-2xl mx-auto">
//             What our satisfied clients are saying about us
//           </p>
//         </motion.div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: '-100px' }}
//           className="grid grid-cols-1 md:grid-cols-3 gap-6"
//         >
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               whileHover={{ y: -5 }}
//               className="glass-effect rounded-xl p-8 border border-border hover:border-primary/50 transition-all"
//             >
//               <div className="flex items-center space-x-4 mb-6">
//                 <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl">
//                   {testimonial.image}
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-foreground">
//                     {testimonial.name}
//                   </h4>
//                   <p className="text-sm text-muted">
//                     {testimonial.role} @ {testimonial.company}
//                   </p>
//                 </div>
//               </div>

//               <p className="text-muted leading-relaxed italic">
//                 &quot;{testimonial.text}&quot;
//               </p>

//               <div className="flex items-center space-x-1 mt-6 pt-6 border-t border-border">
//                 {[...Array(5)].map((_, i) => (
//                   <span key={i} className="text-accent">
//                     ⭐
//                   </span>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }
