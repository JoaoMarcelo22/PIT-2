"use client";

// @ts-ignore
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Carrinho from '../components/Carrinho/index';
import { useOrderService } from '../services/productsService';

export default function FinalizarPedido() {
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
        <h3 className='font-bold text-[30px]'>Endereço de Entrega</h3>
      </div>
        <div className='flex flex-col max-w-[400px] m-auto'>
        <div>
        <div className='flex justify-between my-2 mt-6'>
          <div className='flex flex-col items-start w-5/6'>
            <p className='text-[#ffffff] bg-[#1613129f] rounded-lg p-1 font-semibold'>Cidade</p>
            <div className='w-full bg-[#1613129f] rounded-lg text-center mt-1 h-10'>-</div>
          </div>
          <div className='flex flex-col items-start w-1/6 ml-1'>
            <p className='text-[#ffffff] bg-[#1613129f] rounded-lg p-1 font-semibold'>Estado</p>
            <div className='w-full bg-[#1613129f] rounded-lg text-center mt-1 h-10'>-</div>
          </div>
        </div>
        </div>
        <div className='flex justify-between my-2'>
          <div className='flex flex-col items-start w-1/6'>
            <p className='text-[#ffffff] bg-[#1613129f] rounded-lg p-1 font-semibold'>Número</p>
            <div className='w-full bg-[#1613129f] rounded-lg text-center mt-1 h-10'>-</div>
          </div>
          <div className='flex flex-col items-start w-5/6 ml-1'>
            <p className='text-[#ffffff] bg-[#1613129f] rounded-lg p-1 font-semibold'>Bairro</p>
            <div className='w-full bg-[#1613129f] rounded-lg text-center mt-1 h-10'>-</div>
          </div>
        </div>
        <div className='my-2'>
          <div>
            <p className='text-[#ffffff] bg-[#1613129f] rounded-lg p-1 font-semibold w-[120px]'>Complemento</p>
            <div className='max-w-[400px] bg-[#1613129f] rounded-lg text-center mt-1 h-10'>-</div>
          </div>
        </div>
      </div>

      <div className='absolute bottom-[50px] w-[500px] flex justify-around'>
        <div>
        <Link href="/Pedidos">
          <img src='Voltar.png' height="100px" width="200px"/>
        </Link>
        </div>
        <div>
          <Link href="/Pagamento">
          <img src='Continuar.png' height="100px" width="200px"/>
        </Link>
        </div>
      </div>
      
    </div>
    
  );
}
