import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="max-w-lg p-3 mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col">
        <img
          src={currentUser.avatar}
          className="w-24 h-24 rounded-full object-cover"
        />
        <input
          type="text"
          placeholder="username"
          value={currentUser.name}
          className="border p-3 rounded-lg mt-2"
        />
        <input
          type="email"
          className="border p-3 rounded-lg mt-2"
          placeholder="email"
          value={currentUser.email}
        />
        <input
          type="password"
          className="border p-3 rounded-lg mt-2"
          placeholder="password"
          value={currentUser.password}
        />
        <button className="bg-slate-500 disabled:opacity-80 text-white uppercase  p-3 rounded-lg hover:opacity-95">
          update
        </button>
      </form>
      <div className="flex justify-between mt-3">
        <span className="text-red-600 cursor-pointer">Delete Account</span>
        <span className="text-red-600 cursor-pointer">Sign out</span>
      </div>
    </div>
  );
};

export default Profile;
