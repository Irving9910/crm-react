import React from "react";
import ClientForm from "../components/ClientForm";
import { useEffect, useState } from "react";
import Urls from "../constants/urls";
import Spinner from "../components/Spinner";
import { useParams } from "react-router-dom";
import Alert from "../components/Alert";

const EditClient = () => {
  const { id } = useParams();
  const [client, setClient] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(!loading);
    const getClient = async () => {
      try {
        const { clientsPath } = Urls;
        const response = await fetch(`${clientsPath}/${id}`);
        const result = await response.json();
        setClient(result);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    getClient();
  }, []);
  return client?.name ? (
    <>
      <h1 className="font-black text-4xl text-blue-500 text-center">
        Edit client
      </h1>
      <p className="mt-3 text-center font-medium text-xl">
        Edit client information on the form
      </p>
      <ClientForm client={client} loading={loading} />
    </>
  ) : (
    <Alert>Client ID not valid</Alert>
  );
};

export default EditClient;
