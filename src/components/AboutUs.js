import React from "react";
import main_img from '../images/main-img.png'
import "../styles/about_us.css";

function AboutUs() {
  return (
    <>
      <div className="about-wrapper">
        <div className="hd-wrapper">
          <div className="heading">
            <h1>About Us</h1>
          </div>
          <div className="about-us">
            <div className="about-us-content">
              <div className="about-us-image">
                <img src={main_img} alt="Pet" />
              </div>
              <div class="divider"></div>
              <div className="about-us-text">
                <p>Welcome to our pet website! We are a team of pet enthusiasts who created this platform to help pet owners sell and buy their beloved pets.</p>
                <p>Our mission is to provide a safe and reliable space for people to find their perfect furry friend, whether it's a cat, dog, bird, or any other animal. We believe that every pet deserves a loving home, and we strive to make that happen.</p>
                <p>Our website offers a user-friendly interface that makes it easy to browse through different pets and connect with their owners. We also provide helpful resources and tips on pet care to ensure that every pet owner has the knowledge and support they need to give their pet a happy and healthy life.</p>
                <p>Thank you for choosing our website as your go-to platform for buying and selling pets. We hope you find your perfect pet here!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
