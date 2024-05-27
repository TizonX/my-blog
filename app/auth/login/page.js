"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div>
      <div className="flex justify-center items-center bg-zinc-700 h-screen">
        <div className="bg-zinc-800 p-2 mx-6 rounded-2xl">
          <div className="flex flex-col md:flex-row rounded-xl">
            <Image
              src={require("/public/images/email-subscribe/images/image.jpg")}
              alt=""
              className="object-fill rounded-xl h-80 w-auto md:h-64 md:rounded-l-xl md:rounded-r-none 
           transform hover:scale-105 hover:rounded-xl duration-200"
            />
            <div className="p-6 md:p-12">
              <h2 className="font-serif text-xl font-medium text-center text-white md:text-left">
                Get details and fitness types in your inbox
              </h2>
              <p className="max-w-lg my-4 text-xs leading-5 tracking-wide text-center text-white md:text-left">
                Reprehenderit laborum veniam culpa mollit non et anim. Ea
                officia Fugiat irure sint aute sunt in eu laborum ex nostrud
                enim.
              </p>
              <div className="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
                <input
                  type="text"
                  placeholder="search..."
                  className="p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-center md:text-left md:placeholder:text-left"
                />
                <button className="bg-lime-500 hover:bg-lime-700 duration-500 text-zinc-800 hover:text-white rounded-md text-sm px-5 py-3">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* pricing card */}
      <div className="flex items-center justify-center min-h-screen py-10 bg-slate-800">
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
          {[1, 2, 3].map((item, inx) => (
            <div
              className={`${
                item == 2 ? "bg-violet-700" : "bg-slate-700"
              } rounded-xl text-white`}
              key={inx}
            >
              <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
                <div className="text-center uppercase">basic</div>
                <h2 className="mt-10 font-serif text-5xl text-center">100GB</h2>
                <h3 className="mt-2 text-center">$1.99/Month</h3>
                <div className="flex justify-center">
                  <Link
                    href="#"
                    className={`inline-block px-10 py-3 my-6 text-white text-center border border-violet-600 rounded-lg duration-200 hover:border-violet-800 hover:bg-violet-500 ${
                      item == 2 && "bg-violet-800"
                    }`}
                  >
                    Purchase
                  </Link>
                </div>
              </div>
              {/* border */}
              <div className="border-t border-slate-700" />
              {/* lower content */}
              <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
                <div className="flex flex-col space-y-2">
                  {[
                    "100GB of storage",
                    "Options to add members",
                    "Extra member benefits",
                  ].map((data, index) => (
                    <div
                      className="flex justify-center items-center"
                      key={index}
                    >
                      <FontAwesomeIcon icon={faCheck} />
                      <span className="text-sm ml-2">{data}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* product model */}
      <div className="">
          
      </div>
    </div>
  );
};

export default Login;
