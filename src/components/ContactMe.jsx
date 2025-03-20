import React from "react";

import ContactItem from "./ContactItem";

const ContactMe = () => {
  return (
    <section id="contact-me">
      <h2>Contact informations</h2>
      <div className="contact-items">
        <ContactItem
          name="Phone"
          value={{ isLink: false, value: "+32472535754" }}
          icon="/icons/phone.svg"
        />
        <ContactItem
          name="Email"
          value={{ isLink: false, value: "roti_adi@yahoo.com" }}
          icon="/icons/email.svg"
        />
        <ContactItem
          name="Linkedin"
          value={{
            isLink: true,
            value: "https://www.linkedin.com/in/adrian-ionut-rotaru/",
          }}
          icon="/icons/linkedin.svg"
        />
        <ContactItem
          name="Github"
          value={{ isLink: true, value: "https://github.com/rotiadi" }}
          icon="/icons/github.svg"
        />
      </div>
    </section>
  );
};

export default ContactMe;
