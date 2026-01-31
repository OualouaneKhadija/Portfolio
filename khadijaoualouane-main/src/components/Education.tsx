import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

const educationData = [
  {
    icon: GraduationCap,
    degree: "Intelligence Artificielle & Technologies Émergentes",
    institution: "EST Meknès",
    period: "2024 – 2026",
    description: "Specialized program focusing on AI, Machine Learning, Deep Learning, and emerging technologies.",
    current: true,
  },
  {
    icon: Award,
    degree: "Baccalaureate – Physical Sciences",
    institution: "High School",
    period: "2024",
    description: "Strong foundation in mathematics, physics, and scientific methodology.",
    current: false,
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            Academic Background
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold mt-4">
            Education
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20" />

            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                  className="relative pl-20"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-6 top-8 w-5 h-5 rounded-full border-4 border-background shadow-md ${
                      edu.current ? "bg-primary" : "bg-muted-foreground"
                    }`}
                  />

                  <div className="card-luxury p-6">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <edu.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-serif text-xl font-semibold mb-1">
                            {edu.degree}
                          </h3>
                          <p className="text-muted-foreground">{edu.institution}</p>
                        </div>
                      </div>
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                          edu.current
                            ? "bg-primary/10 text-primary"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed pl-16">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
