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
            First Link
          </Link>
          <Link to="/" className="mr-5 hover:text-white">
            Second Link
          </Link>
          <Link to="/" className="mr-5 hover:text-white">
            Third Link
          </Link>
          <Link to="/" className="mr-5 hover:text-white">
            Fourth Link
          </Link>
        </nav>
        <button className="mt-4 inline-flex items-center rounded border-0 bg-gray-800 px-3 py-1 text-base hover:bg-gray-700 focus:outline-none md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="ml-1 size-4"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
