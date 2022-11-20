import React, { useState } from "react";
import { useFormik, Formik, Form } from "formik";
import * as yup from "yup";
import {useDispatch} from 'react-redux'
import { SignInAction, SignUpAction } from "../Redux/action/auth.action";

function Login(props) {
  const [user, setUser] = useState("login");
  const dispatch =useDispatch()

  let Schemaobj, initialVal;
  if (user === "login") {
    Schemaobj = {
      Email: yup
        .string()
        .required("Please Enter Your Email")
        .email("Enter Valid Email"),
      Password: yup.string().required("Please Enter Password"),
    };
    initialVal = {
      Email: "",
      Password: "",
    };
  } else if (user === "signup") {
    Schemaobj = {
      Name: yup.string().required("Please Enter username"),
      Email: yup
        .string()
        .required("Please Enter Your Email")
        .email("Enter Valid Email"),
      Password: yup.string().required("Please Enter Password"),
    };
    initialVal = {
      Name: "",
      Email: "",
      Password: "",
    };
  } else if (user === "password") {
    Schemaobj = {
      Email: yup
        .string()
        .required("Please Enter Your Email")
        .email("Enter Valid Email"),
    };
    initialVal = {
      Email: "",
    };
  }

  let schema = yup.object().shape(Schemaobj);
  const formikobj = useFormik({
    initialValues: initialVal,
    validationSchema: schema,
    enableReinitialize: true,
    onSubmit: (values, action) => {
      // alert(JSON.stringify(values, null, 2));
      if (user === "signup") {
        dispatch(SignUpAction(values));
      }else if(user==="login"){
        dispatch(SignInAction(values));
      }
      action.resetForm();
    },
  });
  const { handleBlur, handleChange, handleSubmit, errors, values, touched } =formikobj;
  return (
    <div className="main-layout inner_posituong computer_page">
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {user === "login" ? (
                <div className="titlepage">
                  <h2>Login Now</h2>
                </div>
              ) : user === "signup" ? (
                <div className="titlepage">
                  <h2>Signup Now</h2>
                </div>
              ) : (
                <div className="titlepage">
                  <h2>Reset Password</h2>
                </div>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <Formik values={formikobj}>
                <Form
                  id="request"
                  className="main_form"
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    {user === "signup" ? (
                      <div className="col-md-12">
                        <input
                          className="contactus"
                          placeholder="Username"
                          type="text"
                          name="Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.Name}
                        />
                        {errors.Name && touched.Name ? (
                          <span className="error">{errors.Name}</span>
                        ) : null}
                      </div>
                    ) : null}
                    {user === "login" ||
                    user === "password" ||
                    user === "signup" ? (
                      <div className="col-md-12">
                        <input
                          className="contactus"
                          placeholder="Email"
                          type="type"
                          name="Email"
                          onChange={handleChange}
                          handleBlur={handleBlur}
                          value={values.Email}
                        />
                        {errors.Email && touched.Email ? (
                          <span className="error">{errors.Email}</span>
                        ) : null}
                      </div>
                    ) : null}
                    {user === "login" || user === "signup" ? (
                      <div className="col-md-12 ">
                        <input
                          className="contactus"
                          placeholder="Password"
                          type="password"
                          name="Password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.Password}
                        />
                        {errors.Password && touched.Password ? (
                          <span className="error">{errors.Password}</span>
                        ) : null}
                      </div>
                    ) : null}
                    {user === "login" ? (
                      <div className="d-flex">
                        <span>
                          <a
                            href="#"
                            className="text"
                            onClick={() => setUser("password")}
                          >
                            forgotPassword?
                          </a>
                        </span>
                      </div>
                    ) : user === "signup" ? (
                      <div>
                        <span>
                          <a
                            href="#"
                            className="text"
                            onClick={() => setUser("login")}
                          >
                            Already user?
                          </a>
                        </span>
                      </div>
                    ) : user === "password" ? (
                      <div>
                        <span>
                          <a
                            href="#"
                            className="text"
                            onClick={() => setUser("login")}
                          >
                            Back to login
                          </a>
                        </span>
                      </div>
                    ) : null}

                    {user === "login" ? (
                      <div className="col-md-12">
                        <button
                          className="send_btn mb-4"
                          type="submit"
                        >
                          LOGIN
                        </button>
                      </div>
                    ) : user === "signup" ? (
                      <div className="col-md-12">
                        <button className="send_btn" type="submit">
                          SIGNUP
                        </button>
                      </div>
                    ) : (
                      <div className="col-md-12">
                        <button className="send_btn" type="submit">
                          SEND
                        </button>
                      </div>
                    )}
                    {user === "login" ? (
                      <div className="col-md-12">
                        <span>
                          <a
                            href="#"
                            className="text text-center"
                            onClick={() => setUser("signup")}
                          >
                            Create new account?
                          </a>
                        </span>
                      </div>
                    ) : null}
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
