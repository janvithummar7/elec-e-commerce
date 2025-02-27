import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Submitted", values);
    resetForm();
  };

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-22"> 
      <p className="text-gray-500 mb-6">Home / <span className="text-black font-semibold">Contact</span></p>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-1/3 bg-white p-8 rounded-lg shadow-lg min-h-[300px]"> 
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-3">
              <FaPhoneAlt className="text-red-500 text-xl" />
              <h3 className="text-lg font-semibold">Call To Us</h3>
            </div>
            <p className="text-gray-600">We are available 24/7, 7 days a week.</p>
            <p className="font-semibold mt-2">Phone: +880161112222</p>
          </div>
          <hr className="my-6 border-gray-300" />
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <FaEnvelope className="text-red-500 text-xl" />
              <h3 className="text-lg font-semibold">Write To Us</h3>
            </div>
            <p className="text-gray-600">Fill out our form and we will contact you within 24 hours.</p>
            <p className="font-semibold mt-2">Emails: customer@exclusive.com</p>
            <p className="font-semibold">Emails: support@exclusive.com</p>
          </div>
        </div>
        <div className="w-full lg:w-2/3 bg-white p-8 rounded-lg shadow-lg min-h-[300px]"> 
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
                <div>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    className="w-full p-3 border border-gray-300 rounded-md bg-gray-100"
                  />
                  <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    className="w-full p-3 border border-gray-300 rounded-md bg-gray-100"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div>
                  <Field
                    type="text"
                    name="phone"
                    placeholder="Your Phone *"
                    className="w-full p-3 border border-gray-300 rounded-md bg-gray-100"
                  />
                  <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
                </div>
              </div>
              <div>
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-3 border border-gray-300 rounded-md bg-gray-100"
                />
                <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition"
              >
                Send Message
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Contact;
