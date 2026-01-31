import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            © {new Date().getFullYear()} Khadija Oualouane. Crafted with{" "}
            <Heart size={14} className="text-primary fill-primary" /> and passion for AI.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
