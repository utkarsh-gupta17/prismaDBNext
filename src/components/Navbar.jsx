"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => { 
  const [navbar, setNavbar] = useState(false);

  const navHandler = () => {
    setNavbar(!navbar);
  };

  return (
    <div>
      <div className="nav-container mb-40">
        <div
          style={{ backgroundColor: `white` }}
          className="fixed left-0 top-0 w-full z-10 shadow-md"
        >
          <div className="max-w-[1140px] m-auto flex justify-between items-center p-2.5 text-white">
            <ul className="hidden sm:flex text-zinc-950">
              <li className="nav-link pb-4 pt-4 pr-7  hover:text-slate-700 duration-200">
                <Link href="/">
                  <div className="flex"> Student Table{" "}</div>
                </Link>
              </li>
            </ul>

            //Mobile Button
            <div onClick={navHandler} className="block sm:hidden z-10">
              {navbar ? (
                <AiOutlineClose size={20} className="text-white" />
              ) : (
                <AiOutlineMenu size={20} className="text-zinc-950" />
              )}
            </div>
            //Mobile Menu
            <div
              className={
                navbar
                  ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex pt-14 pl-6 w-full h-screen bg-black ease-in duration-200 "
                  : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex pt-14 pl-6  w-full h-screen bg-black ease-in duration-200"
              }
            >
              <ul>
                <li
                  onClick={navHandler}
                  className="pl-0 pr-4 pt-3 pb-3 text-2xl hover:text-gray-500"
                >
                  <Link href="/brendovi">Brendovi</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
