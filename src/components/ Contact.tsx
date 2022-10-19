import { FaLinkedinIn } from "react-icons/fa/";

export const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container-container">
        <h1 className="contact-title">I would love to stay in touch</h1>
        <div className="contact-icons">
          <div className="icon-circle"></div>
          <div className="icon-circle"></div>
          <div className="icon-circle">
            <FaLinkedinIn className="icon" />
          </div>
          <div className="icon-circle"></div>
          <div className="icon-circle"></div>
        </div>
      </div>
    </section>
  );
};
