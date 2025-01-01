import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="section about">
    <>
      <div class="card-container d-lg-none">
        <div class="card profile-card mt-5 pro">
          <div class="card-body text-center">
            <h2 class="card-title">
              {" "}
              About <span className="t-orange">Me</span>
            </h2>
            <p class="card-text">
              I am a highly motivated and ambitious individual with a strong
              foundation in software development, specializing in Python,
              SQL, JavaScript, and the MERN stack. I possess excellent
              problem-solving, teamwork, and communication skills, which I
              leverage to build efficient, user-focused applications. With
              hands-on experience in full-stack projects, I am passionate
              about creating responsive, functional, and dynamic web
              solutions.
            </p>
            <a href="#" class="profilebtn">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-evenly text-center d-none d-lg-flex ">
        <img
          src="https://res.cloudinary.com/dtc4lwuck/image/upload/v1734893006/IMG_20241205_135321_cyztsi.jpg"
          class="pimg-lg"
          alt="Profile Image"
        />

        <div className="w-50 p-5">
          <h2 class="text-info">
            About<span className="text-primary"> Me</span>
          </h2>

          <p class="about-textt mb-4">
            {" "}
            I am a highly motivated and ambitious individual with a strong
            foundation in software development, specializing in Python, SQL,
            JavaScript, and the MERN stack. I possess excellent
            problem-solving, teamwork, and communication skills, which I
            leverage to build efficient, user-focused applications. With
            hands-on experience in full-stack projects, I am passionate
            about creating responsive, functional, and dynamic web
            solutions.
          </p>

          <div className="d-flex social-icons justify-content-center gap-4 mt-5 social-i">
            <a
              href="https://www.linkedin.com/in/bonda-bhargav"
              target="_blank"
              className=""
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
    </>
  </div>
  );
}

export default About;
