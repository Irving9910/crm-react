import { useEffect, useState } from "react";
import Client from "../components/Client";
import Urls from "../constants/urls";

const Home = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const getClientsList = async () => {
      try {
        const { clientsPath } = Urls;
        const response = await fetch(clientsPath);
        const result = await response.json();
        setClients(result);
      } catch (error) {
        console.log(error);
      }
    };

    getClientsList();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this client?"
    );
    if (confirmDelete) {
      try {
        const { clientsPath } = Urls;
        const response = await fetch(`${clientsPath}/${id}`, {
          method: "DELETE",
        });
        await response.json();
        const clientsArray = clients.filter((client) => client.id !== id);
        setClients(clientsArray);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <h1 className="font-black text-4xl text-blue-500 text-center">Clients</h1>
      <p className="mt-3 text-center font-medium text-xl">
        Manage your clients
      </p>
      <table className="w-full mt-5 table-auto shadow-md bg-white">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Contact</th>
            <th className="p-2">Company</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <Client
              key={client.id}
              client={client}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
