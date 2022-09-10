import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Alert from "./Alert";

const ClientForm = () => {
  const newClientSchema = Yup.object().shape({
    name: Yup.string().min(3).max(50).required(),
    company: Yup.string().required(),
    email: Yup.string().email().required(),
    phone: Yup.number().positive('Number is not valid').integer('Number is not valid').typeError('Number is not valid')
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="bg-white shadow-lg mt-10 px-5 py-10 rounded-lg md:w-3/4 mx-auto">
      <h1 className="text-gray-600 font-bold text-2xl uppercase text-center">
        Client information
      </h1>
      <Formik
        initialValues={{
          name: "",
          company: "",
          email: "",
          phone: "",
          notes: "",
        }}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        validationSchema={newClientSchema}
      >
        {({ errors, touched }) => {
          // console.log(data);
          return (
            <Form className="mt-10">
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="name">
                  Name:
                </label>
                <Field
                  id="name"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Client name"
                  name="name"
                />
                {errors.name && touched.name ? (
                  <Alert>{errors.name}</Alert>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="company">
                  Company:
                </label>
                <Field
                  id="company"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Client's company"
                  name="company"
                />
                 {errors.company && touched.company ? (
                  <Alert>{errors.company}</Alert>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="email">
                  E-mail:
                </label>
                <Field
                  id="email"
                  type="email"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Client's e-mail"
                  name="email"
                />
                 {errors.email && touched.email ? (
                  <Alert>{errors.email}</Alert>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="phone">
                  Phone number:
                </label>
                <Field
                  id="phone"
                  type="tel"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Client's phone"
                  name="phone"
                />
                 {errors.phone && touched.phone ? (
                  <Alert>{errors.phone}</Alert>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="notes">
                  Notes:
                </label>
                <Field
                  as="textarea"
                  id="notes"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Client notes"
                  name="notes"
                />
                 {errors.notes && touched.notes ? (
                  <Alert>{errors.notes}</Alert>
                ) : null}
              </div>

              <input
                type="submit"
                value="Save"
                className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg"
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ClientForm;
