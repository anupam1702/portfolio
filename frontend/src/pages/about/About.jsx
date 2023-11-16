import React from "react";
import Info from "../../components/info";
import Stats from "../../components/Stats";
import { FaDownload } from "react-icons/fa";
import Resume from "../../assets/resume.pdf";
import Skills from "../../components/Skills";
import "./about.css";

const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title">
          About <span>Me</span>
        </h2>

        <div className="about__container grid">
          <div className="about__info">
            <h3 className="section__subtitle">Personal Infos</h3>

            <ul className="info__list grid">
              <Info />
            </ul>
            <a href={Resume} download="" className="button">
              Download CV
              <span className="button__icon">
                <FaDownload />
              </span>
            </a>
          </div>

          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>

      <div className="separator"></div>

      <section className="skills">
        <h3 className="section__subtitle section__center">My Skills</h3>

        <div className="skills__container grid"><Skills/></div>
      </section>

      <div className="separator"></div>


    </main>
  );
};

export default About;
