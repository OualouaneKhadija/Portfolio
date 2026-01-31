import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import profileImage from "@/assets/khadija-profile.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-cream opacity-80" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      
      {/* Floating decorative dots */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/40 rounded-full"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary/30 rounded-full"
      />
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-primary/50 rounded-full"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex-shrink-0"
          >
            <div className="relative">
              {/* Elegant hexagonal-inspired frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-[2rem] rotate-3 scale-105 -z-10" />
              <div className="absolute inset-0 border-2 border-primary/30 rounded-[2rem] -rotate-2 scale-110 -z-20" />
              
              {/* Main image container */}
              <div className="relative p-3 bg-gradient-to-br from-white via-white to-primary/5 rounded-[2rem] shadow-elegant">
                <div className="overflow-hidden rounded-[1.5rem]">
                  <img 
                    src={profileImage} 
                    alt="Khadija Oualouane" 
                    className="w-64 md:w-80 lg:w-96 h-auto"
                  />
                </div>
                
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-3 border-l-3 border-primary/40 rounded-tl-2xl" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-3 border-r-3 border-primary/40 rounded-tr-2xl" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-3 border-l-3 border-primary/40 rounded-bl-2xl" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-3 border-r-3 border-primary/40 rounded-br-2xl" />
              </div>
              
              {/* Floating decorative dots */}
              <motion.div 
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-6 h-6 bg-primary/20 rounded-full"
              />
              <motion.div 
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-2 w-4 h-4 bg-primary/30 rounded-full"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <Sparkles size={16} />
                Open to Internship Opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6"
            >
              Hi, I'm{" "}
              <span className="text-gradient">Khadija Oualouane</span>
              <br />
              <span className="text-muted-foreground text-2xl md:text-3xl lg:text-4xl">
                Artificial Intelligence Enthusiast
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 font-light"
            >
              AI & Emerging Technologies Student specializing in{" "}
              <span className="text-foreground font-medium">Machine Learning</span>,{" "}
              <span className="text-foreground font-medium">NLP</span> &{" "}
              <span className="text-foreground font-medium">Computer Vision</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
            >
              <a href="#projects" className="btn-primary-luxury flex items-center gap-2 group">
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="btn-outline-luxury">
                Contact Me
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-primary/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
