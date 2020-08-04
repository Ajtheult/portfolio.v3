/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import me from "./me.jpg";
import music from "./music.jpg";
import "../../../App.css";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems, {});
    });
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper colour">
            <a
              href="/portfolio-v3"
              data-target="slide-out"
              className="sidenav-trigger show-on-large"
            >
              <i className="material-icons">menu</i>
            </a>
          </div>
        </nav>

        <ul id="slide-out" className="sidenav">
          <li>
            <div className="user-view">
              <div className="background">
                <img className="background_img" src={music} alt="img" />
              </div>

              <img className="circle" src={me} alt="img of me" />

              <span className="black-text name move_me">Asaph Franks</span>

              <span className="black-text email  move_me">
                Asaphfranksboi@gmail.com
              </span>
            </div>
            {/* Change font so that the name can be better read */}
          </li>
          <Link to="/portfolio-v3" className="waves-effect">
            <li>Home</li>
          </Link>{" "}
          <br />
          <Link to="/skills" className="waves-effect">
            <li>Skills</li>
          </Link>
          <br />
          <Link href="/mywork" className="waves-effect">
            <li>Work</li>
          </Link>
          <br />
          <Link to="/testimonials" className="waves-effect">
            <li>Testimonials</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default Navbar;
