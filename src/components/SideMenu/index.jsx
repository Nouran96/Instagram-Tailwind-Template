import React from "react";
import SuggestCard from "../SuggestCard";

const suggestions = [
  {
    userName: "tomcruz",
    followedBy: ["chris.pratt", "chris.hemsworth", "chris.evans"],
    avatar: process.env.PUBLIC_URL + "/assets/avatar2.png",
  },
  {
    userName: "chris.pratt",
    followedBy: ["chris.hemsworth", "tomcruz"],
    avatar: process.env.PUBLIC_URL + "/assets/avatar2.png",
  },
  {
    userName: "chris.evans",
    followedBy: ["chris.pratt", "chris.hemsworth"],
    avatar: process.env.PUBLIC_URL + "/assets/avatar2.png",
  },
];

const SideMenu = () => {
  return (
    <div className="flex flex-col">
      {/* Logged in user */}
      <div className="flex justify-between mb-6">
        <div className="flex space-x-4 items-center">
          <div className="flex-shrink-0">
            <img
              src={process.env.PUBLIC_URL + "/assets/avatar.jpg"}
              alt="Logged in user image"
              className="w-16 h-16 rounded-full"
            />
          </div>

          <div className="flex flex-col">
            <span className="font-semibold">jake.ryan</span>
            <span className="text-gray-500 font-light">Jake Ryan</span>
          </div>
        </div>

        <button type="button" className="main-btn">
          Switch
        </button>
      </div>

      {/* Suggestions Header */}
      <div className="flex justify-between">
        <span className="capitalize text-gray-500 opacity-80 font-semibold text-sm">
          Suggestions for you
        </span>

        <span
          className="text-black font-medium tracking-wider text-sm"
          role="button"
        >
          See All
        </span>
      </div>

      {/* Suggestions */}
      {suggestions.map((suggest, index) => (
        <SuggestCard key={index} suggest={suggest} />
      ))}
    </div>
  );
};

export default SideMenu;
