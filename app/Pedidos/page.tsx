// @ts-ignore
import Link from 'next/link';

export default function Pedidos() {
  return (
    <div className="w-[500px] h-[900px] bg-[url('/pg_02.png')] rounded-3xl m-auto bg-cover bg-no-repeat bg-center flex-row items-center ">
      <div className='text-center'>
      <p className="text-[60px] font-bold mb-20">Café Mania</p>
      </div>
      <div>
      <div className='absolute bottom-[50px] pl-10'>
        <Link href="/Home">
          <img src='go_back.svg' height="50px" width="50px"/>
        </Link>
      </div>
      </div>
    </div>
  );
}
