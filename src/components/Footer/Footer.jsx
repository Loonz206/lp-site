import React from "react";
import "./Footer.scss";

const Footer = () => {
  function getCurrentDate() {
    const newDate = new Date();
    const year = newDate.getFullYear();
    return `Copyright | 2019 - ${year}`;
  }
  return (
    <footer>
      <p>{getCurrentDate()}</p>
    </footer>
  );
};

export default Footer;
