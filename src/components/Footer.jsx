import React from "react";
import logo from "../assets/logo1.svg";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full flex items-center justify-center py-2 bg-[#1b2a6f] text-white mt-auto" role="contentinfo" aria-label="Site footer">
      <img src={logo} alt="Site logo" width={32} height={32} className="mr-2" />
      <span className="text-sm">Copyright Ted {year}</span>
    </footer>
  );
};

export default Footer;