import React, { useState } from "react";
import "./contact.css";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
  const [formStatus, setFormStatus] = useState({ success: null, message: "" });

  const SendInformation = async (event) => {
    event.preventDefault();
    setFormStatus({ success: null, message: "Submitting..." });

    try {
      const formData = new FormData(event.target);
      const formObject = Object.fromEntries(formData.entries());

      formObject.access_key = "12e17cda-0424-400b-b90b-941b464ec0c0"; // Use an environment variable for security
      let nameof = formObject.name;
      console.log(nameof);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formObject),
      }).then((res) => res.json());

      if (response.success) {
        setFormStatus({
          success: true,
          message: `Your Message sent successfully! ${nameof} 😍😍😍`,
        });
        event.target.reset(); // Clear the form after success
      } else {
        setFormStatus({
          success: false,
          message: "Failed to send the message 🙁. Please try again.",
        });
      }
    } catch (error) {
      setFormStatus({
        success: false,
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setTimeout(() => {
        setFormStatus({ success: null, message: "" });
      }, 10000);
    }
  };

  return (
    <div id="contact" className="section-con contact">
      <h1 className="contact-heading">Get in Touch</h1>

      <div className="contact-card gap-4 d-flex flex-column flex-lg-row">
        <form className="top" onSubmit={SendInformation}>
          <div className="d-flex flex-column">
            <label className="form-label label">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="form-control"
              required
            />
          </div>
          <div className="d-flex flex-column">
            <label className="form-label label">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="form-control"
              required
            />
          </div>
          <div className="d-flex flex-column">
            <label className="label form-label">Message</label>
            <textarea
              name="message"
              placeholder="Enter Your Message"
              className="form-control textarea"
              required
            />
          </div>
          <button type="submit" className="btn-submit">
            Submit
          </button>
          {formStatus.message && (
            <p
              style={{
                color: formStatus.success ? "green" : "red",
                marginTop: "10px",
              }}
            >
              {formStatus.message}
            </p>
          )}
        </form>
        <hr />

        <div className="d-flex flex-column align-items-start justify-content-start p-lg-2">
          <img
            className="contactimg d-none d-lg-flex"
            src="https://res.cloudinary.com/dtc4lwuck/image/upload/v1735481746/rb_2147826444_it38ws.png"
            alt="Contact Us"
          />

          <div className="d-lg-flex d-none flex-column align-items-start">
            <ul className="info-list d-flex flex-column align-items-start text-white">
              <li className="info-item">
                <strong>Name:</strong> <span>Bonda Bhargav</span>
              </li>
              <li className="info-item">
                <strong>Email:</strong>{" "}
                <a href="mailto:bondabhargav@gmail.com">
                  bondabhargav@gmail.com
                </a>
              </li>
              <li className="info-item">
                <strong>Phone:</strong>{" "}
                <a href="tel:+9121471808">+91 9121471808</a>
              </li>
            </ul>
          </div>
          <div className="d-lg-none d-flex flex-column align-items-start">
            <h5>
              NAME: <span>BHARGAV</span>
            </h5>
            <h5>
              <MdEmail />: <span>bondabhargav@gmail.com</span>
            </h5>
            <h5>
              <FaPhoneAlt />: <span>9121471808</span>
            </h5>
          </div>
           <div className="d-flex social-icons justify-content-center gap-4  social-i">
                     <a
                       href="https://www.linkedin.com/in/bonda-bhargav"
                       target="_blank"
                     >
                       <FaLinkedin size={24} />
                     </a>
                     <a
                       href="https://www.instagram.com/viratbhargav18"
                       target="_blank"
                     >
                       <FaInstagram size={24} />
                     </a>
                     <a
                       href="https://www.github.com/BondaBhargav"
                       target="_blank"
                     >
                       <FaGithub size={24} />
                     </a>
                     <a
                       href="https://www.twitter.com"
                       target="_blank"
                     >
                       <FaTwitter size={24} />
                     </a>
                   </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
