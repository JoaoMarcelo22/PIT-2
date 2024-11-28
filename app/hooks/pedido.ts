import { useState } from "react";
import { Product } from "../utils/pedido";
import { createOrder } from "../services/productsService";

export const useOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]); // Tipagem do estado
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddToOrder = (product: Product) => {
    setTotalPrice((prev) => prev + product.price);
    const newOrder = createOrder(product);
    setOrders((prevOrders) => [...prevOrders, newOrder]); // Agora o TypeScript reconhece os tipos
  };

  return {
    orders,
    totalPrice,
    handleAddToOrder,
  };
};
