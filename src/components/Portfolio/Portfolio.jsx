import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/project1.JPG";
import IMG2 from "../../assets/project2.JPG";
import IMG3 from "../../assets/project3.JPG";
import IMG4 from "../../assets/project4.JPG";
import IMG5 from "../../assets/project5.JPG";
import IMG6 from "../../assets/project6.JPG";

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="item1" />
          </div>
          <h4 className="title">Y2You</h4>
          <p className="project-content">
            Y2you Downloader enables you to acquire high-quality MP3 and MP4
            media from YouTube and download it to your device.
          </p>

          <ul>React, NodeJs</ul>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Bkind254/y2y"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://y2you.netlify.app"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Check it out
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="item2" />
          </div>
          <h4 className="title">MovieYard</h4>
          <p className="project-content">
            This website serves as a platform for discovering movies by
            facilitating a search function, although it does not support
            streaming.
          </p>

          <ul>React , NodeJs</ul>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Bkind254/Movie-Yard"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://movieyard.netlify.app"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Check it out
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="item3" />
          </div>
          <h4 className="title">CraftsmenCreatives</h4>
          <p className="project-content">
            Welcome to the home of art.This website connects you to one of the
            top artists in Nakuru.
          </p>

          <ul>HTML , CSS, Bootstrap, Javascript</ul>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Bkind254/CRAFTSMEN-CREATIVES-KE-RESPONSIVE"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://craftsmencreatives-ke.netlify.app"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Check it out
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="item4" />
          </div>
          <h4 className="title">Personal Website</h4>
          <p className="project-content">
            This is a web-based personal portfolio that showcases a range of
            content including experiences, projects, profile, and technical
            skills. It's worth noting that the project has been Open Sourced.
          </p>

          <ul>React, CSS</ul>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Bkind254/"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a href="#" className="btn btn-primary" rel="noreferrer">
              Check it out
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="item5" />
          </div>
          <h4 className="title">AboutYourCountry</h4>
          <p className="project-content">
            A simple react project which tells you a little about your country
            using Geocoding API.
          </p>

          <ul>React , CSS</ul>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Bkind254/What-About-my-Country"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://aboutmycountry.netlify.app"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Check it out
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="item5" />
          </div>
          <h4 className="title">Stormzyy</h4>
          <p className="project-content">
            A simple Weather Forecast app built using JavaScript, CSS and
            Weather API.The project is currently Open-Sourced, ready for use for
            the community.
          </p>

          <ul>HTML, CSS, JavaScript</ul>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Bkind254/WeatherApp"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://stormzyy.netlify.app"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Check it out
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
