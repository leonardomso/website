import React from "react";

import {
  ContactContainer,
  ContactTitle,
  ContactText,
  ContactLink,
} from "./Contact.styles";

const Contact = () => (
  <ContactContainer>
    <ContactTitle>Contact</ContactTitle>

    <ContactText>Let's have a chat! Feel free to contact.</ContactText>
    <ContactLink
      href="mailto:leonardomso11@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      leonardomso11@gmail.com
    </ContactLink>
  </ContactContainer>
);

export default Contact;
