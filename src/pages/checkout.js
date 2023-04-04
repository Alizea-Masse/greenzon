import Header from "../components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/react";

const Checkout = () => {
  const session = useSession();
  const items = useSelector(selectItems);
  return (
    <div className="bg-greenzon_green">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* left */}

        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            alt=""
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4 ">
              {items.length === 0 ? "Votre panier est vide." : "Votre panier"}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* right */}
        <div>
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Sous-total {items.length} items :
                <span className="font-bold">
                  {/* <Currency quantity={items.reduce((total,item)=>total + item.price,0)} currency="EUR"/> */}
                </span>
              </h2>
              <button
                className={`button mt-2 ${
                  session.status === "unauthenticated" &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-200 cursor-not-allowed"
                }`}
              >
                {session.status === "unauthenticated"
                  ? "Inscrivez-vous pour commander"
                  : "Proceder au paiement"}
              </button>
              {console.log(session)}
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Checkout;
