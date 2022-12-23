import React from "react";
import "./App.css";
import { useState } from "react";
import Plans_main from "./Plans_main.js";
import Booking_main from "./Booking_main.js";
import TVvWmxUxAmgy1dx9unu1666776987 from "./TVvWmxUxAmgy1dx9unu1666776987.png";
import ianIlChXxueR77g75W2o1666777048 from "./ianIlChXxueR77g75W2o1666777048.png";
import B6NuClHySeQAc1oRnKiH1666777224 from "./B6NuClHySeQAc1oRnKiH1666777224.png";
import sJBVQHUq2Rr2gem15ieB1666777289 from "./sJBVQHUq2Rr2gem15ieB1666777289.png";
import ukUfPVs3JRTA0tkShE181666777411 from "./ukUfPVs3JRTA0tkShE181666777411.png";
import b2sXV9Ewevyw6mquQqtJ1666777458 from "./b2sXV9Ewevyw6mquQqtJ1666777458.png";

const Plans = (props) => {
  const [phoneNumber, setphoneNumber] = useState("");
  const [country, setCountry] = useState("+91");
  const [count, setCount] = useState(0);

  const handleCountry = (event) => {
    setCountry({ value: event.target.value });
  };

  const handleSubmit = (event) => {
    console.log("handleSubmit ran");
    event.preventDefault();

    //  input values
    console.log("phoneNumber ", phoneNumber);
    console.log("Country ", country);
    console.log("You clicked Continue Button " + count + " times");

    //  clear all input values
    setphoneNumber("");
    setCountry("");
  };

  return (
    <div>
      <div className="login_login__JawvV">
        <header>
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
        </header>
        <div className="plan_main_container">
          <div className="main_container_1">
            <div>
              <div className="inner_container">
                <div className="plan_container_1">
                  <h4>Introducing</h4>
                  <h1>Dreamwork 4.0</h1>
                  <h3>All you need for NExT</h3>
                  <p className="my-2 plan_text mb-5">
                    Most concise and relevant resource with 92.5% Strike Rate to
                    help you prepare for your Medical PG examinations.
                  </p>
                  <div className="Plan_card mb-5">
                    <div className="Plan_card-body">
                      <ul className="plan_ul">
                        <li>&28073; Starting at just ₹25,999</li>
                        <li>
                          <span>
                            &28073; Get additional validity of 15 days
                          </span>
                          on 6 months & above plans
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="Plan_card1 mb-2">
                    <div className="Plan_card-body1">#NEXT</div>
                    <div className="Plan_card-body1">#DreamPack4.0</div>
                    <div className="Plan_card-body1">#NextReady</div>
                    <div className="Plan_card-body1">#Clinical</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="input_container">
              <h4>Access Premium Content for Free</h4>
              <div className="input_container_2">
                <p>Get started with our Medical PG 24-hour FREE trial.</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="pass mb-3">
                  <div className="input_container_code">
                    <select
                      id="Country"
                      name="Country"
                      className="country"
                      onChange={(event) => setCountry(event.target.value)}
                      value={country}
                    >
                      <option value="india code:+91">+91</option>
                      <option value="Afganistan code:+93">+93</option>
                      <option value="Angola code:+244">+244</option>
                      <option value="Argentina code:+54">+54</option>
                    </select>
                  </div>
                  <div className="pass1">
                    <input
                      type="text"
                      autoComplete="off"
                      maxLength={10}
                      id="phoneNumber"
                      name="phoneNumber"
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
                  className="mb-2 w-100 submit_but p-2"
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
      <div className="plan_launch">
        <div>
          <h1>Launching Dream Pack 4.0</h1>
        </div>
        <div className="guidance_launch_text">
          <p>
            An incredible effort to take your preparation to the NEXT level of
            excellence.
          </p>
        </div>
        <div className="plan_launch_1">
          <div className="plan_launch_2">
            <div className="inner_plan_launch_2">
              <div>
                <img
                  src="https://image.prepladder.com/content/ztRVRNdkdG5bQ7WIyJV51643873968.svg"
                  alt="https://image.prepladder.com/content/ztRVRNdkdG5bQ7WIyJV51643873968.svg"
                />
              </div>
              <div>
                <h4>
                  Updated Video Lectures based on the <br />
                  Latest Pattern
                </h4>
              </div>
            </div>
            <div className="inner_plan_launch_2">
              <div>
                <img
                  src="https://image.prepladder.com/content/OycfOV5PwMrGgUnHiwFp1643873998.svg"
                  alt="https://image.prepladder.com/content/OycfOV5PwMrGgUnHiwFp1643873998.svg"
                />
              </div>
              <div>
                <h4>
                  High-yield & Concise QBank for Effective <br />
                  Revision
                </h4>
              </div>
            </div>
          </div>
          <div className="plan_launch_2">
            <div className="inner_plan_launch_2">
              <div>
                <img
                  src="https://image.prepladder.com/content/XL4atyBWSBOBi2nBxEMf1657602686.svg"
                  alt="https://image.prepladder.com/content/XL4atyBWSBOBi2nBxEMf1657602686.svg"
                />
              </div>
              <div style={{ marginBottom: "2px" }}>
                <h4>
                  Custom module designed to allow you <br />
                  practice the way you want
                </h4>
              </div>
            </div>
            <div className="inner_plan_launch_2">
              <div>
                <img
                  src="https://image.prepladder.com/content/9xmmgjU7PwZUGUYO3gHL1643874034.svg"
                  alt="https://image.prepladder.com/content/9xmmgjU7PwZUGUYO3gHL1643874034.svg"
                />
              </div>
              <div>
                <h4>Detailed yet Comprehensive Notes</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="guidance_launch">
        <div>
          <h1>Launching Dream Pack 4.0</h1>
        </div>
        <div className="guidance_launch_text">
          <p>
            An incredible effort to take your preparation to the NEXT level of
            excellence.
          </p>
        </div>

        <div className="guidance_launch_2">
          <div className="inner_guidance_launch_2">
            <div className="Guidance_container_1_column">
              <div>
                <h1>Video Lectures by the Dream Team</h1>
              </div>
              <div className="Guidance_container_1_column_text">
                <p>
                  Learn from 4000+ hours of engaging and easy-to-follow video
                  lectures covering the entire NEET PG exam syllabus by India’s
                  top medical faculty.
                </p>
              </div>
            </div>

            <img
              src={TVvWmxUxAmgy1dx9unu1666776987}
              className="img-fluid inner_plan_launch_2_img"
              alt="TVvWmxUxAmgy1dx9unu1666776987"
            />
          </div>
          <div className="inner_guidance_launch_2_reverse">
            <div className="Guidance_container_1_column">
              <div>
                <h1>
                  <h1>High Yield QBank</h1>
                </h1>
              </div>
              <div className="Guidance_container_1_column_text">
                <p>
                  Online QBank featuring 20,000+ MCQs, organised topics &
                  subject-wise to strengthen your NEET PG preparation.
                </p>
              </div>
            </div>

            <img
              src={ianIlChXxueR77g75W2o1666777048}
              className="img-fluid inner_plan_launch_2_img"
              alt="ianIlChXxueR77g75W2o1666777048"
            />
          </div>
          <div className="inner_guidance_launch_2">
            <div className="Guidance_container_1_column">
              <div>
                <h1>Authentic Patterned PrepTests</h1>
              </div>
              <div className="Guidance_container_1_column_text">
                <p>
                  Evaluate your preparation and improve your speed and accuracy
                  by practising the most expected questions as per the latest
                  exam pattern.
                </p>
              </div>
            </div>

            <img
              src={B6NuClHySeQAc1oRnKiH1666777224}
              className="img-fluid inner_plan_launch_2_img"
              alt="B6NuClHySeQAc1oRnKiH1666777224"
            />
          </div>
          <div className="inner_guidance_launch_2_reverse">
            <div className="Guidance_container_1_column">
              <div>
                <h1>Comprehensive Notes for NEET PG Preparation</h1>
              </div>
              <div className="Guidance_container_1_column_text">
                <p>
                  Clinically oriented notes with high-quality images for all 19
                  subjects prepared by top medical faculty who have in-depth
                  knowledge of subject and exam.
                </p>
              </div>
            </div>

            <img
              src={sJBVQHUq2Rr2gem15ieB1666777289}
              className="img-fluid inner_plan_launch_2_img"
              alt="sJBVQHUq2Rr2gem15ieB1666777289"
            />
          </div>
          <div className="inner_guidance_launch_2">
            <div className="Guidance_container_1_column">
              <div>
                <h1>Access Treasures & Custom Module</h1>
              </div>
              <div className="Guidance_container_1_column_text">
                <p>
                  Fuel your NEET-PG preparation with access to Treasures, a
                  concise summary of a topic and Custom Module that helps you
                  practice what and how you want.
                </p>
              </div>
            </div>

            <img
              src={ukUfPVs3JRTA0tkShE181666777411}
              className="img-fluid inner_plan_launch_2_img"
              alt="ukUfPVs3JRTA0tkShE181666777411"
            />
          </div>
          <div className="inner_guidance_launch_2_reverse">
            <div className="Guidance_container_1_column">
              <div>
                <h1>Detailed Performance Analysis</h1>
              </div>
              <div className="Guidance_container_1_column_text">
                <p>
                  Our rank analysis shows your growth trajectory along with a
                  detailed report card that will help enhance your performance.
                </p>
              </div>
            </div>

            <img
              src={b2sXV9Ewevyw6mquQqtJ1666777458}
              className="img-fluid inner_plan_launch_2_img"
              alt="b2sXV9Ewevyw6mquQqtJ1666777458"
            />
          </div>
        </div>
      </div>

      <div className="container text-center p-4 Revision_container">
        <div className="row">
          <div className="Revision_col">
            <div className="Revision_container">
              <div>
                <h1>And there’s more</h1>
              </div>
              <div className="Revision_launch_text">
                Dream Pack 4.0 includes access to Rapid Revision 4.0 - The
                Legacy Continues...
              </div>
            </div>
          </div>
        </div>
        <div
          className="row"
          style={{ marginLeft: "30px", marginRight: "30px" }}
        >
          <div className="col-4">
            <img
              src="https://image.prepladder.com/content/rr-20221013-075126.png"
              alt="https://image.prepladder.com/content/rr-20221013-075126.png"
              style={{ width: "400px", height: "auto" }}
            />
          </div>
          <div className="col-8">
            <div className="RR_pos">
              <div className="RR_inner_pos" /* 1 container */>
                <div>
                  <img
                    src="https://image.prepladder.com/content/uKeC26e9p1J5nM3CPRZK1643883057.svg"
                    alt="https://image.prepladder.com/content/uKeC26e9p1J5nM3CPRZK1643883057.svg"
                  />
                </div>
                <div className="RR_col_pos">
                  <div>
                    <h2>RR QBank</h2>
                  </div>
                  <div>
                    <p>2450 questions</p>
                  </div>
                </div>
              </div>
              <div className="RR_inner_pos" /* 2 container */>
                <div>
                  <img
                    src="https://image.prepladder.com/content/HmgieRzuXZO0IHVgQPRX1643882912.svg"
                    alt="https://image.prepladder.com/content/HmgieRzuXZO0IHVgQPRX1643882912.svg"
                  />
                </div>
                <div className="RR_col_pos">
                  <div>
                    <h2>RR Notes</h2>
                  </div>
                  <div>
                    <p>Concise & Well Structured</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="RR_pos">
              <div className="RR_inner_pos" /* 1 container */>
                <div>
                  <img
                    src="https://image.prepladder.com/content/syt84P5RJGIYvsKsGMgp1643883030.svg"
                    alt="https://image.prepladder.com/content/syt84P5RJGIYvsKsGMgp1643883030.svg"
                  />
                </div>
                <div className="RR_col_pos">
                  <div>
                    <h2>RR QBank</h2>
                  </div>
                  <div>
                    <p>2450 questions</p>
                  </div>
                </div>
              </div>
              <div className="RR_inner_pos" /* 2 container */>
                <div>
                  <img
                    src="https://image.prepladder.com/content/69iOyxeyxBjgLLQ6rnS91643882880.svg"
                    alt="https://image.prepladder.com/content/69iOyxeyxBjgLLQ6rnS91643882880.svg"
                  />
                </div>
                <div className="RR_col_pos">
                  <div>
                    <h2>RR Notes</h2>
                  </div>
                  <div>
                    <p>Concise & Well Structured</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="effective_container ">
          <div className="effective_container_1">
            <h2>Proven Effective Content</h2>
            <div className="guidance_launch_text">
              <p>
                Concise, High Yield, Highly Effective Content That Yields
                Results. The Strike Rate Proves It.
              </p>
            </div>
          </div>

          <div className="effective_container_2">
            <div className="d-flex justify-content-center p-4">
              <div className="effective_container_2_inner_text">2020</div>
              <div className="effective_container_2_inner_text_2">
                <ul>
                  <div className="effective_container_2_inner_text_2_inner">
                    <div style={{ marginRight: "50px" }}>
                      <li
                        style={{
                          fontWeight: "500",
                          color: "white",
                          padding: "10px",
                          width: "784.12px",
                          background: " rgb(166, 115, 218)",
                          borderBottomRightRadius: "20px",
                          borderTopRightRadius: "20px",
                        }}
                      >
                        Neet PG August
                      </li>
                    </div>
                    <div>
                      <span>84%</span>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
            <div className="d-flex justify-content-center p-4">
              <div className="effective_container_2_inner_text">2021</div>
              <div className="effective_container_2_inner_text_2">
                <ul>
                  <div className="effective_container_2_inner_text_2_inner mb-3">
                    <div style={{ marginRight: "50px" }}>
                      <li
                        style={{
                          fontWeight: "500",
                          color: "white",
                          padding: "10px",
                          width: "789px",

                          background: " rgb(166, 115, 218)",
                          borderBottomRightRadius: "20px",
                          borderTopRightRadius: "20px",
                        }}
                      >
                        Neet PG August
                      </li>
                    </div>
                    <div>
                      <span>89%</span>
                    </div>
                  </div>
                  <div className="effective_container_2_inner_text_2_inner">
                    <div style={{ marginRight: "50px" }}>
                      <li
                        style={{
                          fontWeight: "500",
                          color: "white",
                          padding: "10px",
                          width: "785px",
                          background: "rgb(100, 206, 193)",
                          borderBottomRightRadius: "20px",
                          borderTopRightRadius: "20px",
                        }}
                      >
                        Neet PG August
                      </li>
                    </div>
                    <div>
                      <span>85%</span>
                    </div>
                  </div>
                </ul>
              </div>
            </div>

            <div className="d-flex justify-content-center p-4">
              <div className="effective_container_2_inner_text">2022</div>
              <div className="effective_container_2_inner_text_2">
                <ul>
                  <div className="effective_container_2_inner_text_2_inner">
                    <div style={{ marginRight: "50px" }}>
                      <li
                        style={{
                          fontWeight: "500",
                          color: "white",
                          padding: "10px",
                          width: "792px",
                          background: " rgb(166, 115, 218)",
                          borderBottomRightRadius: "20px",
                          borderTopRightRadius: "20px",
                        }}
                      >
                        Neet PG August
                      </li>
                    </div>
                    <div>
                      <span>92%</span>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: "35px" }}>
        <section className="base_container">
          <div className="base_container_container">
            <div className="plans_plan-achiever" style={{ padding: "50px" }}>
              <div style={{ textAlign: "center" }}>
                <h3>NEET PG 2022 Toppers of PrepLadder</h3>
                <p>
                  Our exceptional result with 92.5% strike rate proves once
                  again that PrepLadder is the best platform for Medical PG
                  preparation with the top & most experienced faculty
                </p>
              </div>
              <div>
                <div className="Revision-head_content">
                  <div className="Revision-head_content1">
                    <div>
                      <img
                        src="https://image.prepladder.com/content/JwMjtXPWnsABcL43lEPq1653284755.png"
                        alt="DR.Shagun Batra"
                      />
                      <div className="Revision-achiever-point__RHkAA ">
                        <div
                          className="Revision-achiever-rank__26v8Z"
                          style={{ textAlign: "center" }}
                        >
                          <div>Rank</div>
                          <div className="plans_plan-achiever-title__YbWas">
                            1
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3>DR.Shagun Batra</h3>
                  </div>

                  <div className="Revision-head_content1">
                    <div>
                      <img
                        src="https://image.prepladder.com/content/RS4yGIqa7tRTkwLHic0f1654174938.png"
                        className="plan-head_content_img"
                        alt="Dr. Swaroop Hegde"
                      />
                      <div className="Revision-achiever-point__RHkAA ">
                        <div
                          className="Revision-achiever-rank__26v8Z"
                          style={{ textAlign: "center" }}
                        >
                          <div>Rank</div>
                          <div className="plans_plan-achiever-title__YbWas">
                            4
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3>Dr. Swaroop Hegde</h3>
                  </div>

                  <div className="Revision-head_content1">
                    <div>
                      <img
                        src="https://image.prepladder.com/content/ly6OeYtQsXiujuWhtnmv1654175073.png"
                        className="plan-head_content_img"
                        alt="Dr. Nisharg Sachani"
                      />
                      <div className="Revision-achiever-point__RHkAA ">
                        <div
                          className="Revision-achiever-rank__26v8Z"
                          style={{ textAlign: "center" }}
                        >
                          <div>Rank</div>
                          <div className="plans_plan-achiever-title__YbWas">
                            7
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3>Dr. Nisharg Sachani</h3>
                  </div>
                  <div className="Revision-head_content1">
                    <div>
                      <img
                        src="https://image.prepladder.com/content/SPrT5RM2byhZqsK91DzF1653284689.png"
                        alt="Dr. Armaan Saith"
                      />
                      <div className="Revision-achiever-point__RHkAA ">
                        <div
                          className="Revision-achiever-rank__26v8Z"
                          style={{ textAlign: "center" }}
                        >
                          <div>Rank</div>
                          <div className="plans_plan-achiever-title__YbWas">
                            8
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3>Dr. Armaan Saith</h3>
                  </div>
                </div>
                <div className="Revision-head_content">
                  <div className="Revision-head_content1">
                    <div>
                      <img
                        src="https://image.prepladder.com/content/LxymOQmdjkefHTzvDjdk1653284710.png"
                        alt="Dr. Sushant Agarwal"
                      />
                      <div className="Revision-achiever-point__RHkAA ">
                        <div
                          className="Revision-achiever-rank__26v8Z"
                          style={{ textAlign: "center" }}
                        >
                          <div>Rank</div>
                          <div className="plans_plan-achiever-title__YbWas">
                            9
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3>Dr. Sushant Agarwal</h3>
                  </div>

                  <div className="Revision-head_content1">
                    <div>
                      <img
                        src="https://image.prepladder.com/content/LuiwOTPv3lkn6AdVvunM1654175202.jpg"
                        className="head_content_img"
                        alt="Dr. Yuvasai Kumar"
                      />
                      <div className="Revision-achiever-point__RHkAA ">
                        <div
                          className="Revision-achiever-rank__26v8Z"
                          style={{ textAlign: "center" }}
                        >
                          <div>Rank</div>
                          <div className="plans_plan-achiever-title__YbWas">
                            11
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3>Dr. Yuvasai Kumar</h3>
                  </div>

                  <div className="Revision-head_content1">
                    <div>
                      <img
                        src="https://image.prepladder.com/content/GFKajC3k7GUQ4dQjUXNd1654175365.jpg"
                        className="head_content_img"
                        alt="Dr. Jay Shah"
                      />
                      <div className="Revision-achiever-point__RHkAA ">
                        <div
                          className="Revision-achiever-rank__26v8Z"
                          style={{ textAlign: "center" }}
                        >
                          <div>Rank</div>
                          <div className="plans_plan-achiever-title__YbWas">
                            24
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3>Dr. Jay Shah</h3>
                  </div>
                  <div className="Revision-head_content1">
                    <div>
                      <img
                        src="https://image.prepladder.com/content/NDM2CoS4gUrRbauljEPv1654175420.jpg"
                        className="head_content_img"
                        alt="Dr. Neel Yadav"
                      />
                      <div className="Revision-achiever-point__RHkAA ">
                        <div
                          className="Revision-achiever-rank__26v8Z"
                          style={{ textAlign: "center" }}
                        >
                          <div>Rank</div>
                          <div className="plans_plan-achiever-title__YbWas">
                            40
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3>Dr. Neel Yadav</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <div className="row">
          <div className="col-3 ">
            <div
              id="list-example"
              className="list-group faq_faq__list__QIYHc  con_pos"
            >
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-1"
              >
                General
              </a>
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-2"
              >
                Booking
              </a>
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-3"
              >
                Packages & Subscriptions
              </a>
              <a
                className="list-group-item list-group-item-action"
                href="#list-item-5"
              >
                QBank
              </a>
            </div>
          </div>
          <div className="col-8  ">
            <Plans_main />
            <Booking_main />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
