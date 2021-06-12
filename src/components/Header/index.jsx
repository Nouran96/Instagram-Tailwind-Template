import React from "react";
import HomeIcon from "../../assets/home.svg";
import InboxIcon from "../../assets/inbox.svg";
import ExploreIcon from "../../assets/explore.svg";
import LikesIcon from "../../assets/likes.svg";
import Avatar from "../../assets/avatar.jpg";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="fixed shadow-md w-full bg-white z-10">
      <div className=" lg:container mx-auto grid grid-cols-3 gap-4 py-4 items-center lg:px-12 px-3">
        <img src={Logo} className="w-28" alt="" />
        <form className="hidden md:block justify-self-center">
          <input
            type="text"
            className="w-52 bg-gray-50 border border-gray-300 rounded-sm text-center p-1 focus:outline-none"
            placeholder="Search"
          />
        </form>

        <div className="flex space-x-4 justify-end items-center col-span-2 md:col-span-1">
          <a href="#">
            <img src={HomeIcon} alt="Home" />
          </a>

          <a href="#">
            <img src={InboxIcon} alt="Inbox" />
          </a>

          <a href="#">
            <img src={ExploreIcon} alt="Explore" />
          </a>

          <a href="#">
            <img src={LikesIcon} alt="Likes" />
          </a>

          <a href="#">
            <img
              src={Avatar}
              alt="Logged in user image"
              className="w-8 h-8 rounded-full"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
