import React from "react";
import Image from "next/image";

import { BsSearchHeart } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <header>
      {/* top nav */}
      <div className="flex items-center bg-greenzon_green p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="/greenzonnobg.png"
            width={150}
            height={60}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* Search */}
        <div className="hidden sm:flex bg-yellow-400 hover:bg-yellow-500 items-center h-10 rounded-md flex-grow cursor-pointer">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
            type="text"
          />
          <BsSearchHeart className="h-12 m-4" />
        </div>
        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Salut Alizéa Massé !</p>
            <p className="font-extrabold md:text-sm">Compte et listes </p>
          </div>
          <div className="link">
            <p>Retours</p>
            <p className="font-extrabold md:text-sm">& Commandes</p>
          </div>
          <div className="link relative flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 rounded-full text-center text-black font-bold">
              0
            </span>
            <FiShoppingCart size={32} className="" />
            <p className=" hidden md:inline font-extrabold pl-1 md:text-sm mt-2">
              Panier
            </p>
          </div>
        </div>
      </div>
      {/* bottom nav */}
      <div className="flex items-center bg-greenzon_green-light">
        <p>
          <AiOutlineMenu className="h-6
           mr-1" />
           Tous
        </p>
      </div>
      <div></div>
    </header>
  );
};

export default Header;
