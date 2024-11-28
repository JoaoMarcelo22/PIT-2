"use client";

// @ts-ignore
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Carrinho from "../components/Carrinho/index";
import ProductCard from "../components/ProductCard/index";
import { useOrderService } from "../services/productsService";

export default function Pedidos() {
  const { products, totalPrice, orders, handleAddToOrder, handleRemoveOrder } = useOrderService();

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Abre o modal do carrinho
  const openModal = () => setIsModalOpen(true);

  // Fecha o modal do carrinho
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    // Salvando o estado de pedidos e preço total no localStorage para persistência
    localStorage.setItem("orders", JSON.stringify(orders));
    localStorage.setItem("totalPrice", totalPrice.toString());
  }, [orders, totalPrice]);

  return (
    <div className="w-[500px] h-[900px] bg-[url('/pg_02.png')] rounded-3xl m-auto bg-cover bg-no-repeat bg-center">
      <div className="text-center">
        <p className="text-[60px] font-bold mb-10">Café Mania</p>
      </div>
      <div className="bg-[#1613129f] h-[60px] p-1 flex justify-between mx-2 mb-5 rounded-lg">
        <div className="App">
          {/* Imagem que abre o modal */}
          <img
            src="/paymant.svg"
            alt="Carrinho"
            className="w-12 h-12 cursor-pointer"
            onClick={openModal}
          />

          {/* Exibição do Modal */}
          {isModalOpen && (
            <Carrinho orders={orders} totalPrice={totalPrice} onClose={closeModal} onRemoveOrder={handleRemoveOrder} />
          )}
        </div>
        <p className="text-[25px] font-bold py-2">Preço Total : R$ {totalPrice.toFixed(2)}</p>
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

      <div className="absolute bottom-[50px] w-[500px] flex justify-around">
        <div>
          <Link href="/Home">
            <img src="Voltar.png" height="100px" width="200px" />
          </Link>
        </div>
        <div>
          <Link href="/FinalizarPedido">
            <img src="Continuar.png" height="100px" width="200px" />
          </Link>
        </div>
      </div>
    </div>
  );
}
