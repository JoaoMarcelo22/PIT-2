// @ts-ignore
import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-[500px] h-[900px] bg-[url('/pg_02.png')] rounded-3xl m-auto bg-cover bg-no-repeat bg-center flex-row items-center ">
      <div className='text-center'>
      <p className="text-[60px] font-bold mb-20">Café Mania</p>
      </div>
      <div className='px-20'>
        <Link href= "/Pedidos">
        <div className='bg-[#9e7259] my-1 w-[350px] h-[50px] rounded-3xl text-center py-2 text-[20px]'><p className='text-[#000] font-semibold'>Fazer pedido</p></div>
        </Link>
        <Link href= "/Produtos">
        <div className='bg-[#9e7259] my-40 w-[350px] h-[50px] rounded-3xl text-center py-2 text-[20px]'><p className='text-[#000] font-semibold'>Ver Produto</p></div>
        </Link>
        <Link href= "/Historico">
        <div className='bg-[#9e7259] my-1 w-[350px] h-[50px] rounded-3xl text-center py-2 text-[20px]'><p className='text-[#000] font-semibold'>Ver Historico</p></div>
        </Link>
      </div>
      <div className='absolute bottom-[50px] w-[500px] flex justify-center'>
        <Link href="/">
          <img src='Voltar.png' height="100px" width="200px"/>
        </Link>
      </div>
    </div>
  );
}
