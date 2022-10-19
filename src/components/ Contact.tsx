import { FaLinkedinIn, FaGithub } from "react-icons/fa/";
import { GoMail } from "react-icons/go";
import { TiPhone } from "react-icons/ti";
import { TbCoffee } from "react-icons/tb";

export const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1 className="contact-title">I would love to stay in touch</h1>
        <div className="contact-icons-container">
          <div className="icon-circle">
            <GoMail />
          </div>
          <div className="icon-circle">
            <TiPhone />{" "}
          </div>
          <div className="icon-circle">
            <FaLinkedinIn className="icon" />
          </div>
          <div className="icon-circle">
            <FaGithub />
          </div>
          <div className="icon-circle">
            <TbCoffee />
          </div>
        </div>
      </div>
    </section>
  );
};
