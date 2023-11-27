import React, { useState } from "react";
import Mail from "../images/ICON_CONTACT/icons8-courrier-96.png";
import Tel from "../images/ICON_CONTACT/icons8-tel-58.png";
import "./Info.css";

const Contact = ({ image, title, description }) => {
  return (
    <div
      className="contact-info">
      <div className="contact-content">
        <img src={image} alt={title} className="logo-contact" />
      </div>
        <div className="contact-description">
          <p>{description}</p>
        </div>
    </div>
  );
};

const Contacts = () => {
  const contactData = [
    {
      image: Mail,
      description: "contact@crea-tech.fr",
    },

    {
      image: Tel,
      description: "06 42 14 03 29",
    },
  ];

  return (
    <section className="contacts-page" id="contacts">
      <div className="contacts">
        <div className="contact-row">
          {contactData.slice(0, 3).map((contact, index) => (
            <Contact
              key={index}
              image={contact.image}
              title={contact.title}
              description={contact.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contacts;
