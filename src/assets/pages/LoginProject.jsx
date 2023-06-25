import React, { useState} from "react";
import Swal from "sweetalert2";
import LoginFormImage from './../../images/login.avif'
import { AiFillFacebook } from 'react-icons/ai'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import { useNavigate } from "react-router-dom";


function LoginProject() {
  const showAlert = () => {
    Swal.fire({
      icon: 'success',
      title: 'Submit..',
      text: 'Your form has been submitted!'
    })
  }
  const navigate = useNavigate();
const [email,setEmail]=useState();
const[password,setpassword]=useState()
const [authenticated, setauthenticated] = useState(
  localStorage.getItem(localStorage.getItem("authenticated") || false)
);
const users = [{ email: "musfirah@gamil.com", password: "testpassword" }];
const handleSubmit = (e) => {
  e.preventDefault();
  const account = users.find((user) => user.email=== email);
  if (account && account.password === password) {
    localStorage.setItem("authenticated", true);
    navigate("/");
  }
};

  // const getUserInfo = (e) => {
  //   e.preventDefault();
  //   const payload = { email, password };
  //   console.log(payload);
  // };
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
                      <span className="fa-lg m2" style={{color: "#3b5998" }}><AiFillFacebook /></span>
                      <span className="fa-lg m2" style={{color: "#00acee" }}><AiFillTwitterSquare/></span>
                      <span className="fa-lg m2" style={{color: "#0072b1" }}><AiFillLinkedin /></span>
                      </div>
                      
                    </p>
                    <div className="d-flex align-items-center">
                      <hr className="flex-grow-1" />
                      <div>OR</div>
                      <hr className="flex-grow-1" />
                    </div>
                    {/* Form Starts */}
                    {/* Here we apply some javaScript to store our data */}
                    <form className="m-5" onSubmit={handleSubmit}>
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
                          onChange={(e) => setEmail(e.target.value)}
                          autoComplete="off"
                          required
                          placeholder=" Your email address please"
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
                          value={password}
                          onChange={(e) => setpassword(e.target.value)}
                          id="password"
                          placeholder="Password"
                          required
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
                        <button className="btn btn-primary form-control mt-3" onClick={showAlert}>Submit</button>
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
