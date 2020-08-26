import React from "react";
import "../../../App.css";
import LL from "../resources/LL.png";
import Github from "../resources/Github.png";
import Contact from "../resources/Contact.png";
import Tech from "../resources/Tech.png";
import background3 from "../resources/background3.jpg";
import Whatsapp from "../resources/Whatsapp.png";
import Insta from "../resources/insta.jpg";
import kj from "../resources/kj.png";

export const MyWork = () => {
  return (
    <div className="container">
      <div className="bg-color">
        <img src={background3} className="bg" alt="bg" />
      </div>
      <div className="container  ">
        <br />
        <br />
        <br />
        <h5>Navigate with these buttons</h5>
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
        </a> */}
        <a
          href="#python"
          className="btn-floating btn-large waves-effect waves-light black button_margin"
        >
          <i className="fab fa-python"></i>
        </a>
      </div>
      <br />
      <a
        className="waves-effect waves-red btn black"
        href="https://pure-basin-79312.herokuapp.com/"
        rel="noopener noreferrer"
        target="_blank"
      >
        Final E-commerce project
      </a>
      <h4 id="html" className="work_title">
        HTML5/CSS3
      </h4>
      <div className="row decrease_container_size">
        <div className="col s12">
          <div className="card ">
            <div className="card-image">
              <img src={kj} alt="img" />
              <span className=" my_work_title">King James Challenge Site</span>
            </div>
            <div className="card-content ">
              <p className="black_text my_work_desc">
                This site is a challenge that was given to us by the company
                "King James".
              </p>
            </div>
            <br />
            <div className="white link-size">
              <a
                href="https://github.com/Ajtheult/King-James-Site.git"
                className="waves-effect waves-light btn black move_github_button"
                rel="noopener noreferrer"
                target="_blank"
              >
                Github
              </a>
              <a
                href="kingjames-site.netlify.app
                "
                className="waves-effect waves-light btn black move_github_button"
                rel="noopener noreferrer"
                target="_blank"
              >
                Netlify
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row decrease_container_size">
        <div className="col s12">
          <div className="card ">
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
            <br />
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
      <div className="row decrease_container_size">
        <div className="col s12">
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
            <br />
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
      <div className="row decrease_container_size">
        <div className="col s12">
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
            <br />
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
      <div className="row decrease_container_size">
        <div className="col s12">
          <div className="card">
            <div className="card-image">
              <img src={Github} alt="img" />
              <span className=" my_work_title">Github Finder</span>
            </div>
            <div className="card-content">
              <p className="black_text my_work_desc">
                This is an application to search for someone's github account
                then display their account details and their work. <br /> It
                does not function as expected. I am working on debugging the
                problem.
              </p>
            </div>
            <br />
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
      <div className="row decrease_container_size">
        <div className="col s12">
          <div className="card">
            <div className="card-image">
              <img src={Whatsapp} alt="img" />
              <span className=" my_work_title">Whatsapp recreation</span>
            </div>
            <div className="card-content">
              <p className="black_text my_work_desc">
                I recreated Whatsapp with the knowledge I have acquired thus far
                at Life Choices Coding Academy. It was built for mobile.
              </p>
            </div>
            <br />
            <div className="link-size">
              <a
                href="https://github.com/Ajtheult/Whatsapp_recreation.git"
                className="waves-effect waves-light btn black move_github_button"
                rel="noopener noreferrer"
                target="_blank"
              >
                Github
              </a>{" "}
              <a
                href="
                whatsapp-recreation.netlify.app"
                className="waves-effect waves-light btn black"
                rel="noopener noreferrer"
                target="_blank"
              >
                Netlify
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Insta */}
      <div className="row decrease_container_size">
        <div className="col s12">
          <div className="card">
            <div className="card-image">
              <img src={Insta} alt="img" />
              <span className=" my_work_title">
                Instagram profile recreation
              </span>
            </div>
            <div className="card-content">
              <p className="black_text my_work_desc">
                I created my profile using react. Built for mobile only.
              </p>
            </div>
            <br />
            <div className="link-size">
              <a
                href="https://github.com/Ajtheult/Instagram-profile-recreation.git"
                className="waves-effect waves-light btn black move_github_button"
                rel="noopener noreferrer"
                target="_blank"
              >
                Github
              </a>{" "}
              {/* <a
                href="https://serene-sammet-db2a49.netlify.app/"
                className="waves-effect waves-light btn black"
                rel="noopener noreferrer"
                target="_blank"
              >
                Netlify
              </a> */}
            </div>
          </div>
        </div>
      </div>
      <h4 id="python" className="work_title">
        Python
      </h4>
      <div className="row decrease_container_size">
        <div className="col s12">
          <div className="card">
            <div className="card-image">
              <img
                src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
                alt="img"
              />
              <span className=" my_work_title">Number Guessing Game</span>
            </div>
            <div className="card-content">
              <p className="black_text my_work_desc">
                This is a number guessing game that will determine how many
                numbers you got right and gives you a cash prize according to
                that number.
              </p>
            </div>
            <br />
            <div className="link-size">
              <a
                href="https://github.com/Ajtheult/Number-Guessing-Game/raw/master/mini_project.exe"
                className="waves-effect waves-light btn black move_github_button"
                rel="noopener noreferrer"
                target="_blank"
              >
                Download link
              </a>{" "}
              <a
                href="https://github.com/Ajtheult/Number-Guessing-Game"
                className="waves-effect waves-light btn black"
                rel="noopener noreferrer"
                target="_blank"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row decrease_container_size">
        <div className="col s12">
          <div className="card">
            <div className="card-image">
              <img
                src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
                alt="img"
              />
              <span className=" my_work_title">Calculator</span>
            </div>
            <div className="card-content">
              <p className="black_text my_work_desc">
                This is a calculator which was built using Tkinter(a python
                module)
              </p>
            </div>
            <br />
            <div className="link-size">
              <a
                href="https://github.com/Ajtheult/Calculator/raw/master/calculator.exe"
                className="waves-effect waves-light btn black move_github_button"
                rel="noopener noreferrer"
                target="_blank"
              >
                Download link
              </a>{" "}
              <a
                href="https://github.com/Ajtheult/Calculator.git"
                className="waves-effect waves-light btn black"
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
