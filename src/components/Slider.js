import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import "../css/Slider.css";

function ImageSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src="images/image1.jpg" alt="" />
            </div>
            <ul className="social-icons">
              <li>
                <a href="#">
                  <BsFacebook className="icons facebook" />
                </a>
              </li>

              <li>
                <a href="#">
                  <FaInstagram className="icons instagram" />
                </a>
              </li>

              <li>
                <a href="#">
                  <BsTwitter className="icons twitter" />
                </a>
              </li>

              <li>
                <a href="#">
                  <BsLinkedin className="icons linkedin" />
                </a>
              </li>
            </ul>
            <div className="details">
              <h2>
                John Doe <span className="job-title">UI Developer</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src="../images/image2.jpg" alt="" />
            </div>
            <ul className="social-icons">
              <li>
                <a href="#">
                  <BsFacebook className="icons facebook" />
                </a>
              </li>

              <li>
                <a href="#">
                  <FaInstagram className="icons instagram" />
                </a>
              </li>

              <li>
                <a href="#">
                  <BsTwitter className="icons twitter" />
                </a>
              </li>

              <li>
                <a href="#">
                  <BsLinkedin className="icons linkedin" />
                </a>
              </li>
            </ul>
            <div className="details">
              <h2>
                John Doe <span className="job-title">UI Developer</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src="images/image3.jpg" alt="" />
            </div>
            <ul className="social-icons">
              <li>
                <a href="#">
                  <BsFacebook className="icons facebook" />
                </a>
              </li>

              <li>
                <a href="#">
                  <FaInstagram className="icons instagram" />
                </a>
              </li>

              <li>
                <a href="#">
                  <BsTwitter className="icons twitter" />
                </a>
              </li>

              <li>
                <a href="#">
                  <BsLinkedin className="icons linkedin" />
                </a>
              </li>
            </ul>
            <div className="details">
              <h2>
                John Doe <span className="job-title">UI Developer</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src="images/image4.jpg" alt="" />
            </div>
            <ul className="social-icons">
              <li>
                <a href="#">
                  <BsFacebook className="icons facebook" />
                </a>
              </li>

              <li>
                <a href="#">
                  <FaInstagram className="icons instagram" />
                </a>
              </li>

              <li>
                <a href="#">
                  <BsTwitter className="icons twitter" />
                </a>
              </li>

              <li>
                <a href="#">
                  <BsLinkedin className="icons linkedin" />
                </a>
              </li>
            </ul>
            <div className="details">
              <h2>
                John Doe <span className="job-title">UI Developer</span>
              </h2>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default ImageSlider;
