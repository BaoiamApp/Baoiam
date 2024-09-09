import React from "react";
import ContactForm from "../Components/GSCB/ContactForm";
import Section2 from "../Components/GSCB/GSCB-Section2";
import Section1 from "../Components/GSCB/GSCB-Section1";
import Header from "../Components/GSCB/GSCB-Hero";
import GSCPBottom from "../Components/GSCB/GSCP-Section3";

const GSCB = () => {
  return (
    <>
      <Header />

      {/* Section 1 */}
      <Section1 />

      {/* Section 2 */}
      <Section2 />

      {/* Contact */}
      <ContactForm />

      {/* GSCPBottom */}
      <GSCPBottom />
    </>
  );
};

export default GSCB;
