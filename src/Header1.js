import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Outlet, Link } from "react-router-dom";
import dtfIGuShusAXfmvfRskY1668505769 from "./dtfIGuShusAXfmvfRskY1668505769.png";

const Header1 = (props) => {
  return (
    <div>
      <div className="d-flex  justify-around p-2 ">
        <div className="d-flex flex-row ">
          <div className="me-4">
            <img
              src={logo}
              className="rounded float-start w-85 h-auto"
              alt="logo"
            />
          </div>

          <ul className="nav ">
            <li className="nav-item nav-link active dropdown">
              <button className="dropbtn fs-6">Medical PG &#709;</button>
              <div className="dropdown-content">
                <a href="#">Medical PG</a>
                <a href="#">
                  <div className="drop-cont">
                    <div>Super speciality</div>
                    <div> &#10148;</div>
                  </div>
                </a>
                <a href="#">
                  <div className="drop-cont">
                    <div>UPSC</div>
                    <div>&#10148;</div>
                  </div>
                </a>
                <a href="#">CAT</a>
              </div>
            </li>
          </ul>
        </div>

        <div className="d-flex flex-row ">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a
                className="nav-link active me-2 text-dark"
                aria-current="page"
                href="#"
              >
                {props.title1}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link  me-2 text-dark"
                aria-current="page"
                /* href="#" */
                to="/Blogs"
              >
                <Link
                  to="/blog"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {props.title2}
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <button type="button" className=" btn btn-light">
                <Link
                  to="/plans"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {props.title3}
                </Link>
              </button>
            </li>

            <li className="nav-item">
              <button type="button" className=" btn btn-dark">
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Login
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="alert alert-warning p-2 text-center mb-0" role="alert">
        We have done it again, 92.5/100 Strike Rate in NEET-PG. Your Success is
        our Pride!
        <button type="button" className=" btn btn-light ms-3 p-1">
          Enroll now!
        </button>
      </div>
      <Outlet />
    </div>
  );
};
export default Header1;
