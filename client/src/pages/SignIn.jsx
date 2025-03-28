import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import {
  signInFailure,
  signInStart,
  signInSuccess,
} from "../redux/user/userSlice";
import OAuth from "../components/OAuth";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const {loading,error}= useSelector((state)=>state.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/home");
    } catch (err) {
      dispatch(signInFailure(err.message));
    }
  };
  return (
    <div className="p-3 mx-auto max-w-lg">
      <h1 className="text-center text-3xl font-bold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 mx-auto ">
        <input
          type="email"
          className="border rounded-lg p-3"
          placeholder="Email"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          className="border rounded-lg p-3"
          placeholder="Password"
          id="password"
          onChange={handleChange}
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-slate-600 rounded-lg p-3 text-center text-white hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading ..." : "SIGN IN"}
        </button>
        <OAuth/>
      </form>
      <div className="mt-3 flex gap-2">
        <p>You dont Have an Account?</p>
        <Link to="/sign-up" className="text-blue-600">
          Sign in
        </Link>
      </div>
      {error && <p className="text-red-500 text-lg mt-2">{error}</p>}
    </div>
  );
};

export default SignIn;
