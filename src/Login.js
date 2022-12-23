import React from "react";
import "./App.css";
import { useState } from "react";

const Login = (props) => {
  const [phoneNumber, setphoneNumber] = useState("");
  const [count, setCount] = useState(0);
  const [Country, setCountry] = useState("+91");

  const handleCountry = (event) => {
    setCountry({ value: event.target.value });
  };

  const handleSubmit = (event) => {
    console.log("handleSubmit ran");
    event.preventDefault();

    //  input values
    console.log("phoneNumber ", phoneNumber);
    console.log("Country ", Country);
    console.log("You clicked Continue Button " + count + " times");

    //  clear all input values
    setphoneNumber("");
    setCountry("");
  };

  return (
    <div>
      <div className="login_login__JawvV">
        <button className="b1">
          <div className="container ">
            <div className="flex">
              <div className="logo">
                <img
                  src="https://www.prepladder.com/app/logo.svg"
                  alt="https://www.prepladder.com/app/logo.svg"
                />
              </div>
              <div className="logos">
                <div className="social-title">Follow us on </div>
                <ul className="ul_1">
                  <li>
                    <a href="http://">
                      <img
                        src="https://www.prepladder.com/app-ui/fb.svg"
                        alt="https://www.prepladder.com/app-ui/fb.svg"
                        href="https://www.facebook.com/"
                        className=" me-2"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="http://">
                      <img
                        src="https://www.prepladder.com/app-ui/youtube.svg"
                        alt="https://www.prepladder.com/app-ui/youtube.svg"
                        href="https://www.youtube.com/"
                        className=" me-2"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="http://">
                      <img
                        src="https://www.prepladder.com/app-ui/insta.svg"
                        alt="https://www.prepladder.com/app-ui/insta.svghttps://www.prepladder.com/app-ui/insta.svg"
                        href="https://www.instagram.com/"
                        className=" me-2"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="http://">
                      <img
                        src="https://www.prepladder.com/app-ui/telegram.svg"
                        alt="https://www.prepladder.com/app-ui/telegram.svg"
                        href="https://www.telegram.com/"
                        className=" me-2"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </button>
        <div className="main_container">
          <div className="main_container_1">
            <div>
              <div className="inner_container">
                <div className="inner_container_1">
                  <div
                    id="carouselExampleDark"
                    className="carousel carousel-dark slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div
                        className="carousel-item active  mb-5"
                        data-bs-interval="3000"
                      >
                        <div className="img-flex">
                          <div className="position">
                            <img
                              src="https://image.prepladder.com/content/Login-feature-1.svg"
                              className="d-block w-55"
                              alt="https://image.prepladder.com/content/Login-feature-1.svg"
                            />
                          </div>
                          <div className="text">
                            <h3>Welcome to Prepladder</h3>
                            <p>
                              Your one-stop destination to crack competitive
                              exams like Medical PG, FMGE, NEET SS, INI CET,
                              CAT, and UPSC. Own your Dream!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="carousel-item mb-5"
                        data-bs-interval="3000"
                      >
                        <div className="img-flex">
                          <div className="position">
                            <img
                              src="https://image.prepladder.com/content/8bc4sf51QkbvG0Y7JsH61639716695.svg"
                              className="d-block w-55"
                              alt="https://image.prepladder.com/content/8bc4sf51QkbvG0Y7JsH61639716695.svg"
                            />
                          </div>
                          <div className="text">
                            <h3>Video Lectures</h3>
                            <p>
                              Engaging, conceptual videos to build lasting
                              knowledge that can be revised easily anytime
                              anywhere.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="carousel-item mb-5"
                        data-bs-interval="3000"
                      >
                        <div className="img-flex">
                          <div className="position">
                            <img
                              src="https://image.prepladder.com/content/tqJej31MhdMKk1P3jXVW1639716744.svg"
                              className="d-block w-55"
                              alt="https://image.prepladder.com/content/tqJej31MhdMKk1P3jXVW1639716744.svg"
                            />
                          </div>
                          <div className="text">
                            <h3>QBank And Test Series</h3>
                            <p>
                              Authentic pattern with rich explanations that are
                              attempted by more than 90,000 students everyday.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-indicators  ">
                        <button
                          type="button"
                          data-bs-target="#carouselExampleDark"
                          data-bs-slide-to="0"
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleDark"
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleDark"
                          data-bs-slide-to="2"
                          aria-label="Slide 3"
                        ></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="input_container">
              <h4>Let's Get Started</h4>
              <div className="input_container_2">
                <p>
                  Enter your mobile number to Sign up/Sign in
                  <br /> to your Prepladder account
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="pass mb-3">
                  <div className="input_container_code">
                    <select
                      id="Country"
                      name="Country"
                      className="country"
                      onChange={(event) => setCountry(event.target.value)}
                      value={Country}
                    >
                      <option>code</option>
                      <option value="india code:+91">+91</option>
                      <option value="Afganistan code:+93">+93</option>
                      <option value="Angola code:+244">+244</option>
                      <option value="Argentina code:+54">+54</option>
                    </select>
                  </div>
                  <div className="pass1">
                    <input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      autoComplete="off"
                      maxLength={10}
                      onChange={(event) => setphoneNumber(event.target.value)}
                      value={phoneNumber}
                      placeholder="Enter your Phone number"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  value="Submit"
                  onClick={() => setCount(count + 1)}
                  className="mb-2 w-100 submit_but"
                >
                  {props.title}
                </button>
              </form>
              <p>
                By signing up, you agree to Terms & Conditions and Privacy
                Policy of PrepLadder
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
