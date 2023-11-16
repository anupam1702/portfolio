import React from "react";
import Profile from "../../assets/profile_photo.jpeg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import './home.css'

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Anupam Gupta.</span><br/>Web devloper
          </h1>

          <p className="home__description">
            Passionate and dedicated web developer with a hunger for learning
            and a drive to create innovative and user-friendly websites.
            I am constantly seeking new challenges and opportunities to expand 
            my skills and knowledge in the ever-evolving world of web development."
          </p>

          <Link to="/about" className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  );
};

export default Home;
