import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Brain, MessageSquare, Eye, BookOpen } from "lucide-react";

const projects = [
  {
    icon: Brain,
    title: "Facial Emotion Recognition",
    category: "Deep Learning",
    description:
      "CNN model for detecting emotions from facial expressions with comprehensive performance evaluation and real-time inference capabilities.",
    tech: ["Python", "TensorFlow/Keras", "OpenCV", "NumPy", "Matplotlib"],
    github: "#",
  },
  {
    icon: MessageSquare,
    title: "Text Emotion Classification",
    category: "NLP",
    description:
      "Classified emotional categories from 10,000+ text comments using LSTM architecture, achieving approximately 85% accuracy.",
    tech: ["Python", "TensorFlow/Keras", "NLTK", "Pandas", "Scikit-learn"],
    github: "#",
  },
  {
    icon: Eye,
    title: "Real-Time Face Detection",
    category: "Computer Vision",
    description:
      "Real-time face detection system leveraging Haar Cascade classifiers and OpenCV for efficient processing.",
    tech: ["Python", "OpenCV", "NumPy", "Matplotlib"],
    github: "#",
  },
  {
    icon: BookOpen,
    title: "Library Management System",
    category: "Desktop Application",
    description:
      "Desktop application with role-based authentication, UML-designed architecture, and comprehensive library management features.",
    tech: ["Java", "JavaFX/Swing", "Maven", "UML"],
    github: "#",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold mt-4">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="card-luxury p-8 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <project.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="font-serif text-xl font-semibold">{project.title}</h3>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                <Github size={18} />
                View on GitHub
                <ExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
