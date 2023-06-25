import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "../../schemas";
import {FaFacebookF} from 'react-icons/fa'

const initialValues = {
  name: "",
  email: "",
  password: "",
  confrimPassword: "",
  address1: " ",
  address2: "",
  phoneNo: "",
  telePhone: "",
  country: "",
  city: "",
  region: "",
  zipCode: "",
};

function RegistrationForm() {
  const showAlert=()=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, submit the details!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Suvmitted!',
          'Your form has been submitted.',
          'success'
        )
      }
    })
    }
  const bodyStyle = {
    backgroundColor: "#8EC5FC",
    backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
    height: "220vh",
  };


  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (value, action) => {
        console.log(value);
        action.resetForm();
      },
    });

  return (
    <>
      <section style={bodyStyle}>
        <div className="row vh-100 w-100 align-self-center">
          <div className="col-lg-12 col-xl-12">
            <div className="col align-self-center p-5 w-100">
              <h3 className="fw-bolder">Welcome to the Family!</h3>
              <p className="fw-lighter fs-6">
                Have an account already?
                <span id="signIn" role="button" className="text-primary p-2">
                  Sign In
                </span>
              </p>
              <p className="text-center fw-bold">
                Please fill out customer information form below to join the
                family.
              </p>
              {/* Form section */}
              <form className="mt-5" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label ">
                    Customer Name
                  </label>
                  <div className="d-flex mb-3">
                    <select className="form-select text-indent shadow-sm bg-grey-light border-0 rounded-pill fw-lighter fs-7 p-3 mx-2 w-25">
                      <option selected>Title</option>
                      <option value={1}>Miss</option>
                      <option value={2}>Mr</option>
                      <option value={3}>Mrs</option>
                    </select>
                    <input
                      type="text"
                      className="form-control text-indent shadow-sm bg-grey-light border-0 rounded-pill fw-lighter fs-7 p-3 mx-2"
                      id="username"
                      placeholder="Full Name"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && touched.name ? (
                      <p className="text-danger"style={errorStyling}>{errors.name}</p>
                      ) : null}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control text-indent shadow-sm bg-grey-light border-0 rounded-pill fw-lighter fs-7 p-3"
                      placeholder="name@example.com"
                      id="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  {errors.email && touched.email ? (
                      <p className="text-danger"style={errorStyling}>{errors.email}</p>
                      ) : null}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Password
                    </label>
                    <div className="d-flex position-relative">
                      <input
                        type="password"
                        className="form-control text-indent auth__password shadow-sm bg-grey-light border-0 rounded-pill fw-lighter fs-7 p-3"
                        placeholder="Strong Password"
                        id="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                     {errors.password && touched.password ? (
                        <p className="text-danger">{errors.password}</p>
                        ) : null}

                      <span className="password__icon text-primary fs-4 fw-bold fa-regular fa-eye-slash" />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Confrim Password
                    </label>
                    <div className="d-flex position-relative">
                      <input
                        type="password"
                        className="form-control text-indent auth__password shadow-sm bg-grey-light border-0 rounded-pill fw-lighter fs-7 p-3"
                        placeholder="Confrim your Password"
                        id="confrimPassword"
                        name="confrimPassword"
                        value={values.confrimPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.confrimPassword && touched.confrimPassword ? (
                        <p className="text-danger">{errors.confrimPassword}</p>
                        ) : null}

                      <span className="password__icon text-primary fs-4 fw-bold fa-regular fa-eye-slash" />
                    </div>
                  </div>
                  <label htmlFor="username" className="form-label ">
                    Customer address
                  </label>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control text-indent shadow-sm bg-grey-light border-0 rounded-pill fw-lighter fs-7 p-3 mb-3"
                      placeholder="Street Address"
                      id="address"
                      name="address1"
                      value={values.address1}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.address1 && touched.address1 ? (
                      <p className="text-danger">{errors.address1}</p>
                      ) : null}

                    <input
                      type="text"
                      className="form-control text-indent shadow-sm bg-grey-light border-0 rounded-pill fw-lighter fs-7 p-3"
                      placeholder="Street Address line 2"
                      name="address2"
                      value={values.address2}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.address2 && touched.address2 ? (
                      <p className="text-danger">{errors.address2}</p>
                    ) : null}
                  </div>
                  <label htmlFor="username" className="form-label ">
                    Contact Details
                  </label>
                  <div className="mb-3 d-flex">
                    <input
                      type="number"
                      className="form-control text-indent shadow-sm bg-grey-light border-0 rounded-pill  fs-7 p-3 mb-2 mx-2"
                      placeholder="Phone Number"
                      id="phoneNo"
                      name="phoneNo"
                      value={values.phoneNo}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.phoneNo && touched.phoneNo ? (
                      <p className="text-danger">{errors.phoneNo}</p>
                    ) : null}

                    <input
                      type="number"
                      className="form-control text-indent shadow-sm bg-grey-light border-0 rounded-pill  fs-7 p-3 mb-2 mx-2"
                      placeholder="Telephone number if any"
                      id="telePhone"
                      name="telePhone"
                      value={values.telePhone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.telePhone && touched.telePhone ? ( 
                      <p className="text-danger">{errors.telePhone}</p>
                    ) : null} 
                  </div>
                  <label htmlFor="username" className="form-label ">
                    Delivery Details
                  </label>
                  <div className="mb-3 d-flex">
                    <input
                      type="text"
                      className="form-control text-indent shadow-sm bg-grey-light border-0 rounded-pill  fs-7 p-3 mx-2"
                      placeholder="City"
                      id="city"
                      name="city"
                      value={values.city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.city && touched.city ? (
                      <p className="text-danger">{errors.city}</p>
                   ) : null}

                    <input
                      type="text"
                      className="form-control text-indent shadow-sm bg-grey-light border-0 rounded-pill  fs-7 p-3 mx-2"
                      placeholder="Region"
                      id="region"
                      name="region"
                      value={values.region}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.region && touched.region ? (
                      <p className="text-danger">{errors.region}</p>
                     ) : null} 
                  </div>
                  <div className="mb-3 d-flex">
                    <input
                      type="number"
                      className="form-control text-indent shadow-sm bg-grey-light border-0 rounded-pill  fs-7 p-3 mb-2 mx-2"
                      placeholder="Postal/Zip Code"
                      id="zipCode"
                      name="zipCode"
                      value={values.zipCode}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.zipCode && touched.zipCode ? (
                      <p className="text-danger">{errors.zipCode}</p>
                    ) : null}

                    <input
                      type="text"
                      className="form-control text-indent shadow-sm bg-grey-light border-0 rounded-pill  fs-7 p-3 mb-2 mx-2"
                      placeholder="Country"
                      id="country"
                      name="country"
                      value={values.country}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.country && touched.country ? (
                      <p className="text-danger">{errors.country}</p>
                     ) : null} 
                  </div>
                  <p className="text-center fw-bold ">
                    All customer information will be kept with descretion and
                    will not be used for other marketing or advertisment
                    purposes without customer approval
                  </p>
                  <input
                    className="form-check-input mt-0 btn btn-outline-dark border-2 fs-7"
                    type="checkbox"
                  />
                  I allow my information to be used for future campaigns
                </div>
                <div className="col text-center">
                  <button
                    type="submit"
                    className="btn btn-outline-dark btn-lg rounded-pill mt-4 w-50 " onClick={showAlert}
                  >
                    Send Information
                  </button>
                </div>
              </form>
              {/* SOCIAL PANEL HTML */}
              <p className="mt-5 text-center">
                Or Sign in with social platforms
              </p>
              <div className="row text-center">
                <div className="col mt-3">
                  <a
                    href
                    className="btn btn-outline-dark border-2 rounded-circle"
                  >
                   <FaFacebookF/>
                  </a>
                </div>
                <div className="col mt-3">
                  <a
                    href
                    className="btn btn-outline-dark border-2 rounded-circle"
                  >
                    <i className="fab fa-linkedin fs-5" />
                  </a>
                </div>
                <div className="col mt-3">
                  <a
                    href
                    className="btn btn-outline-dark border-2 rounded-circle"
                  >
                    <i className="fab fa-twitter fs-5" />
                  </a>
                </div>
                <div className="col my-3">
                  <a
                    href
                    className="btn btn-outline-dark border-2 rounded-circle"
                  >
                    <i className="fab fa-google fs-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default RegistrationForm;
