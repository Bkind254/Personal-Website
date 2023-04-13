import React, { useState } from "react";
import "./About.css";
import ME from "../../assets/me.jpg";
import HeaderSocials from "./HeaderSocials";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

function About() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleRoot = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <section>
      <button className="toggle-button" onClick={toggleRoot}>
        {isDarkMode ? (
          <BsFillMoonStarsFill />
        ) : (
          <BsFillSunFill className="sun" />
        )}
      </button>
      <style>
        {`:root {
          --color-bg: ${isDarkMode ? "#fff" : "#001219"};
          --color-bg-variant: ${isDarkMode ? "#ccc" : "#2c2c6c"};
          --color-primary: #4db5ff;
          --color-primary-variant: rgba(77, 181, 255, 0.4);
          --color-white: ${isDarkMode ? "#1f1f38" : "#fff"};
          --color-light: ${
            isDarkMode ? "rgba(4, 4, 19)" : "rgba(255, 255, 255, 0.89)"
          };
          --color-bg-variant2: ${isDarkMode ? "#ccc" : "#003049"};
        }

       `}
      </style>

      <h2>Hi I'm Brian Selim</h2>

      <div className="container about__container">
        <div className="about__me image">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <p>
            I am a front-end Software Engineer based in Nakuru with a great
            passion for building things with code. My arsenal of skills includes
            a mastery of React, as well as proficiency in HTML, CSS, and
            JavaScript, enabling me to deliver top-notch results with every
            project I tackle.
          </p>
        </div>
      </div>
      <HeaderSocials />
    </section>
  );
}

export default About;
