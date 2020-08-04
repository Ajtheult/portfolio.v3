import React from "react";
import background1 from "../resources/background1.jpg";
import me from "../resources/me.jpeg";
import me2 from "../resources/me2.jpg";
import M from "materialize-css";
import "../../../App.css";

import { Parallax } from "react-parallax";
const inlineStyle = {
  left: "50%",
  top: "45%",
  position: "absolute",
  padding: "50px",
  width: "70%",
  transform: "translate(-50%, -50%)",
};

export const Home = () => {
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".modal");
    // eslint-disable-next-line
    var instances = M.Modal.init(elems, {});
  });

  return (
    <div className="colour_of_about_text">
      <Parallax bgImage={background1} strength={1000}>
        <div style={{ height: 601 }}>
          <div style={inlineStyle}>
            <h1 className="intro_name_top">Asaph Franks</h1>
            <h4 className="intro_name_bottom">Frontend Developer</h4>
          </div>
        </div>

        <a
          className="btn-floating btn-large waves-effect waves-light black center"
          href="#about"
        >
          <i className="material-icons">person</i> {/*About */}
        </a>
        <a
          className="btn-floating btn-large waves-effect waves-light black center"
          href="/skills"
        >
          <i className="material-icons">settings</i> {/*Skills*/}
        </a>
        <a
          className="btn-floating btn-large waves-effect waves-light black center"
          href="/mywork"
        >
          <i className="material-icons">build</i> {/*Work*/}
        </a>
        <a
          className="btn-floating btn-large waves-effect waves-light black center"
          href="/testimonials"
        >
          <i className="material-icons">people</i> {/*Testimonials*/}
        </a>
        <a
          className="btn-floating btn-large waves-effect waves-light black center"
          href="#contact"
        >
          <i className="material-icons">phone</i> {/*Contact*/}
        </a>
      </Parallax>
      <div style={{ height: "1vh" }} className="white move_the_con" />
      <div className="row">
        <div className="col s8">
          {" "}
          {/* Information on About page-Start */}
          <div className="container">
            <h1 className="about-title" id="about">
              About Me
            </h1>

            <h5 className="my_info">D.O.B:</h5>
            <p className="my_info_2">-10 February 2001</p>
            <h5 className="my_info"> Location </h5>
            <p className="my_info_2">-Blue Downs</p>
            <h5 className="my_info">Nationality</h5>
            <p className="my_info_2">-South African</p>
            <h5 className="my_info">Willing to relocate?</h5>
            <p className="my_info_2">-No</p>
            <h5 className="my_info">
              Do I have a criminal record/been blacklisted?
            </h5>
            <p className="my_info_2">-No</p>
            <h5 className="my_info">Education</h5>
            <p className="my_info_2">
              -Matriculated from "Tuscany Glen High" in 2019
            </p>
            <h4 className="my_info">Passion board</h4>
            <div className="my_info_3">
              <a
                className="waves-effect waves-light btn modal-trigger white"
                href="#modal1"
              >
                <p className="black_text margin_on_top">Expand</p>
              </a>
              <div id="modal1" className="modal bottom-sheet">
                <div className="modal-content">
                  <h4 className="black_text passion_heading">Passion Board</h4>
                  <div className="black_text">
                    {" "}
                    <h4 className="passion_content">-Music</h4>
                    <h4 className="passion_content">-Playing Video games</h4>
                    <h4 className="passion_content">-Playing Table Tennis</h4>
                    <h4 className="passion_content">-Watching anime</h4>
                    <h4 className="passion_content">-Drawing</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Information on About page-Start */}
        </div>
        <div>
          <Parallax
            bgImage={me}
            strength={500}
            style={{ width: "33%" }}
            className="right"
          >
            <div style={{ height: "100vh" }}></div>
          </Parallax>
        </div>
      </div>

      <div className="row">
        <div className="col s5">
          <Parallax bgImage={me2} strength={150} style={{ width: "70%" }}>
            <div style={{ height: 700 }}>
              <div style={inlineStyle} className="intro_name"></div>
            </div>
          </Parallax>
        </div>

        <div className="col s7 about_container" style={{ width: "50%" }}>
          <h6 className="about-title center">Student Bio</h6>
          <p className="student_bio ">
            I am a consistent, commited and kind-hearted individual with the
            drive to accomplish anything I set my mind to. Being a musician
            means that dedication to something is not new to me. I want to
            pursue a career in the technology field as a <br />
            <strong className="big_frontend">
              Frontend Developer.
            </strong> <br /> I have always been fascinated with computers as a
            child. I would sit on my mother's laptop and find it so cool to
            navigate my way into every folder even though there was always a
            dead end. I became passionate about coding at the end of grade 12
            when my friend told me about how cool coding is and I tried it out.
            I then built my own site with basic HTML.
          </p>
        </div>
      </div>
      {/* Contact section */}
      <div style={{ height: "1vh" }} className="white move_the_con" />
      <footer style={{ fontFamily: "Times" }} className="page-footer black">
        <div className="container" id="contact">
          <div className="row">
            <h1 className="contact-title">Contact</h1>
            <div className="col l6 s12">
              {" "}
              <div className="logos">
                <i className="fab fa-codepen">
                  {" "}
                  <a href="https://codepen.io/ajtheult">Codepen&nbsp;</a>{" "}
                </i>
                <i className="fab fa-github">
                  {" "}
                  <a href="https://github.com/Ajtheult">Github&nbsp;</a>{" "}
                </i>
                <i className="fab fa-linkedin">
                  {" "}
                  <a href="https://www.linkedin.com/in/asaph-franks-307a231a5/">
                    Linkedin&nbsp;
                  </a>{" "}
                </i>
                <i className="fab fa-facebook-square">
                  {" "}
                  <a href="https://www.facebook.com/asaph.franks.7/">
                    Facebook&nbsp;
                  </a>{" "}
                </i>
                <i className="fab fa-instagram">
                  {" "}
                  <a href="https://www.instagram.com/aj_the_ultimate/?fbclid=IwAR1maxejej29IRwM2tTQavtbmTC9TFLbAwZoi52WwiJhzLvcEucPXSZHX2o">
                    Instagram&nbsp;
                  </a>{" "}
                </i>
              </div>
            </div>
            <div className="col l6 s12" style={{ marginTop: "-10px" }}>
              <h5 className="left">Email: Asaphfranksboi@gmail.com</h5>
              <h5 className="left">Phone Number: 0685414197</h5>
            </div>
            {/* Contact details and icons */}
          </div>
        </div>
      </footer>
    </div>
  );
};
