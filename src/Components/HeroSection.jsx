import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Typewriter from "typewriter-effect";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen   bg-gray-200  flex flex-col flex-col-reverse lg:flex-row lg:items-center gap-7 lg:justify-between  px-6 pb-8 lg:px-10 xl:px-30 w-screen lg:gap-10  relative overflow-hidden"
>
     <div>
       <motion.div
        className="container mx-auto   relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className=" mb-2"
        >

<motion.h1
  className="text-3xl md:text-4xl capitalize
    bg-gradient-to-r from-purple-600 md:max-w-[23ch] to-pink-600
    hover:from-purple-700 hover:to-pink-700 bg-clip-text text-transparent
    p-2 font-bold leading-tight"
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 300 }}
>
  <Typewriter
    options={{
      strings: [
        "Take Your Businesses To The Next Level",
        "Grow Your Brand With Us",
        "Empower Your Online Presence",
      ],
      autoStart: true,
      loop: true,
      delay: 50,
    }}
  />
</motion.h1>

        </motion.div>

        <motion.p
          variants={itemVariants}
          className="md:text-xl text-gray-700 pl-2 mb-8 max-w-3xl max-w-[50ch]  leading-relaxed"
        >
          Transform your business with cutting-edge solutions that drive growth,
          innovation, and lasting success in the digital landscape.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.button
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-purple-600 cursor-pointer to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 md:py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span>View Our Work</motion.span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight size={20} />
            </motion.div>
          </motion.button>

          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-purple-600 
            bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 bg-clip-text text-transparent
            cursor-pointer
            hover:bg-white hover:text-purple-900 px-8 py-3 md:py-4 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm
            "
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Animated Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.2 }}
      >
        <ChevronDown size={32} />
      </motion.button>
     </div>


      <motion.img
  src="/logo1.png"
  className='  '
  initial={{ x: 100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}  
  transition={{ duration: 0.8, ease: "easeOut" }}
/>

    
    </section>
  );
};

export default Hero;
