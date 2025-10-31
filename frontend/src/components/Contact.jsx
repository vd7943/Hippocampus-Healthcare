import React, { useEffect } from "react";
import ContactForm from "./Contact/ContactForm";
import Location from "./Contact/Location";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact | Hippocampus Health Care";
  }, []);

  return (
    <>
      <ContactForm />
      <Location />
    </>
  );
};

export default Contact;
