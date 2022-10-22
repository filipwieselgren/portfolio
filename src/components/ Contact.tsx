import { FaLinkedinIn, FaGithub } from "react-icons/fa/";
import { GoMail } from "react-icons/go";
import { TiPhone } from "react-icons/ti";
import { TbCoffee } from "react-icons/tb";
import { useState } from "react";

export const Contact = () => {
  let [coffee, setCoffee] = useState(false);

  const getACoffee = () => {
    setCoffee((coffee = true));
  };

  const getACoffeeFalse = () => {
    setCoffee((coffee = false));
  };

  const getCoffee = (
    <div className="coffee-container">
      <div className="coffee-text">
        When you click here you will come to my Linkedin profile. Once you are
        there just send a message with the word "Coffee" and I will get back to
        you
      </div>
    </div>
  );

  return (
    <section id="contact" className="contact-section">
      <img
        className="diver"
        src={require("../assets/animated-diving-image-0016.gif")}
        alt="loading..."
      />

      <div className="contact-container">
        <h1 className="contact-title">I would love to stay in touch</h1>
        <div className="contact-icons-container">
          <a
            href="mailto: filipwieselgren@gmail.com"
            target="_blank"
            className="circle-container"
          >
            <div className="icon-circle">
              <GoMail />
            </div>
            <p className="circle-text">Email</p>
          </a>
          <a href="tel:076-060-4418" className="circle-container">
            <div className="icon-circle">
              <TiPhone />
            </div>
            <p className="circle-text">Phone</p>
          </a>

          <a
            href="https://www.linkedin.com/in/filipwieselgren/"
            target="_blank"
            className="circle-container"
          >
            <div className="icon-circle">
              <FaLinkedinIn className="icon" />
            </div>
            <p className="circle-text">Linkedin</p>
          </a>
          <a
            href="https://github.com/filipwieselgren"
            target="_blank"
            className="circle-container"
          >
            <div className="icon-circle">
              <FaGithub />
            </div>
            <p className="circle-text">Github</p>
          </a>
          {coffee ? getCoffee : <></>}

          <a
            className="circle-container"
            onMouseEnter={getACoffee}
            onMouseLeave={getACoffeeFalse}
          >
            <div className="icon-circle">
              <TbCoffee />
            </div>
            <p className="circle-text">Coffee</p>
          </a>
        </div>
        <img
          className="diver"
          src={require("../assets/animated-diving-image-0016.gif")}
          alt="loading..."
        />
      </div>
    </section>
  );
};
