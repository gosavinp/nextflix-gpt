import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSingInForm, setIsSingInForm] = useState(true);

  const toogleSignInForm = () => {
    setIsSingInForm(!isSingInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black mt-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSingInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSingInForm && (
          <input
            type="text"
            placeholder="Enter your name"
            className="p-4 my-2 w-full bg-gray-700"
          />
        )}
        <input
          type="email"
          placeholder="Enter your email address"
          className="p-4 my-2 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="Enter your email password"
          className="p-4 my-2 w-full bg-gray-700"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSingInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toogleSignInForm}>
          {isSingInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
