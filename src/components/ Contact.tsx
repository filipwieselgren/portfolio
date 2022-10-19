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
          <a className="circle-container">
            <div className="icon-circle">
              <GoMail />
            </div>
            <p className="circle-text">Email</p>
          </a>
          <a className="circle-container">
            <div className="icon-circle">
              <TiPhone />
            </div>
            <p className="circle-text">Phone</p>
          </a>

          <a className="circle-container">
            <div className="icon-circle">
              <FaLinkedinIn className="icon" />
            </div>
            <p className="circle-text">Linkedin</p>
          </a>
          <a className="circle-container">
            <div className="icon-circle">
              <FaGithub />
            </div>
            <p className="circle-text">Github</p>
          </a>
          <a className="circle-container">
            <div className="icon-circle">
              <TbCoffee />
            </div>
            <p className="circle-text">Coffee</p>
          </a>
        </div>
      </div>
    </section>
  );
};
