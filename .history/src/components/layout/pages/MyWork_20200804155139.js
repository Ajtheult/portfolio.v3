import React from "react";
import "../../../App.css";
import LL from "../resources/LL.png";
import Github from "../resources/Github.png";
import Contact from "../resources/Contact.png";
import Tech from "../resources/Tech.png";
import background3 from "../resources/background3.jpg";
import Whatsapp from "../resources/Whatsapp.png";
export const MyWork = () => {
  return (
    <div className="container">
      <div className="bg-color">
        <img src={background3} className="bg" alt="bg" />
      </div>
      <div className="container push_this_down ">
        <h6>Navigate with these buttons</h6>
        <a
          href="#html"
          className="btn-floating btn-large waves-effect waves-light black button_margin"
        >
          <i className="fab fa-html5"></i>
        </a>
        <a
          href="#react"
          className="btn-floating btn-large waves-effect waves-light black button_margin"
        >
          <i className="fab fa-react"></i>
        </a>
        {/* <a
          href="#javascript"
          className="btn-floating btn-large waves-effect waves-light black button_margin"
        >
          <i className="fab fa-js-square"></i>
        </a>
        <a
          href="#python"
          className="btn-floating btn-large waves-effect waves-light black button_margin"
        >
          <i className="fab fa-python"></i>
        </a> */}
      </div>
      <br />
      <a
        class="waves-effect waves-light btn black"
        href="https://pure-basin-79312.herokuapp.com/"
        rel="noopener noreferrer"
        target="_blank"
      >
        Final E-commerce project
      </a>
      <h4 id="html" className="work_title">
        HTML5/CSS3
      </h4>
      <div className="row">
        <div className="col s6">
          <div className="card">
            <div className="card-image">
              <img src={LL} alt="img" />
              <span className=" my_work_title">
                Ling Ling 40 hours (Contacts)
              </span>
            </div>
            <div className="card-content ">
              <p className="black_text my_work_desc">
                This is a website for a business I created from a meme about
                virtuoso pianists working at a music store.
              </p>
            </div>
            <div className="white link-size">
              <a
                href="https://github.com/Ajtheult/Ling-Ling-40-hours.git"
                className="waves-effect waves-light btn black move_github_button"
                rel="noopener noreferrer"
                target="_blank"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
      <h4 id="react" className="work_title">
        React
      </h4>
      <div className="row">
        <div className="col s6 right">
          <div className="card">
            <div className="card-image">
              <img src={Github} alt="img" />
              <span className=" my_work_title">Github Finder</span>
            </div>
            <div className="card-content">
              <p className="black_text my_work_desc">
                This is an appication to search for someone's github account
                then display their account details and their work.
              </p>
            </div>
            <div className="link-size">
              <a
                href="https://github.com/Ajtheult/Github-Finder.git"
                className="waves-effect waves-light btn black move_github_button"
                rel="noopener noreferrer"
                target="_blank"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s6">
          <div className="card">
            <div className="card-image">
              <img src={Contact} alt=" img" />
              <span className=" my_work_title">Contact Keeper</span>
            </div>
            <div className="card-content">
              <p className="black_text my_work_desc">
                This is an application which allows one to register and log into
                it. Each user has contacts which can be added and is unique to
                each user.
              </p>
            </div>
            <div className="link-size">
              <a
                href="https://github.com/Ajtheult/Contact-Keeper.git"
                className="waves-effect waves-light btn black move_github_button"
                rel="noopener noreferrer"
                target="_blank"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s6 right">
          <div className="card">
            <div className="card-image">
              <img src={Tech} alt="img" />
              <span className=" my_work_title">IT Logger</span>
            </div>
            <div className="card-content">
              <p className="black_text my_work_desc">
                This is an application to manage problems around an IT
                department. It assign new workers which can then be chosen to do
                work as well.
              </p>
            </div>
            <div className="link-size">
              <a
                href="https://github.com/Ajtheult/IT-Logger.git"
                className="waves-effect waves-light btn black move_github_button"
                rel="noopener noreferrer"
                target="_blank"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s6 left">
          <div className="card">
            <div className="card-image">
              <img src={Whatsapp} alt="img" />
              <span className=" my_work_title">Whatsapp recreation</span>
            </div>
            <div className="card-content">
              <p className="black_text my_work_desc">
                I attempted to recreate Whatsapp with the knowledge I have
                acquired thus far at Life Choices Coding Academy. It is built
                for mobile.
              </p>
            </div>
            <div className="link-size">
              <a
                href="https://github.com/Ajtheult/Whatsapp_recreation.git"
                className="waves-effect waves-light btn black move_github_button"
                rel="noopener noreferrer"
                target="_blank"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
