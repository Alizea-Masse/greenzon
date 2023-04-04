import React from 'react'
import Currency from "react-currency-formatter";
import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../../slices/basketSlice';



const checkoutProduct = ({id, title, price, rating, description,category,image,hasPrime}) => {
    const dispatch = useDispatch();
    const addItemToBasket = () => {
        const product = {
            id,
            title,
            price,
            rating,
            description,
            category,   
            image,
            hasPrime,

        };
        dispatch(addToBasket(product))
    };
    const removeItemFromBasket = () => {
        //supprimer un article du panier
        dispatch(removeFromBasket({id}))
    }
  return (
    <div className='grid grid-cols-5'>
        <Image src={image} width={200} height={200} objectFit='contain'/>
        {/* middle */}
        <div className='col-span-3 mx-5'>
            <p>{title}</p>
            <div className='flex'>
                {Array(rating).fill().map((_,i)=>(
                    <AiFillStar key={i} color='#f7d707' size={20}/>
                ))}
                </div>
                <p className='text-xs my-2 line-clamp-3'>{description}</p>
                <Currency quantity={price} currency='EUR'/>
                {hasPrime && (
                    <div className='flex items-center space-x-2'>
                        <img loading='lazy' className='w-12' src='https://links.papareact.com/fdw' alt=''/>
                        <p className='text-xs text-gray-500'>Livraison gratuite</p>
                    </div>
                )}
                </div>
                {/* right add and remove  */}
                <div className='flex flex-col space-y-2 my-auto  justify-self-end'>
                <button onClick={addItemToBasket} className='button mt-auto'>Ajouter au panier</button>
                <button onClick={removeItemFromBasket} className='button mt-auto'>Supprimer du panier</button>
                </div>
                
            
    </div>
  )
}

export default checkoutProduct