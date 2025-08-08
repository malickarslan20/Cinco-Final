import { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const projects = [
    {
      title: 'Swapping Number Academy',
      category: 'Web Development',
      image: '/Number.jpg',
      description: 'Swappin Number Academy is a dynamic app that combines social interaction with advanced AI tools, allowing users to create posts, like/dislike content, chat with AI (text and image-based), and generate/analyze credit reports. Premium users can access exclusive e-books, courses, and send reports to PostGrid. Secure payments are handled via Authorize.net. The admin panel offers full control over posts, reports, and more',
      technologies: ['React', 'Firebase', 'Authorize.net'],
      metrics: ['300% increase in sales', '50% faster load times', '95% user satisfaction'],
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Voice Assistance',
      category: 'Python Project',
      image: '/Python2.jpg',
      description: 'It is a Python Powered Voice Assistant, can perform multiple tasks from opening any file or folder to opening any website. It can also lock, sleep and shutdown the computer. It can adjust brightness and volume levels can take a screenshot also and much more!',
      technologies: ['Python', 'pyttxx3', 'OS & Sub-process library', 'Speech_Recognition library'],
      metrics: ['10K+ active users', '4.8/5 app rating', '40% reduction in wait times'],
      gradient: 'from-cyan-600 to-blue-600'
    },
    {
      title: 'Job Portal Application',
      category: 'Web Application',
      image: '/Dashboard.jpg',
      description: 'Job Portal App offers dual functionality for both job seekers and Employer. Job seekers can create profiles, browse and apply for jobs, track application statuses, save favorites, and view application analytics through a dashboard. Employer can post job listings, view applicants, review profiles, and approve or reject candidates. The platform streamlines the hiring process with an intuitive, role-based experience',
      technologies: ['React.js', 'Express', 'Node.js', 'PostgreSQL'],
      metrics: ['60% faster reporting', '90% time Saving', '100+ daily active users'],
      gradient: 'from-emerald-600 to-teal-600'
    },
    {
      title: 'Property Price Predictor',
      category: 'Python Project',
      image: '/Python1.jpg',
      description: 'It is a Machine Learning Project. It can predict prices of the property based on data given! It is accurate and 100% trustworthy.',
      technologies: ['Python', 'Numpy', 'Pandas', 'seaborn','matplotlib','tensorflow'],
      metrics: ['30% savings', '100+ areas managed', '24/7 monitoring'],
      gradient: 'from-orange-600 to-red-600'
    },
    {
      title: 'Budget App',
      category: 'App Development',
      image: '/App1.jpg',
      description: 'Track income and expenses by category, amount, and date.Create and customize spending categories based on personal needs.View real-time insights through interactive summaries and charts.Choose from a wide range of currency symbols (stored using SharedPreferences).Switch between dark and light mode using Provider.Clear all transaction data with a single tap for a fresh start',
      technologies: ['Flutter', 'Dart', 'Provider', 'SQLite'],
      metrics: ['1K+ users', '90% satisfaction rate'],
      gradient: 'from-indigo-600 to-purple-600'
    },
    {
      title: 'Creative Graphic Design Portfolio for Social Media &Marketing',
      category: 'Graphic Designing',
      image: '/Graphic.jpg',
      description: 'This project showcases a diverse range of creative graphic designs tailored for social media marketing, academic promotions, product advertisements, events, and awareness campaigns. Our team crafted visually appealing and purpose-driven content that includes educational content, religius culture event, E-commernce mockup, instagram marketing etc.',
      technologies: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma', 'Canva'],
     metrics: ['100+ design projects delivered', '98% client satisfaction', '20+ brand identities created'],
           gradient: 'from-pink-600 to-rose-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, rotateX: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-white to-purple-50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold   bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 bg-clip-text text-transparent mb-6"
          >
            Our Portfolio
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            Discover our recent projects and the impact we've made for businesses across various industries.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl shadow-sm  cursor-default hover:shadow-2xl transition-all duration-500 overflow-hidden group relative"
              variants={itemVariants}
              whileHover={{                 
                scale: 1.02,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-500 flex items-center justify-center`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div 
                    className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0, rotate: -180 }}
                    whileHover={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.button 
                      className="bg-white text-purple-600 p-3 rounded-full hover:scale-110 transition-transform duration-200"
                      whileHover={{ rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={20} />
                    </motion.button>
                    <motion.button 
                      className="bg-white text-purple-600 p-3 rounded-full hover:scale-110 transition-transform duration-200"
                      whileHover={{ rotate: -360 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} />
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>
              
              <div className="p-6">
                <motion.div 
                  className={`text-sm font-semibold mb-2 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                  whileHover={{ scale: 1.05 }}
                >
                  {project.category}
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-bold text-slate-900 mb-3"
                  whileHover={{ color: "#8b5cf6" }}
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.h3>
                
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <motion.div 
                  className="mb-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                >
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <motion.span 
                        key={idx} 
                        className="bg-gray-100 text-slate-700 px-3 py-1 rounded-full text-sm hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200"
                        variants={{
                          hidden: { opacity: 0, scale: 0 },
                          visible: { opacity: 1, scale: 1 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                <motion.div 
                  className="space-y-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                >
                  {project.metrics.map((metric, idx) => (
                    <motion.div 
                      key={idx} 
                      className="flex items-center text-sm text-slate-600"
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 }
                      }}
                    >
                      <motion.div 
                        className="w-2 h-2 bg-emerald-500 rounded-full mr-3"
                        whileHover={{ scale: 1.5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      />
                      {metric}
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Animated Border */}
              <motion.div
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${project.gradient}`}
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: index * 0.1 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;