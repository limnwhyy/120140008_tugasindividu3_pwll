import React from "react";

const Footer = () => {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} |{" "}
        <a href="https://github.com/limnwhyy" rel="noreferrer" target="_blank">
          limnwhyy
        </a>
      </p>
    </footer>
  );
};

export default Footer;
