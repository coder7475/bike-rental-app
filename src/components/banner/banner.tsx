import { useState } from 'react';

const Banner = () => {
  const [searchDate, setSearchDate] = useState('');

  return (
    <div className="relative size-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bike-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative flex h-full flex-col items-center justify-center space-y-6 px-4 text-center text-white sm:space-y-8">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
          Explore the City on Two Wheels
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl">
          Rent a bike and start your adventure today!
        </p>

        <div className="w-full max-w-md">
          <div className="flex flex-col sm:flex-row">
            <input
              type="date"
              value={searchDate}
              onChange={(e) => setSearchDate(e.target.value)}
              className="w-full rounded-full border-2 border-white bg-transparent px-4 py-2 text-white placeholder:text-white sm:rounded-r-none"
              placeholder="Check availability"
            />
            <button className="mt-2 w-full rounded-full bg-card-foreground px-6 py-2 font-semibold transition duration-300 hover:bg-green-600 sm:mt-0 sm:w-auto sm:rounded-l-none">
              Search
            </button>
          </div>
        </div>
        <a
          href="#rent"
          className="rounded-full bg-primary px-6 py-2 text-lg font-semibold transition duration-300 hover:bg-blue-700 sm:px-8 sm:py-3"
        >
          Rent Now
        </a>
      </div>
    </div>
  );
};

export default Banner;
