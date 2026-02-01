import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Lightbulb, Target } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Brain, label: "Machine Learning & Deep Learning" },
    { icon: Lightbulb, label: "Natural Language Processing" },
    { icon: Target, label: "Computer Vision" },
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            About Me
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold mt-4">
            Passionate About AI
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a dedicated and curious AI student with a genuine passion for transforming 
              complex problems into elegant, data-driven solutions. Currently pursuing my studies 
              in Artificial Intelligence & Emerging Technologies at EST Meknès, I'm driven by the 
              belief that AI has the power to create meaningful impact in our world.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              With hands-on experience in Machine Learning, Deep Learning, Natural Language 
              Processing, and Computer Vision, I bring both theoretical knowledge and practical 
              expertise to every project. I'm actively seeking an AI/Data internship where I can 
              contribute my skills, learn from industry professionals, and grow as an AI practitioner.
            </p>

            <div className="flex flex-wrap gap-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  <item.icon size={16} />
                  {item.label}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative frame */}
              <div className="absolute inset-4 border-2 border-primary/20 rounded-2xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl" />
              
              {/* Main content box */}
              <div className="absolute inset-8 bg-card rounded-xl shadow-[var(--shadow-lg)] p-8 flex flex-col justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <Brain className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold mb-3">My Mission</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    To leverage cutting-edge AI technologies to solve real-world challenges 
                    and contribute to innovations that make a positive difference.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
