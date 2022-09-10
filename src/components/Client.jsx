import { useNavigate } from "react-router-dom";

const Client = ({ client, handleDelete }) => {
  const navigate = useNavigate();

  const { name, email, phone, company, id } = client;

  return (
    <tr className="border-b hover:bg-gray-50 transition-colors">
      <td className="p-3">{name}</td>
      <td className="p-3">
        <p>
          <span className="text-gray uppercase font-bold">E-mail: </span>
          {email}
        </p>
        <p>
          <span className="text-gray uppercase font-bold">Phone: </span>
          {phone}
        </p>
      </td>
      <td className="p-3">{company}</td>
      <td className="p-3">
        <button
          className="bg-blue-500 block uppercase w-full p-2 font-bold text-xs hover:bg-blue-600 transition-all text-white rounded-sm"
          type="button"
          onClick={() => navigate(`/clients/${id}`)}
        >
          See
        </button>
        <button
          className="bg-cyan-500 block uppercase w-full p-2 font-bold text-xs hover:bg-cyan-600 transition-all text-white rounded-sm mt-3"
          type="button"
          onClick={() => navigate(`/clients/edit/${id}`)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 block uppercase w-full p-2 font-bold text-xs hover:bg-red-600 transition-all text-white rounded-sm mt-3"
          type="button"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Client;
