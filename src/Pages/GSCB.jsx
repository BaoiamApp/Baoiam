import React from "react";
import ContactForm from "../Components/GSCB/ContactForm";
import Section2 from "../Components/GSCB/GSCB-Section2";
import Section1 from "../Components/GSCB/GSCB-Section1";
import Header from "../Components/GSCB/GSCB-Header";

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
    </>
  );
};

export default GSCB;
