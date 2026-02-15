import Header from "./components/Header/Header";
import MainDiv2 from "./components/Section2/MainDiv2";
import MainDiv from "./components/Section1/MainDiv";
import MainDiv3 from "./components/Section3/MainDiv3";
import MainDiv4 from "./components/Section4/MainDiv4";
import Footer from "./components/Footer/Footer";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const StackSection = ({ id, title, children, zIndex, inViewRef, isVisible }) => {
  return (
    <section id={id} ref={inViewRef}>
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
};

function App() {
  const [ref2, inView2] = useInView({
    threshold: 0.2,
    rootMargin: "-10% 0px -20% 0px",
    triggerOnce: false,
  });
  const [ref3, inView3] = useInView({
    threshold: 0.2,
    rootMargin: "-10% 0px -20% 0px",
    triggerOnce: false,
  });
  const [ref4, inView4] = useInView({
    threshold: 0.2,
    rootMargin: "-10% 0px -20% 0px",
    triggerOnce: false,
  });

  return (
    <>
      <Header />
      <section id="Section1">
        <MainDiv />
      </section>

      <StackSection
        id="Section2"
        title="About Me"
        zIndex={2}
        inViewRef={ref2}
        isVisible={inView2}
      >
        <MainDiv2 />
      </StackSection>

      <StackSection
        id="Section3"
        title="Personal Projects"
        zIndex={3}
        inViewRef={ref3}
        isVisible={inView3}
      >
        <MainDiv3 />
      </StackSection>

      <StackSection
        id="Section4"
        title="Freelance Work"
        zIndex={4}
        inViewRef={ref4}
        isVisible={inView4}
      >
        <MainDiv4 />
      </StackSection>

      <Footer />
    </>
  );
}

export default App;
