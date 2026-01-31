import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, CheckCircle2 } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    "Developed a Facial Emotion Recognition system using Deep Learning",
    "Worked with Python, TensorFlow/Keras, OpenCV, NumPy, Matplotlib",
    "Gained hands-on experience with IT infrastructure and real projects",
    "Applied machine learning concepts to solve practical problems",
  ];

  return (
    <section id="experience" className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            Career
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold mt-4">
            Professional Experience
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="relative max-w-3xl mx-auto"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20" />

          {/* Experience Card */}
          <div className="relative pl-20">
            {/* Timeline dot */}
            <div className="absolute left-6 top-8 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-md" />

            <div className="card-luxury p-8">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-primary">Internship</span>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold mb-1">
                    Stagiaire – Génie Informatique
                  </h3>
                  <p className="text-muted-foreground">
                    Province de Tinghir – Département GI
                  </p>
                </div>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  2024
                </span>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                During this internship, I had the opportunity to apply my theoretical knowledge 
                to real-world projects, focusing on developing a Facial Emotion Recognition system 
                using Deep Learning techniques.
              </p>

              <div className="space-y-3">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
