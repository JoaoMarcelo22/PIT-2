// @ts-ignore
import Link from 'next/link';
// @ts-ignore
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Café mania - Historico",
  description: "PIT -2",
};

export default function Historico() {
  return (
    <div className="w-[500px] h-[900px] bg-[url('/assets/pg_04.png')] rounded-3xl m-auto bg-cover bg-no-repeat bg-center flex-row items-center ">
      <div className='text-center  bg-[#1613129f]'>
      <p className="text-[60px] text-[#fff] font-bold mb-5">Café Mania</p>
      </div>
      <div className='max-w-[400px] bg-[#1613129f] rounded-lg m-auto text-center mb-4'>
        <h3 className='font-bold text-[30px]'>Historico</h3>
      </div>
      <div>
        <hr className='bg-[#9e7259] h-1 mx-2 border-t-0 mb-2'/>
        <div className='h-[100px] flex mb-1 ml-2 mr-2 justify-between'>
          
          <div className='text-center text-[20px] font-bold mr-1 bg-[#1613129f] rounded-[20px] px-2 py-2 min-w-[360px]'>
              <h3>XPTO01</h3>
              <p className='text-[15px]'>Macchiato de Amêndoas + Café Orgânico da fazenda</p>
          </div>
          <div className='p-2 font-semibold bg-[#91B9F5] rounded-[20px] text-[#000] py-9'>
              <p>
                Entregue
              </p>
          </div>
        </div>
      </div>
      <div>
        <hr className='bg-[#9e7259] h-1 mx-2 border-t-0 mb-2'/>
        <div className='h-[100px] flex mb-1 ml-2 mr-2 justify-between'>
          
          <div className='text-center text-[20px] font-bold mr-1 bg-[#1613129f] rounded-[20px] px-2 py-2 min-w-[360px]'>
              <h3>XPTO02</h3>
              <p className='text-[15px]'>Cold Brew Vanilla + Affogato Clássico + Mocha Especial</p>
          </div>
          <div className='p-2 font-semibold bg-[#91B9F5] rounded-[20px] text-[#000] py-9'>
              <p>
                Entregue
              </p>
          </div>
        </div>
      </div>
      <div>
        <hr className='bg-[#9e7259] h-1 mx-2 border-t-0 mb-2'/>
        <div className='h-[100px] flex mb-1 ml-2 mr-2 justify-between'>
          
          <div className='text-center text-[20px] font-bold mr-1 bg-[#1613129f] rounded-[20px] px-2 py-2 min-w-[360px]'>
              <h3>XPTO03</h3>
              <p className='text-[15px]'>Latte Caramelizado</p>
          </div>
          <div className='p-2 font-semibold bg-[#F59191] rounded-[20px] text-[#000] py-9'>
              <p>
                Cancelado
              </p>
          </div>
        </div>
      </div>
      <div>
        <hr className='bg-[#9e7259] h-1 mx-2 border-t-0 mb-2'/>
        <div className='h-[100px] flex mb-1 ml-2 mr-2 justify-between'>
          
          <div className='text-center text-[20px] font-bold mr-1 bg-[#1613129f] rounded-[20px] px-2 py-2 min-w-[360px]'>
              <h3>XPTO04</h3>
              <p className='text-[15px]'>Espresso Italiano + Cappuccino de Avelã</p>
          </div>
          <div className='p-2 font-semibold bg-[#F5F191] rounded-[20px] text-[#000] py-9'>
              <p>
                Em Processo
              </p>
          </div>
        </div>
      </div>
      <div>
        <hr className='bg-[#9e7259] h-1 mx-2 border-t-0 mb-2'/>
        <div className='h-[100px] flex mb-1 ml-2 mr-2 justify-between'>
          
          <div className='text-center text-[20px] font-bold mr-1 bg-[#1613129f] rounded-[20px] px-2 py-2 min-w-[360px]'>
              <h3>XPTO05</h3>
              <p className='text-[15px]'>Affogato Clássico</p>
          </div>
          <div className='p-2 font-semibold bg-[#91B9F5] rounded-[20px] text-[#000] py-9'>
              <p>
                Entregue
              </p>
          </div>
        </div>
      </div>
      <div className='absolute bottom-[50px] w-[500px] flex justify-center'>
        <Link href="/Home">
          <img src='/assets/Voltar.png' height="100px" width="200px"/>
        </Link>
      </div>
    </div>
  );
}
