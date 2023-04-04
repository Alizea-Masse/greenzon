import { useEffect } from "react";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../slices/basketSlice";


const Product = ({ id, title, price, description, category, image }) => {
    const dispatch= useDispatch();
  const [rating, setRating] = useState(1);
  const [hasPrime, setHasPrime] = useState(true);
  const MAX_RATING = 5;
    const MIN_RATING = 1;
  useEffect(() => {
    setRating(
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );

    setHasPrime(Math.random() < 0.5);
  }, []);

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      hasPrime,
      rating

    };
// envoyer le produit en tant qu'action au redux store 
    dispatch(addToBasket(product));
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 rounded-md ">
      <div className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</div>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <AiFillStar color="#f7d707" size={20} />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="EUR" />
      </div>
        {hasPrime && (
            <div className="flex items-center space-x-2 -mt-5">
                <img loading="lazy" className="w-12" src="https://links.papareact.com/fdw" alt="" />
                <p className="text-xs text-gray-500">Livraison gratuite</p>
            </div>
        )}
        <button onClick={addItemToBasket} className="mt-auto button">Ajouter au panier</button>
    </div>
  );
};

export default Product;
