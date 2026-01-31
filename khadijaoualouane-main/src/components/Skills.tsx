import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Brain, MessageSquare, BarChart3, Globe, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Languages",
    skills: ["Python", "Java", "SQL", "PHP"],
  },
  {
    icon: Brain,
    title: "AI & Data",
    skills: ["Machine Learning", "Deep Learning", "Scikit-learn", "TensorFlow", "Keras", "XGBoost"],
  },
  {
    icon: MessageSquare,
    title: "NLP & Vision",
    skills: ["NLTK", "Transformers", "OpenCV", "Haar Cascade"],
  },
  {
    icon: BarChart3,
    title: "Data Visualization",
    skills: ["Matplotlib", "Seaborn", "Plotly"],
  },
  {
    icon: Globe,
    title: "Web Development",
    skills: ["HTML5", "CSS3", "JavaScript", "MySQL"],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["Git/GitHub", "Jupyter Notebook", "Maven", "UML"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">
            Expertise
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold mt-4">
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="card-luxury p-6 group"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
