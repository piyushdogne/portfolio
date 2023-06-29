import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";
import piyush from "../assets/piyush.JPG"


const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={piyush}
          alt="Founder"
        />

        <h2>Piyush Dogne Gurjar</h2>
        <p>उसने कहा था वो आएगा , जब जब धर्म की हानि होगी !!!</p>
        <p>PROUDLY CRAFTED IN INDIA ,  🇮🇳</p>
        <p>!!! SITA RAM !!!</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="http://youtube.com/@piyushdognegurjar" target="blank"><AiFillYoutube /></a>
          <a href="https://instagram.com/piyushdogne02" target="blank"><AiFillInstagram /></a>
          <a href="https://twitter.com/PiyushDogne" target="blank"><AiFillTwitterCircle /></a>
          <a href="https://www.linkedin.com/in/piyush-dogne-gurjar-91607b1b8" target="blank"><AiFillLinkedin /></a>
          <a href="https://github.com/piyushdogne" target="blank"><AiFillGithub /></a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
