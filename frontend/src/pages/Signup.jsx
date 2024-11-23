import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className=" border shadow p-6 w-80 bg-white ">
        <h2 className="text-2xl text-center font-bold mb-4">Signup</h2>
        <form action="submit">
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-3 py-2 border"
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border"
              type="email"
              placeholder="Email Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border"
              type="password"
              placeholder="****"
              required
            />
          </div>
          <div className="mb-4">
            <button
              className="w-full bg-teal-600 text-white py-2 "
              type="submit"
            >
              Signup
            </button>
            <p className="text-center my-2">
              Already have account? <a href="login">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
