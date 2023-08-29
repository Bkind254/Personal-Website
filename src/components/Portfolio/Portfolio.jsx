import React from "react";
import "./Portfolio.css";
import { FaGithub } from "react-icons/fa";
import IMG1 from "../../assets/project1.JPG";
import IMG2 from "../../assets/project2.JPG";
import IMG3 from "../../assets/project3.JPG";
import IMG4 from "../../assets/hero.JPG";
import IMG5 from "../../assets/shoshy.JPG";
import IMG7 from "../../assets/project7.JPG";

function Portfolio() {
  return (
    <section id="portfolio">
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="item1" />
          </div>
          <h4 className="title">Y2Yu</h4>
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
              <FaGithub />
            </a>
            <a
              href="https://y2yu.com/"
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
          <h4 className="title">Hero Match</h4>
          <p className="project-content">
            This is a simple game website. Feel free to play a little😉.
          </p>

          <ul>React, CSS</ul>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Bkind254/sushi"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://heromatch.netlify.app/"
              className="btn btn-primary"
              rel="noreferrer"
            >
              Check it out
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="item5" />
          </div>
          <h4 className="title">SHOSHY</h4>
          <p className="project-content">
            An online shop using a sleek and modern interface. The project was
            developed to create an e-commerce space and the backend is managed
            with Sanity.
          </p>

          <ul>Next Js , CSS</ul>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Bkind254/Store-42"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://shoshy.netlify.app/"
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
              <FaGithub />
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
      </div>
    </section>
  );
}

export default Portfolio;
