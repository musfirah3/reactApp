import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import LoginFormImage from './../../images/login.avif'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { LoginRouteContext } from "../../context/loginContext/LoginContext";
import { useNavigate } from "react-router-dom";


function LoginProject() {
  const { dispatch } = useContext(LoginRouteContext)
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  // getting email or password in local storage
  const userName = localStorage.getItem("email")
    ? localStorage.getItem("email")
    : "musfirah@gmail.com";
  const userPassword = localStorage.getItem("password")
    ? localStorage.getItem("password")
    : "password";

  // Submit function
  const getUserInfo = (e) => {
    e.preventDefault();
    if (email === userName && password === userPassword) {
      toast.success("Login Success");
      dispatch({ type: "Login", payload: { email: userName, password: userPassword } })
      navigate("/products")
    } else {
      toast.error("Invalid Email OR password");
    }

  };



  return (
    <>
      <section className="bg-success bg-opacity-25">
        <div className="d-flex flex column min-vh-100 justify-content-center align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-10 mx-auto bg-white shadow rounded">
                <div className="row">
                  <div className="col-md-6">
                    {/* Welcome heading */}
                    <div className="m-5 text-center">
                      <h1>Welcome!</h1>
                    </div>
                    {/* Sing -in links */}
                    <p className="fw-bold m-3 ">
                      Sign in with
                      <div className="d-flex justify-content-around">
                        <span className="fa-3x m2" style={{ color: "#3b5998" }}><AiFillFacebook /></span>
                        <span className="fa-3x m2" style={{ color: "#00acee" }}><AiFillTwitterSquare /></span>
                        <span className="fa-3x m2" style={{ color: "#0072b1" }}><AiFillLinkedin /></span>
                      </div>

                    </p>
                    <div className="d-flex align-items-center">
                      <hr className="flex-grow-1" />
                      <div>OR</div>
                      <hr className="flex-grow-1" />
                    </div>
                    {/* Form Starts */}
                    {/* Here we apply some javaScript to store our data */}
                    <form className="m-5" onSubmit={getUserInfo}>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          value={email}
                          autoComplete="off"
                          onChange={(e) => setEmail(e.target.value)}
                        />

                        <div id="emailHelp" className="form-text">
                          We'll never share your email with anyone else.
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                        <input
                          className="form-control"
                          type="password"
                          id="password"
                          value={password}
                          onChange={(e) => setpassword(e.target.value)}
                        />

                      </div>
                      <div className="row">
                        <div className="col-6">
                          <div className="form-check text-start">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="exampleCheck1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="exampleCheck1"
                            >
                              Keep me logged in
                            </label>
                          </div>
                        </div>
                        <div className="col-6 text-end">
                          <a href="#">Forgot Password?</a>
                        </div>
                      </div>
                      <div>
                        <button className="btn btn-primary form-control mt-3">Submit</button>
                      </div>
                      <div className="mt-3 text-center">
                        <p className="fw-light">
                          Not a memeber?
                          <a href="#" className="p-2">
                            Sign Up
                          </a>
                        </p>
                      </div>
                    </form>
                  </div>
                  {/* Form End */}
                  {/* Side image*/}
                  <div className="col-md-6">
                    <div>
                      <img
                        src={LoginFormImage} //image here
                        alt="login image"
                        className="img-fluid py-5 my-5"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginProject;
