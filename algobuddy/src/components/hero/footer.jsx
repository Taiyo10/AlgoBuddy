import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-[24vh] bg-[#D2D2D2] dark:bg-[#1E1E1E] flex items-center justify-center">
      <div
        id="footer-text-container"
        className="h-[10vh] w-auto text-[#5A5959] text-[1vw] flex items-center justify-between flex-col"
      >
        <a href="#top-container">Back to top</a>
        <p>
          Created By: Teo Cristante, Ninh Dang, Allen Reinoso, Ethan Samson,
          Joshua Herrera
        </p>
      </div>
    </footer>
  );
};

export default Footer;
