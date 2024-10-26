import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const City = ({ city, setCity, search, setSearch }) => {
  console.log(city);
  return (
    <div className="w-[400px] rounded-lg bg-gradient-to-r from-purple-500/20 to-purple-300/10 backdrop-blur-lg border border-purple-400/30 rounded-xl shadow-2xl p-4">
      <div className="relative">
      <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
        <MagnifyingGlassIcon className="h-7 w-7" />
      </span>
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Please write a city"
        className="my-5 px-12 mx-auto w-full py-3 placeholder-gray-300 text-gray-100 bg-white/15 backdrop-blur-lg border border-gray-500 rounded-lg shadow-lg outline-none focus:outline-none focus:ring focus:ring-purple-500 transition"
        value={search}
      />
      </div>
      {city && (
        <div className="text-gray-100">
          <h1 className="text-5xl font-bold">{Math.floor(city.main.temp)} °C</h1>
          <br />
          <h1 className="text-3xl font-semibold">City: {city.name}</h1>
          <h1 className="text-2xl">The Weather: {city.weather[0].main}</h1>
        </div>
      )}
      {/* bg-gradient-to-r from-purple-500/20 to-purple-300/10 backdrop-blur-lg border border-purple-400/30 rounded-xl shadow-2xl p-8 */}
    </div>
  );
};

export default City;
