import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SolvedCountContext } from "../context/SolvedCountContext";
import { isAuthenticated, signout } from "../helper/auth";

var isActive = false;

const currentTab = (path) => {
  if (window.location.pathname === path) {
    isActive = true;
  } else {
    isActive = false;
  }
};

const Navbar = () => {
  const history = useNavigate();
  const { all, solved} = useContext(SolvedCountContext);

  return (
    <>
      <div className="flex  sticky top-0 bg-white items-center justify-between p-3 border-b-[1px] ">
        <Link style={currentTab("/")} to="/">
          <div className="">
            <p
              className={`${
                isActive
                  ? "font-bold text-xl hover:rotate-6 text-violet-500 hover:text-violet-400 cursor-pointer transition-transform duration-300 ease-out"
                  : "font-bold text-xl hover:rotate-6 text-gray-300 hover:text-violet-400 cursor-pointer transition-transform duration-300 ease-out"
              }`}
            >
              CleanCode
            </p>
          </div>
        </Link>
        <div className="flex gap-8 ">
          <Link style={currentTab("/")} to="/">
            <div className="flex items-center gap-2 rounded-md hover:bg-gray-100 cursor-pointer p-2 ">
              <svg
                class="w-7 h-7 text-violet-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                ></path>
              </svg>
              <p
                className={`${
                  isActive
                    ? "font-bold text-violet-800 text-xl"
                    : "font-bold text-gray-500"
                }`}
              >
                All Problems
              </p>
            </div>
          </Link>
          {isAuthenticated() && isAuthenticated().user.role === 0 && (
            <Link style={currentTab("/user/solved")} to="/user/solved">
              <div className="flex items-center gap-2 rounded-md hover:bg-gray-100 cursor-pointer p-2">
                <svg
                  class="w-7 h-7 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <p
                  className={`${
                    isActive
                      ? "font-bold text-green-500 text-xl"
                      : "font-bold text-gray-500"
                  }`}
                >
                  Solved Problems
                </p>
              </div>
            </Link>
          )}
          {isAuthenticated() && isAuthenticated().user.role === 1 && (
            <Link style={currentTab("/admin/dashboard")} to="/admin/dashboard">
              <div className="flex items-center gap-2 rounded-md hover:bg-gray-100 cursor-pointer p-2">
                <svg
                  class="w-7 h-7 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <p
                  className={`${
                    isActive
                      ? "font-bold text-blue-500 text-xl"
                      : "font-bold text-gray-500"
                  }`}
                >
                  Admin Dashboard
                </p>
              </div>
            </Link>
          )}
        </div>
        <div className="flex items-center gap-5 pr-5">
          {isAuthenticated() && isAuthenticated().user.role === 0 && (
            <>
              {/* <div className="flex items-center justify-center  p-1 gap-1">
                
              <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <p className="font-bold text-gray-500 text-sm  ">20</p>
              </div> */}
              <div className="flex p-1 gap-1 items-center cursor-pointer ">
              <svg class="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path></svg>
                <p className="font-bold  text-gray-500 text-sm">
                  {solved.length} / {all.length}
                </p>
              </div>
            </>
          )}
          {!isAuthenticated() && (
            <>
              <Link style={currentTab("/signin")} to="/signin">
                <div
                  className={`${
                    isActive
                      ? "text-violet-600 font-bold underline scale-110"
                      : "text-green-400 font-bold"
                  }`}
                >
                  Login
                </div>
              </Link>

              <div className="text-red-400 font-bold">
                <Link to="/signup">Sign up</Link>
              </div>
            </>
          )}
          {isAuthenticated() && (
            <div
              onClick={() => {
                signout(() => {
                  history("/");
                });
              }}
              className="text-red-400 font-bold cursor-pointer"
            >
              <p>Logout</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
