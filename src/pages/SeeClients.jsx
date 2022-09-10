import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Urls from "../constants/urls";
import Spinner from "../components/Spinner";

const SeeClients = () => {
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

  return loading ? (
    <Spinner />
  ) : Object.keys(client).length === 0 ? (
    <p className="text-4xl font-black bg-blue-500 text-white rounded-t-md p-5 text-center">
      No client information
    </p>
  ) : (
    <div className="bg-white rounded-md text-center">
      <>
        <p className="text-4xl font-black bg-blue-500 text-white rounded-t-md p-5 text-center">
          {client.name}
        </p>
        <div className="grid grid-cols-3 gap-5 p-5">
          <p className="text-xl text-left">
            <span className="font-black first-letter:uppercase">E-mail: </span>
            {client.email}
          </p>
          <p className="text-xl text-left">
            <span className="font-black first-letter:uppercase">Phone: </span>
            {client.phone}
          </p>
          <p className="text-xl text-left">
            <span className="font-black first-letter:uppercase">Company: </span>{" "}
            {client.company}
          </p>
          {client.notes && (
            <p className="text-xl col-span-3 text-left">
              <span className="font-black first-letter:uppercase">Notes: </span>{" "}
              {client.notes}
            </p>
          )}
        </div>
      </>
    </div>
  );
};

export default SeeClients;
