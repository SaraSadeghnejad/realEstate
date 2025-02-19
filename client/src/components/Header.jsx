import React from "react";
import {Link} from "react-router-dom";
const Header = () => {
  return (
    <div className="flex justify-between items-center p-3 bg-slate-400 mx-auto">
      <h1 className="font-bold text-lg">
        <span className="text-red-700 mx-3">Sara</span>
        <span className="text-blue-900">Real Estate</span>
      </h1>
      <form className="bg-white p-2 rounded-lg">
        <input type="text" placeholder="Search..." className="bg-transparent focus:hidden sm:w-64" />
      </form>
      <nav>
        <ul className="flex justify-between gap-4">
          <Link to="/ ">
            <li className="hover:underline font-bold hidden sm:inline">Home</li>
          </Link>
          <Link to="/about-us ">
            <li className="hover:underline font-bold hidden sm:inline">About</li>
          </Link>
          <Link to="/sign-in ">
            <li className="hover:underline font-bold hidden sm:inline">Sign in</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
