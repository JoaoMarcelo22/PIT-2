"use client";

// @ts-ignore
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Carrinho from '../components/Carrinho/index';
import { useOrderService } from '../services/productsService';

export default function CompraConcluida() {

  const { products, totalPrice, orders, handleAddToOrder } = useOrderService();

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
    <div className="w-[500px] h-[900px] bg-[url('/pg_02.png')] rounded-3xl m-auto bg-cover bg-no-repeat bg-center flex-row items-center ">
      <div className='text-center'>
      <p className="text-[60px] font-bold mb-10">Café Mania</p>
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
            <Carrinho orders={orders} totalPrice={totalPrice} onClose={closeModal} />
          )}
        </div>
        <p className="text-[25px] font-bold py-2">Preço Total : R$ {totalPrice.toFixed(2)}</p>
      </div>
      </div>
      <hr className='bg-[#9e7259] h-[2px]  border-t-0 mx-2 mt-4'/>
      <div className='max-w-[400px] bg-[#1613129f] rounded-lg m-auto text-center mt-4'>
        <h3 className='font-bold text-[30px]'>Compra finalizada</h3>
      </div>
        <div className='flex flex-col max-w-[400px] m-auto'>
        <div className='border-neutral-50 border px-1 mt-6 bg-[#1613129f] rounded-lg'>
        <div>
            <p className='text-[#ffffff] bg-[#9e7259ad] rounded-lg p-1 font-semibold w-full mt-2'>Você  Ganhou 18 Pontos Coffe Mania pela compra. Deixe um Comentario abaixo:</p>
            <div className='max-w-[400px] min-h-[200px] mb-2 bg-[#9e7259ad] rounded-lg text-center mt-1 h-10'>-</div>
          </div>
        </div>
        <p className='text-[#ffffff] bg-[#9e7259ad] rounded-lg p-1 font-semibold w-full mt-4 text-center'>Um café e um cafuné para trazer um pouquinho de fé.</p>
      </div>

      <div className='absolute bottom-[50px] w-[500px] flex justify-around'>
        <div>
        <Link href="/Historico">
          <img src='Finalizar.png' height="100px" width="200px"/>
        </Link>
        </div>
      </div>
    </div>
  );
}
