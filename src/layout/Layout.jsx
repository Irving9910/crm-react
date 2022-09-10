import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {

  const location = useLocation();

  const {pathname} = location;

  return (
    <div className="md:flex md:min-h-screen">
      <div className="md:w-1/4 bg-gradient-to-b from-blue-500 to-cyan-500 px-5 py-10">
        <h2 className="text-4xl text-white font-black text-center">
          Client CRM
        </h2>
        <nav className="mt-10">
          <Link
            className={`${pathname === '/clients' && 'font-bold'} text-white text-2xl block mt-2 hover:pl-2 transition-all`}
            to="/clients"
          >
            Clients
          </Link>
          <Link
            className={`${pathname === '/clients/add' && 'font-bold'} text-white text-2xl block mt-2 hover:pl-2 transition-all`}
            to="/clients/add"
          >
            Add client
          </Link>
        </nav>
      </div>
      <div className="md:w-3/4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
