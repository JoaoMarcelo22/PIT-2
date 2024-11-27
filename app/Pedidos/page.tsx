"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard/index";
import { getProducts } from "../services/productsService";
import { generateRandomId } from "../utils/pedido";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface Order {
  id: string;
  titles: string[];
  total: number;
}

export default function Pedidos() {
  const [products, setProducts] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToOrder = (product: Product) => {
    setTotalPrice((prev) => prev + product.price);

    const newOrder: Order = {
      id: generateRandomId(),
      titles: [product.name],
      total: product.price,
    };

    setOrders((prevOrders) => [...prevOrders, newOrder]);
  };

  return (
    <div className="w-[500px] h-[900px] bg-[url('/pg_02.png')] rounded-3xl m-auto bg-cover bg-no-repeat bg-center">
      <div className="text-center">
        <p className="text-[60px] font-bold mb-10">Café Mania</p>
      </div>
      <div className="bg-[#1613129f] h-[60px] p-1 flex justify-between mx-2 mb-5 rounded-lg">
        <p className="text-[25px] font-bold py-2">Preço Total: R$ {totalPrice.toFixed(2)}</p>
      </div>

      <div className="overflow-y-auto max-h-[600px] px-2">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToOrder={handleAddToOrder}
          />
        ))}
      </div>

      <div className="absolute bottom-[50px] w-full text-center">
        <p className="text-[20px] font-bold">Pedidos Criados:</p>
        <ul className="text-[16px] list-disc list-inside">
          {orders.map((order) => (
            <li key={order.id}>
              Pedido #{order.id} - {order.titles.join(", ")} - R$ {order.total.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
