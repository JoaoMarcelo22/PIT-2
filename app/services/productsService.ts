// @ts-ignore
import axios from "axios";
import { useState, useEffect } from "react";
import { generateRandomId } from "../utils/pedido";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface Order {
  id: string;
  titles: string[];
  total: number;
}

// Hook para gerenciar produtos e pedidos
export function useOrderService() {
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>(() => {
    if (typeof window !== "undefined") {
      const storedOrders = localStorage.getItem("orders");
      return storedOrders ? JSON.parse(storedOrders) : [];
    }
    return [];
  });
  const [totalPrice, setTotalPrice] = useState<number>(() => {
    if (typeof window !== "undefined") {
      const storedTotalPrice = localStorage.getItem("totalPrice");
      return storedTotalPrice ? parseFloat(storedTotalPrice) : 0;
    }
    return 0;
  });

  // Atualizar localStorage quando o estado de pedidos ou totalPrice mudar
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("orders", JSON.stringify(orders));
      localStorage.setItem("totalPrice", totalPrice.toString());
    }
  }, [orders, totalPrice]);

  // Fetch de produtos ao montar o componente
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

  // Adicionar produto ao pedido
  const handleAddToOrder = (product: Product) => {
    setTotalPrice((prev) => prev + product.price);

    const newOrder: Order = {
      id: generateRandomId(),
      titles: [product.name],
      total: product.price,
    };

    setOrders((prevOrders) => [...prevOrders, newOrder]);
  };

  // Remover pedido da lista
  const handleRemoveOrder = (orderId: string) => {
    setOrders((prevOrders) => {
      const updatedOrders = prevOrders.filter((order) => order.id !== orderId);
  
      // Encontrar o pedido a ser removido
      const removedOrder = prevOrders.find((order) => order.id === orderId);
      if (removedOrder) {
        setTotalPrice((prevPrice) => {
          const newPrice = prevPrice - removedOrder.total;
          return newPrice >= 0 ? newPrice : 0; // Garante que o total não fique negativo
        });
      }
  
      return updatedOrders;
    });
  };
  
  

  return { products, totalPrice, orders, handleAddToOrder, handleRemoveOrder };
}

// Base URL da API
const api = axios.create({
  baseURL:
    "https://raw.githubusercontent.com/JoaoMarcelo22/cafe_mania/refs/heads/main/public/data/data.json",
});

// Função para buscar os produtos da API
export const getProducts = async () => {
  try {
    const response = await api.get(""); // Remove o '/products', pois estamos acessando o JSON diretamente
    return response.data; // Retorna os dados da API
  } catch (error) {
    console.error("Erro ao buscar os produtos:", error);
    throw error; // Repassa o erro para o componente lidar
  }
};
