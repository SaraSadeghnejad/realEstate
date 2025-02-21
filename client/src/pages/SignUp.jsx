import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate()
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data)
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in')
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };
  return (
    <div className="p-3 mx-auto max-w-lg">
      <h1 className="text-center text-3xl font-bold my-7">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 mx-auto ">
        <input
          type="text"
          className="border rounded-lg p-3"
          placeholder="Username"
          id="username"
          onChange={handleChange}
        />
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
          {loading ? "Loading ..." : "SIGN UP"}
        </button>
      </form>
      <div className="mt-3 flex gap-2">
        <p>Have an Account?</p>
        <Link to="/sign-in" className="text-blue-600">
          Sign in
        </Link>
      </div>
      {error && <p className="text-red-500 text-lg mt-2">{error}</p>}
    </div>
  );
};

export default SignUp;
