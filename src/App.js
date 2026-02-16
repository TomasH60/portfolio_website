import Header from "./components/Header/Header";
import MainDiv2 from "./components/Section2/MainDiv2";
import MainDiv from "./components/Section1/MainDiv";
import MainDiv3 from "./components/Section3/MainDiv3";
import MainDiv4 from "./components/Section4/MainDiv4";
import Footer from "./components/Footer/Footer";
import React from "react";
import StackSection from "./components/common/StackSection";
import { stackSections } from "./data/stackSections";

const sectionComponentMap = {
  Section2: MainDiv2,
  Section3: MainDiv3,
  Section4: MainDiv4,
};

function App() {
  return (
    <>
      <Header />

      <section id="Section1">
        <MainDiv />
      </section>

      {stackSections.map((section) => {
        const SectionContent = sectionComponentMap[section.id];

        return (
          <StackSection
            key={section.id}
            id={section.id}
            title={section.title}
            zIndex={section.zIndex}
          >
            <SectionContent />
          </StackSection>
        );
      })}

      <Footer />
    </>
  );
}

export default App;
