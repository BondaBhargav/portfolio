import React from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
import cv from "../assest/bhargavResume.pdf"
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import ContactUs from "./ContactUs";

const Home = () => {
  return (
    <>
    
  
    <div id="home" className="section home">
      <div class="card-container d-lg-none">
        <div class="card profile-card mt-5 pro">
          <img
            src="https://res.cloudinary.com/dtc4lwuck/image/upload/v1734893006/IMG_20241205_135321_cyztsi.jpg"
            class="pimg"
            alt="Profile Image"
          />
          <div class="card-body text-center">
            <h2 class="card-title">
              <span>Hi,</span> It's <span className="t-orange">Bhargav</span>
            </h2>
            <p class="card-text">
              Frontend Developer with a passion for creating sleek and
              responsive web designs. Proficient in HTML, CSS,JavaScript,{" "}
              Mern stack.
            </p>
            <div>
              <a href="/contact" class="profilebtn">
                Contact Me
              </a>
              <a href={cv} download className="profilebtn ms-4">Download CV</a>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-evenly text-center d-none d-lg-flex w-100  ">
        <div className="w-50 p-5  d-flex flex-column align-items-start">
          <h2 class="font-head">
            Hi It's <span className="text-primary">Bhargav</span>
          </h2>
          <h3>I'm a Web Developer</h3>
          <p class=" text-start">
            Frontend Developer with a passion for creating sleek and
             responsive web designs.<br/> Proficient in HTML,
            CSS,JavaScript,Mern Mern stack
          </p>
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
 
          <div className="gap-5 mt-5">
            <a href="/contact" class="profilebtn ">
              Contact Me
            </a>{" "}
            <a href={cv} download className="ms-3 profilebtn">Download CV</a>
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/dtc4lwuck/image/upload/v1734893006/IMG_20241205_135321_cyztsi.jpg"
          class="pimg-lg"
          alt="Profile Image"
        />
      </div>
    </div>
  
      <About />
      <Skills />
     <Projects/>
    <ContactUs/>   
    </>


  );
};

export default Home;
