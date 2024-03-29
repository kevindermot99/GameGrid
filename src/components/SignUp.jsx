import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import ButtonLoader from "./ButtonLoader";

function SignUp({ hideSignUp, showSignIn }) {
  
  const [submitting, setSubmitting] = useState(false);

  const handleEscapeKey = (event) => {
    if (event.key === "Escape") {
      hideSignUp();
    }
  };

  const switchForms = () => {
    showSignIn()
    hideSignUp()
  }

  useEffect(() => {
    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  // submit
  const signUp = () => {
    setSubmitting(true);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-black bg-opacity-45 h-full overscroll-contain">
      <div className="w-[90%] max-h-[90%] max-w-[370px] h-fit bg-white absolute top-0 left-0 right-0 bottom-0 m-auto rounded-xl shadow-lg flex flex-col justify-start items-center">
        <button
          onClick={hideSignUp}
          className="self-end translate-y-2 mr-2 p-1 rounded-md cursor-pointer hover:bg-stone-200 "
        >
          <IoCloseOutline className="text-2xl" />
        </button>
        <h1 className=" font-black tracking-tighter text-[35px] mb-2 select-none text-black ">
          Sign Up
        </h1>
        <p className="font-medium text-base text-stone-400 mb-6 select-none">
          Sign up with your email here.
        </p>
        <form onSubmit={signUp} className="flex flex-col justify-start items-start w-full">
          <input
            type="email"
            required
            name="email"
            // autoComplete="on"
            className="tracking-tight text-base  text-black py-[13px] mb-2 rounded-lg w-[85%] m-auto px-3 outline-none transition bg-stone-50 bg-opacity-60 border border-stone-200 border-opacity-70   "
            placeholder="Email"
          />
          <input
            type="password"
            required
            name="password"
            className=" tracking-tighte4 text-base  text-black py-[13px] mb-2 rounded-lg w-[85%] m-auto px-3 outline-none transition bg-stone-50 bg-opacity-60 border border-stone-200 border-opacity-70  "
            placeholder="Password"
          />
          <input
            type="password"
            required
            name="password"
            className=" tracking-tighte4 text-base text-black py-[13px] mb-5 rounded-lg w-[85%] m-auto px-3 outline-none transition bg-stone-50 bg-opacity-60 border border-stone-200 border-opacity-70  "
            placeholder="Confirm Password"
          />
          <button
            type="submit"
            className="h-[45px] w-[85%] m-auto bg-main-color rounded-lg text-white text-base transition mb-5 hover:opacity-90 flex justify-center items-center "
          >
            {!submitting && "Sign Up"}
            {submitting && <ButtonLoader />}
          </button>
        </form>
        <div className=" border-t border-stone-200 border-opacity-60 w-full p-3 flex items-center justify-center py-6">
          <h1 className=" text-sm text-black ">
            Already have an account?{" "}
            <span onClick={switchForms} className=" cursor-pointer text-main-color font-medium">Sign in</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
