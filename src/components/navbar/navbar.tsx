import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-gray-900 text-gray-400 ">
      <div className="container mx-auto flex flex-col flex-wrap items-center justify-between p-5 md:flex-row">
        <Link
          to="/"
          className="mb-4 flex items-center font-medium text-white md:mb-0"
        >
          <img
            src="/bike.png"
            alt="cyclone"
            className="size-10 rounded-xl bg-card"
          />
          <span className="ml-3 text-xl">Cyclone</span>
        </Link>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-4	md:mr-auto md:border-l md:border-gray-700 md:py-1 md:pl-4">
          <Link to="/" className="mr-5 hover:text-white">
            Home
          </Link>
          <Link to="/about" className="mr-5 hover:text-white">
            About Us
          </Link>
          <Link to="/" className="mr-5 hover:text-white">
            Services
          </Link>
          <Link to="/" className="mr-5 hover:text-white">
            Featured
          </Link>
        </nav>
        <a
          href="/login"
          className="mt-4 inline-flex items-center rounded border-0 bg-gray-800 px-3 py-1 text-base hover:bg-gray-700 focus:outline-none md:mt-0"
        >
          Log In
        </a>
      </div>
    </header>
  );
};

export default Navbar;
