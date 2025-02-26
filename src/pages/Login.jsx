import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import signupImage from "../assets/banner6.png";

const Login = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email or Phone is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("User Data:", values);
    setSubmitting(false);
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className="max-w-[1200px] w-full flex flex-col lg:flex-row items-center">
    {/* Left Side - Image */}
    <div className="hidden lg:flex w-[50%] justify-center">
      <img src={signupImage} alt="Sign Up" className="max-w-[600px] h-auto" />
    </div>

    {/* Right Side - Centered Form */}
    <div className="w-full lg:w-[50%] flex justify-center">
      <div className="w-full max-w-md  p-8 rounded-lg ">
        <h2 className="text-2xl font-bold text-left mb-4">Log in to Exclusive</h2>
        <p className="text-gray-600 text-left mb-6">Enter your details below</p>

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              <div>
                <Field type="email" name="email" placeholder="Email or Phone Number" className="w-full p-3 border-b border-gray-400 focus:outline-none focus:border-black" />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>

              <div>
                <Field type="password" name="password" placeholder="Password" className="w-full p-3 border-b border-gray-400 focus:outline-none focus:border-black" />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-1/3 bg-red-500 text-white py-3 rounded-sm hover:bg-red-600 transition"
                >
                  {isSubmitting ? "Logging in..." : "Log in"}
                </button>

                <Link to="/forgot-password" className="text-red-500 text-sm hover:underline">
                  Forgot password?
                </Link>
              </div>

            </Form>
          )}
        </Formik>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Login;
