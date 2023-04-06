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
        <p className="text-sm whitespace-nowrap sm:">{items.length} produit</p>
      </div>
    </div>
  );
}

export default Order;
