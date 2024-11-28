import React, { useState } from "react";

interface Order {
  id: string;
  titles: string[];
  total: number;
}

interface CarrinhoProps {
  orders: Order[];
  totalPrice: number;
  onClose: () => void; // Função para fechar o modal
}

const Carrinho: React.FC<CarrinhoProps> = ({ orders, totalPrice, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
      <div className="relative p-4 bg-[#1613129f] rounded-lg shadow-lg max-w-[400px] w-full max-h-[600px] overflow-auto">
        {/* Botão de fechar */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          &#10005;
        </button>
        <div className="text-center">
          {orders.length > 0 ? (
            <>
              <div className="flex justify-between">
                <div>
                  <p className="p-2 font-semibold">Pedido: #{orders[0]?.id || "Nenhum pedido disponível"}</p>
                </div>
                <div>
                  <p className="p-2 font-semibold">Total R$: {totalPrice.toFixed(2)}</p>
                </div>
              </div>
              <hr className='bg-[#9e7259] h-[1px]  border-t-0 mb-2'/>
              <ul className="text-[16px] list-disc list-inside">
                {orders.map((order) => (
                  <li key={order.id} className="list-none ">
                    <span>
                      {order.titles.join(", ")} - R$ {order.total.toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p>Nenhum pedido criado.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Carrinho;
