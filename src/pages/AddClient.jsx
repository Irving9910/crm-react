import React from "react";
import ClientForm from "../components/ClientForm";

const AddClient = () => {
  return (
    <>
      <h1 className="font-black text-4xl text-blue-500 text-center">
        Add new client
      </h1>
      <p className="mt-3 text-center font-medium text-xl">
        Fill the form to register a new client
      </p>
      <ClientForm />
    </>
  );
};

export default AddClient;
