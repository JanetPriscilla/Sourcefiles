import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Developed by Janet Priscilla ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
