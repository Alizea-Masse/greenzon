import React from "react";
import moment from "moment";
import Currency from "react-currency-formatter";

function Order({ id, amount, amountShipping, images, timestamp, items }) {
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
        <div>
          <p className="font-bold text-xs">COMMANDE PASSEE</p>
          <p>{moment.unix(timestamp).format("DD MMM YYYY")}</p>
          <p className="text-xs">Total: {items.length} articles</p>
        </div>
        <div>
          <p className="text-xs font-bold">TOTAL</p>
          <p>
            <Currency quantity={amount} currency="EUR" /> 
          </p>
        </div>
        <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">{items.length}{items.length > 1 ? " produits" : " produit"} {" "} :</p>
        <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap">COMMANDE #{id}</p>
      </div>
      <div className="p-5 sm:p-10">
        <div className="flex space-x-6 overflow-x-auto">
            {images.map((image, i) => (
                <img src={image} alt="" className="h-20 object-contain sm:h-32" />

            ))}

        </div>
      </div>
    </div>
  );
}

export default Order;
