import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function StackSection({ id, title, zIndex, children }) {
  const [sectionRef, isVisible] = useInView({
    threshold: 0.2,
    rootMargin: "-10% 0px -20% 0px",
    triggerOnce: false,
  });

  return (
    <section id={id} ref={sectionRef}>
      <motion.div
        className="StackPanel"
        style={{ zIndex }}
        initial={{ opacity: 0, y: 36, scale: 0.96 }}
        animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 36, scale: 0.96 }}
        transition={{ type: "spring", duration: 0.7, bounce: 0.16 }}
      >
        <h1>{title}</h1>
        {children}
      </motion.div>
    </section>
  );
}

export default StackSection;
