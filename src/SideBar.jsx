import React from "react";
import tv from "./tv.svg";

const SideBar = ({logoutClick}) => {
  return (
    <div className="sidebar">
      <nav>
        <div className="navbar">
          <div className="logo">
            <img src={tv} alt="logo" />
          </div>
          <ul>
            <li>
              <a href="#" >
                <span className="nav-item nav-text">Movie Box</span>
              </a>
            </li>
            <li>
              <a href="#">
                <box-icon name="home" type="solid" color="#111111"></box-icon>
                <span className="nav-item">Home</span>
              </a>
            </li>
            <li>
              <a href="#" className="active">
                <box-icon name="camera-movie"></box-icon>
                <span className="nav-item activetext ">Movies</span>
              </a>
            </li>
            <li>
              <a href="#">
                <box-icon name="tv"></box-icon>
                <span className="nav-item">TV Series</span>
              </a>
            </li>
            <li>
              <a href="#">
                <box-icon name="news"></box-icon>
                <span className="nav-item">Upcoming</span>
              </a>
            </li>

            <div className="sidetext">
              <p className="mainsidetext">
                Play Movies quizzes and earn free tickets
              </p>
              <p className="extrasidetext"> 80k people watching now</p>

              <button className="playbutton">Start Playing</button>
            </div>

            <li>
              <a href="#" className="logout" onClick={logoutClick}>
                <box-icon name="log-out"></box-icon>
                <span className="nav-item">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
