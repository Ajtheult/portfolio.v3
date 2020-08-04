import React from "react";
import "../../../App.css";
export const Skills = () => {
  return (
    <div>
      <div
        class="section"
        style={{ backgroundColor: "#101010" }}
        id="skillsets"
      >
        <div class="container">
          <div class="row">
            <h1 class="center white-text">My Skills</h1>
          </div>
          <div class="row center">
            <div class="col s12 m12 l3">
              <img class="responsive-img" src="img/cpp.png" alt="1" />
            </div>
            <div class="col s12 m12 l3">
              <img class="responsive-img" src="img/node.png" alt="1" />
            </div>
            <div class="col s12 m12 l3">
              <img class="responsive-img" src="img/py.png" alt="1" />
            </div>
            <div class="col s12 m12 l3">
              <img class="responsive-img" src="img/shell.png" alt="1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
