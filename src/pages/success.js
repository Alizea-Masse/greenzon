import React from "react";
import Header from "../components/Header";
import { BsCheckCircle } from "react-icons/bs";
import { useRouter } from "next/router";

const succes = () => {
    const router = useRouter();
  return (
    <div className="bg-greenzon_green h-screen">
      <Header />
      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center space-x-2 mb-5">
            <BsCheckCircle size={32} className="text-green-500" />
            <h2 className="text-3xl">Merci pour votre commande</h2>
          </div>
          <p>
            Merci pour votre commande. Nous vous enverrons un email de
            confirmation une fois que votre article aura été expédié, si vous
            avez des questions, n'hésitez pas à nous contacter.
          </p>
          <button onClick={()=> router.push('/commandes')}  className="button mt-8">Retour à mes commandes</button>
        </div>
      </main>
    </div>
  );
};

export default succes;
