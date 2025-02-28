import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import signupImage from "../assets/banner6.png";
import GoogleIcon from "@mui/icons-material/Google";
import { useUser } from "../contexts/UserContext";

const SignUp = () => {
  const { login } = useUser(); // Get login function from context
  const navigate = useNavigate();

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
    login(values);
    console.log("User Data:", values);
    setSubmitting(false);
    navigate("/"); 
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-[1200px] w-full flex flex-col lg:flex-row items-center">
        <div className="hidden lg:flex w-[50%] justify-center">
          <img src={signupImage} alt="Sign Up" className="max-w-[600px] h-auto" />
        </div>

        <div className="w-full lg:w-[50%] flex justify-center">
          <div className="w-full max-w-md p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-left mb-4">Create an account</h2>
            <p className="text-gray-600 text-left mb-6">Enter your details below</p>

            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
              {({ isSubmitting }) => (
                <Form className="space-y-4">
                  <div>
                    <Field type="text" name="name" placeholder="Name" className="w-full p-3 border-b border-gray-400 focus:outline-none focus:border-black" />
                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div>
                    <Field type="email" name="email" placeholder="Email or Phone Number" className="w-full p-3 border-b border-gray-400 focus:outline-none focus:border-black" />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                  </div>

                  <div>
                    <Field type="password" name="password" placeholder="Password" className="w-full p-3 border-b border-gray-400 focus:outline-none focus:border-black" />
                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                  </div>

                  <button type="submit" disabled={isSubmitting} className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition">
                    {isSubmitting ? "Creating Account..." : "Create Account"}
                  </button>
                </Form>
              )}
            </Formik>

            <div className="text-center mt-4">
              <button className="w-full flex items-center justify-center border py-3 rounded-lg hover:bg-gray-100 transition">
                <GoogleIcon className="w-5 h-5 mr-2 text-blue-500" />
                Sign up with Google
              </button>
            </div>

            <p className="text-center text-gray-600 mt-4">
              Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Log in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
