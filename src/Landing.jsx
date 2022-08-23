import "./css/bootstrap.min.css";
import "./Landing.css";
import { useEffect } from "react";


function Landing() {
useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");

    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      links.forEach((link) => {
        link.classList.toggle("fade");
      });
    });
    console.log("dom is ready");
  }, []);

  return (
    <div className='container'>
      <div className='header'>
        <div className='nav'>
          <div className='hamburger'>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
          </div>
          <ul className='nav-links'>
            <li>
              <a href='#'>About Us</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
            <li>
              <a href='#'>Portfolio</a>
            </li>
          </ul>
        </div>
        <div className='weare'>
          <h1>We are</h1>
        </div>
        <div className='amplab'>
          <p>&lt;amp/lab&gt;</p>
        </div>
      </div>

      <div className='content'>
        <p>This page is under construction.</p>
        <p>
          For any queries, kindly contact Josh Soriano at{" "}
          <a href='mailto:josh@amplab.com.ph'>josh@amplab.com.ph</a>
        </p>
      </div>
    </div>
  );
}

export default Landing;