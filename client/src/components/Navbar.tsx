import React from "react";
import stack_overflow_icon from "../stack_overflow_icon.png";
import { MdMenu } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import LoginAndSignUp from "./LoginAndSignUpButton";

export default function Navbar() {
  return (
    <>
      <div className="fixed h-1 w-full bg-gradient-to-r from-amber-600 via-amber-700 to-yellow-700">
        &nbsp;
      </div>
      <div className="flex items-center justify-between bg-neutral-900 shadow-2xl">
        <div className="flex w-full items-center px-2">
          <MdMenu size={30} className="text-white sm:hidden" />

          <Link to="/" className="flex items-center">
            <img
              src={stack_overflow_icon}
              className="fill-white"
              alt="StackOverflow Icon"
              width={50}
            />
            <p className="text-md hidden text-white sm:block">clone&nbsp;</p>
            <b className="hidden text-white sm:block">overflow</b>
          </Link>

          <FaSearch
            size={20}
            className="relative left-6 hidden text-white sm:block"
          />
          <input
            type="text"
            className="hidden w-4/6 rounded-sm bg-stone-700 px-8 text-white sm:block"
            placeholder="Paste here :)"
          />
        </div>

        <LoginAndSignUp />
      </div>
    </>
  );
}
