import React from "react";

const SuggestCard = ({ suggest }) => {
  return (
    <div className="flex my-4 justify-between space-x-3">
      <div className="flex space-x-3 w-2/3">
        <img src={suggest.avatar} alt="" className="w-8 h-8 rounded-full" />
        <div className="flex flex-col w-full">
          <span className="font-semibold text-sm">{suggest.userName}</span>
          <span className="truncate text-gray-500 font-light text-xs">
            Followed by {suggest.followedBy.join(",")}
          </span>
        </div>
      </div>

      <button className="main-btn">Follow</button>
    </div>
  );
};

export default SuggestCard;
