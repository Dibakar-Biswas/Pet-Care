import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoPawSharp } from "react-icons/io5";
import { LiaLinkedin, LiaLinkedinIn } from "react-icons/lia";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-blue-400 text-primary-content p-10 mt-10">
      <aside>
        
        <Link to="/">
        <IoPawSharp className="text-6xl text-secondary"></IoPawSharp>
        </Link>
        
        <p className="font-bold">
          WarmPaws Limited
          <br />
          Providing reliable pet since 2018
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://x.com/Dibakar1806">
            <FaXTwitter className="h-10 w-10"></FaXTwitter>
          </a>
          <a href="https://github.com/Dibakar-Biswas?tab=repositories">
            <FaGithub className="h-10 w-10"></FaGithub>
          </a>
          <a href="https://www.facebook.com/dibakar.biswas.640187/">
            <FaFacebook className="h-10 w-10"></FaFacebook>
          </a>
          <a href="https://www.linkedin.com/in/dibakar742/">
            <LiaLinkedinIn className="h-10 w-10"></LiaLinkedinIn>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
