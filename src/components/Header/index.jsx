import React from 'react';

const Header = () => {
    return ( 
    <div className="fixed shadow-md w-full">
    <div className=" lg:container mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 py-4 items-center px-12">
        <img src="/assets/logo.png" className="w-28" alt=""/>
        <form className="hidden md:block justify-self-center ">
            <input type="text" className="w-52 bg-gray-100 border border-gray-300 rounded-sm text-center p-1 focus:outline-none" placeholder="Search"/>
        </form>

        <div className="flex space-x-4 justify-end">
            <a href="#">
                <img src="/assets/home.svg" alt="Home"/>
            </a>

            <a href="#">
                <img src="/assets/inbox.svg" alt="Inbox"/>
            </a>

            <a href="#">
                <img src="/assets/explore.svg" alt="Explore"/>
            </a>

            <a href="#">
                <img src="/assets/likes.svg" alt="Likes"/>
            </a>
        </div>
    </div></div> );
}
 
export default Header;