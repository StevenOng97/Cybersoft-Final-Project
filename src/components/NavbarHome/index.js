import { Link } from "react-router-dom";
import "./../../index.css";
import React, { Component } from "react";

export default class NavbarHome extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ backgroundColor: "blue" }}
      >
        <a className="navbar-brand" href="#">
          <img src="./../../../../logomain.png" width="220"></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className=" col-xl-9 ">
            <div className="header__right">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/">
                    <a className="nav-link" href="#lichChieu">
                      Lịch Chiếu
                    </a>
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link to="/">
                    <a className="nav-link" href="#lichFilm">
                      Cụm Rạp
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/">
                    <a className="nav-link" href="#news">
                      Tin Tức
                    </a>
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link to="/">
                    <a className="nav-link" href="#ungDung">
                      Ứng Dụng
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3  d-flex dangnhap">
            <Link to="./auth" className="nav-link d-flex">
              <img src="./../../../../avarta.png" width="35" height="35 "></img>
              <p className="ml-2"> Log in</p>
            </Link>
            <a href="#" className="nav-link">
              Sign up
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
