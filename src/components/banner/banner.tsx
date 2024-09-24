import { useState } from 'react';

const Banner = () => {
  const [searchDate, setSearchDate] = useState('');

  return (
    <div className="relative size-full">
      {/* Backgrond Image  */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bike-banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      {/* Main Text  */}
      <div className="relative flex h-full flex-col items-center justify-center space-y-6 px-4 text-center text-white sm:space-y-8">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
          Explore Above and Beyond
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl">
          Rent a bike and start your adventure today!
        </p>

        <div className="w-full max-w-md">
          <div className="flex flex-col sm:flex-row">
            <div className="flex w-full">
              <input
                type="date"
                value={searchDate}
                onChange={(e) => setSearchDate(e.target.value)}
                className="w-full rounded-l-full border-2 border-white bg-transparent px-4 py-2 text-white placeholder:text-white"
                placeholder="Check availability"
              />
              <button className="w-auto rounded-r-full bg-card-foreground px-4 py-3 font-semibold transition duration-300 hover:bg-primary">
                Search
              </button>
            </div>
          </div>
        </div>
        <a
          href="#rent"
          className="rounded-full bg-primary px-6 py-2 text-lg font-semibold transition duration-300 hover:bg-primary sm:px-8 sm:py-3"
        >
          Rent Now
        </a>
      </div>
    </div>
  );
};

export default Banner;
