import React from "react";
import Image from "next/image";

import { BsSearchHeart } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../../slices/basketSlice";

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems)
  return (
    <header>
      {/* top nav */}
      <div className="flex items-center bg-greenzon_green  flex-grow ">
        <div className="mt-1 flex items-center flex-grow sm:flex-grow-0">
          <Image onClick={() => router.push("/")}
            src="/greenzonnobg.png"
            width={150}
            height={60}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* Search */}
        <div className="hidden sm:flex bg-yellow-400 hover:bg-yellow-500 items-center h-8 rounded-md flex-grow cursor-pointer">
          <input
            className=" h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
            type="text"
          />
          <BsSearchHeart className="h-12 m-4" />
        </div>
        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link" onClick={!session ? signIn : signOut}>
            <p>
              {session ? `Bonjour, ${session.user.name}` : "Se connecter"}
            </p>
            <p className="font-extrabold md:text-sm">Compte et listes </p>
          </div>
          <div className="link">
            <p>Retours</p>
            <p className="font-extrabold md:text-sm">& Commandes</p>
          </div>
          <div className="link relative flex items-center" onClick={()=>router.push('/checkout')}>
            <span className="absolute top-2 left-9 md:right-10 h-4 w-4 bg-yellow-400 rounded-full text-center text-black font-bold">
              {items.length}
            </span>
            <FiShoppingCart size={32} className="" />
            <p className=" hidden md:inline font-extrabold pl-1 md:text-sm mt-2">
              Panier
            </p>
          </div>
        </div>
      </div>
      {/* bottom nav */}
      <div className="flex items-center space-x-3 bg-greenzon_green-light text-white text-sm">
        <p className="link flex items-center">
          <AiOutlineMenu component={'span'} size={35} className="h-6 mr-1" />
          Tous
        </p>
        <p className="link">Meilleures ventes</p>
        <p className="link">Service Client</p>
        <p className="link">Dernières Nouveautés</p>
        <p className="link hidden lg:inline-flex">Basics</p>
        <p className="link hidden lg:inline-flex">Musique</p>
        <p className="link hidden lg:inline-flex">Ventes</p>
        <p className="link hidden lg:inline-flex">Ebooks</p>
        <p className="link hidden lg:inline-flex">Audible</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Livres</p>
        <p className="link hidden lg:inline-flex">Maison</p>
        <p className="link hidden lg:inline-flex">Informatique</p>
      </div>
      <div></div>
    </header>
  );
};

export default Header;
