"use client";

import React from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
  onAddToOrder: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToOrder }) => {
  return (
    <div
      className="h-[120px] flex bg-[#1613129f] rounded-lg cursor-pointer"
      onClick={() => onAddToOrder(product)}
    >
      <img
        className="h-[120px] w-[120px] rounded-lg"
        src={product.image}
        alt={product.name}
      />
      <div className="p-2 flex-1">
        <div className="flex justify-between">
          <p className="font-bold">{product.name}</p>
          <p className="font-semibold">R$: {product.price.toFixed(2)}</p>
        </div>
        <p className="text-sm mt-2">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
