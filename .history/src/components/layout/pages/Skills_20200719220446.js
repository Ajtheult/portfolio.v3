import React from "react";
import "../../../App.css";
import background4 from "../resources/background4.jpg";

export const Skills = () => {
  return (
    <div>
      <div className="bg-color">
        <img src={background4} className="bg" alt="bg" />
      </div>
      <div class="container_properties">
        <h1 className="skills_text">Skills</h1>
        <ul>
          <li className="html skills_li skills_text">HTML</li>
          <li className="css skills_li skills_text">CSS</li>
          <li className="js skills_li skills_text">JavaScript</li>
          <li className="react skills_li skills_text">React</li>
          <li className="py skills_li skills_text">Python</li>
          <li className="sql skills_li skills_text">mySQL</li>
        </ul>
      </div>
    </div>
  );
};
