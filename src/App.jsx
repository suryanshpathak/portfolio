import React from 'react';
// 1. Import motion and AnimatePresence from framer-motion
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const profile = {
    name: "Suryansh Pathak",
    role: "Full-Stack Developer & Software Engineer",
    bio: "Passionate Full-Stack Developer skilled in the MERN stack, Python, C++, and Data Structures & Algorithms. Experienced in cross-functional team leadership, executive presentation delivery, and scalable web application development.",
    email: "suryansh.pathak@example.com",
    github: "https://github.com/suryanshpathak",
    linkedin: "https://linkedin.com/in/suryanshpathak",
    skills: {
      "Development & Stack": ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB", "SQL", "Full-Stack Architecture"],
      "Programming & Core CS": ["C++", "Python", "Data Structures & Algorithms (DSA)", "Database Management (SQL)", "OOP"],
      "Leadership & Communication": ["Team Coordination", "Meeting Management", "Technical Presentations", "Strategic Communication", "Cross-Functional Collaboration"]
    },
    projects: [
      {
        title: "Environmental Conservation Platform",
        description: "A full-stack interactive platform designed to raise awareness about environmental challenges and sustainable practices with dynamic content rendering.",
        tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
        githubLink: "#",
        liveLink: "#"
      },
      {
        title: "DSA Visualizer & Problem Solver",
        description: "An algorithmic tool built using Python and C++ logic to visualize complex Data Structures and Algorithms for optimized learning.",
        tech: ["Python", "C++", "Data Structures", "Algorithms"],
        githubLink: "#",
        liveLink: "#"
      }
    ],
    experience: [
      {
        period: "Internship",
        role: "Activity Director Intern",
        organization: "Quick Heal",
        highlights: [
          "Coordinated and facilitated high-level operational meetings across multi-functional warrior teams.",
          "Delivered structured presentations that enhanced cross-team engagement and streamlined strategic communications.",
          "Managed end-to-end event logistics, scheduling, and activity workflows to maintain organizational alignment."
        ]
      }
    ]
  };

  // 2. Define Animation Variants
  // Variants allow you to define animation states and reuse them.

  // Fade up animation for sections on scroll
  const fadeUpConfig = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 }, // Animates once when 20% visible
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } // Custom "circOut" easing
  };

  // Stagger container for skills (children will animate one by one)
  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1, // Delay between each child
        delayChildren: 0.2 // Delay before first child starts
      }
    },
    viewport: { once: true, amount: 0.2 }
  };

  // Child element for stagger animation
  const staggerChild = {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "backOut" }
    }
  };

  // Hover effect for cards
  const cardHover = {
    rest: { scale: 1, y: 0, boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
    hover: { 
      scale: 1.02, 
      y: -5,
      borderColor: "rgba(34, 211, 238, 0.5)", // Cyan-400 with opacity
      boxShadow: "0px 10px 30px -10px rgba(34, 211, 238, 0.2)",
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  return (
    // 3. Replace standard divs with motion.div where animation is needed
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans relative overflow-x-hidden">
      
      {/* Background Animation Effect */}
      <div className="fixed inset-0 z-0">
        <motion.div 
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-blue-900 rounded-full blur-[128px]"
        />
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            delay: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-2/3 -right-40 w-96 h-96 bg-cyan-900 rounded-full blur-[128px]"
        />
      </div>

      {/* Navigation Bar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.span 
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer">
            {profile.name}
          </motion.span>
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <motion.a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                whileHover={{ y: -2, color: "#22d3ee" }} // Cyan-400
                className="text-slate-300 transition-colors relative group"
              >
                {item}
                {/* Animated Underline */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      <main className="relative z-10">
        {/* Hero / About Section - Animates on Load */}
        <section id="about" className="pt-40 pb-20 px-6 max-w-6xl mx-auto flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "backOut" }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-400 text-xs tracking-wide font-medium shadow-lg shadow-cyan-950/30"
          >
            ⚡ Available for Opportunities
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
          >
            Hi, I'm <span className="text-cyan-400 relative">
              {profile.name}
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }}
                className="absolute bottom-2 left-0 h-2 bg-cyan-800 -z-10 rounded"
              />
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl text-slate-400 max-w-3xl mb-10 leading-relaxed"
          >
            {profile.bio}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex gap-4"
          >
            <motion.a 
              href="#projects" 
              whileHover={{ scale: 1.05, background: "#06b6d4" }} // Cyan-500 to Cyan-600
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg bg-cyan-500 font-semibold text-slate-950 transition-colors shadow-lg shadow-cyan-500/20"
            >
              View My Work
            </motion.a>
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.05, borderColor: "#94a3b8", background: "rgba(30, 41, 59, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg border border-slate-700 font-semibold text-slate-200 transition-colors"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </section>

        {/* Skills Section - Staggered Child Animation on Scroll */}
        <motion.section 
          id="skills" 
          className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-800"
          {...fadeUpConfig} // Apply fade up to whole section
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(profile.skills).map(([category, items]) => (
              <motion.div 
                key={category} 
                initial="rest"
                whileHover="hover"
                variants={cardHover}
                className="p-7 bg-slate-900/50 rounded-2xl border border-slate-800 backdrop-blur-sm transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold mb-6 text-cyan-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  {category}
                </h3>
                {/* Apply stagger container to the list */}
                <motion.div 
                  className="flex flex-wrap gap-2.5"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {items.map((skill) => (
                    <motion.span 
                      key={skill} 
                      variants={staggerChild} // Each child animates based on parent config
                      whileHover={{ scale: 1.1, backgroundColor: "#1e293b", color: "#22d3ee" }}
                      className="px-3.5 py-1.5 bg-slate-800/80 text-sm rounded-full text-slate-300 border border-slate-700 cursor-default transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section - Fade Up on Scroll */}
        <motion.section 
          id="experience" 
          className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-800"
          {...fadeUpConfig}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Journey</h2>
          <div className="space-y-8 max-w-4xl mx-auto relative pl-8 before:absolute before:inset-y-0 before:left-0 before:w-0.5 before:bg-slate-800">
            {profile.experience.map((exp, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ x: 10 }} // Subtle nudge on hover
                className="relative p-7 bg-slate-900/50 rounded-2xl border border-slate-800 backdrop-blur-sm"
              >
                {/* Timeline Dot */}
                <div className="absolute top-8 -left-[36px] w-4 h-4 rounded-full bg-slate-950 border-4 border-cyan-500 z-10" />
                
                <div className="flex flex-col md:flex-row justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-50">{exp.role}</h3>
                    <p className="text-cyan-400 text-lg font-medium">{exp.organization}</p>
                  </div>
                  <span className="text-sm text-slate-500 mt-1 md:mt-0 font-mono bg-slate-800 px-3 py-1 rounded-full self-start">
                    {exp.period}
                  </span>
                </div>
                <ul className="list-none space-y-2.5 text-slate-300 text-base leading-relaxed">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <span className="text-cyan-600 mt-1.5">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section - Card Hover Effects */}
        <motion.section 
          id="projects" 
          className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-800"
          {...fadeUpConfig}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {profile.projects.map((proj, idx) => (
              <motion.div 
                key={idx} 
                initial="rest"
                whileHover="hover"
                variants={cardHover}
                className="bg-slate-900/50 p-7 rounded-2xl border border-slate-800 backdrop-blur-sm flex flex-col justify-between transition-colors duration-300"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-50">{proj.title}</h3>
                  <p className="text-slate-400 text-base mb-6 leading-relaxed">{proj.description}</p>
                  <div className="flex flex-wrap gap-2.5 mb-8">
                    {proj.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-cyan-950/50 text-cyan-300 text-xs rounded border border-cyan-900 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-6 text-sm font-semibold border-t border-slate-800 pt-5">
                  <motion.a 
                    href={proj.githubLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    whileHover={{ color: "#22d3ee" }}
                    className="text-slate-300 flex items-center gap-1.5"
                  >
                    Source Code →
                  </motion.a>
                  <motion.a 
                    href={proj.liveLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    whileHover={{ color: "#22d3ee" }}
                    className="text-slate-300 flex items-center gap-1.5"
                  >
                    Live Demo →
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          id="contact" 
          className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-800 text-center relative overflow-hidden rounded-3xl bg-slate-900 mb-10"
          {...fadeUpConfig}
        >
          {/* Subtle decoration */}
          <div className="absolute inset-0 opacity-10 space-y-2 p-4">
            {Array.from({length: 10}).map((_,i) => (
              <div key={i} className={`h-2 bg-cyan-500 rounded-full ${i%2 === 0 ? 'w-1/2' : 'w-3/4'} mx-auto`}/>
            ))}
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
            <p className="text-xl text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
              Whether you have a question, a project idea, or just want to say hi, I'm always open to discussing new opportunities.
            </p>
            <motion.a 
              href={`mailto:${profile.email}`} 
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0px 10px 30px rgba(34, 211, 238, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 bg-cyan-500 text-slate-950 font-bold rounded-xl text-lg shadow-lg transition-colors"
            >
              Send me an Email
            </motion.a>
          </div>
        </motion.section>
      </main>

      <footer className="relative z-10 py-8 border-t border-slate-800 text-center text-slate-600 text-sm bg-slate-950">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
        <div className="mt-2 text-xs">Crafted with React, Tailwind & Framer Motion</div>
      </footer>
    </div>
  );
}