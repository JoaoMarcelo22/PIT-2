import Link from 'next/link';

export default function pg2() {
  return (
    <div className="w-[500px] h-[900px] bg-[url('/pg_02.png')] rounded-3xl m-auto bg-auto bg-no-repeat bg-center flex-row items-center ">
      <div className='text-center'>
      <p className="text-[60px] font-bold mb-20">Café Mania</p>
      </div>
      <div >
        <div className='bg-stone-600 my-1 w-[350px] h-[50px] rounded-3xl text-center '><p>Fazer pedido</p></div>
        <div className='bg-stone-600 my-40 w-[350px] h-[50px] rounded-3xl text-center '><p>Ver Produto</p></div>
        <div className='bg-stone-600 my-1 w-[350px] h-[50px] rounded-3xl text-center '><p>Ver Historico</p></div>
      </div>
      <div className="flex justify-evenly absolute bottom-[50px]  w-[500px]">
        <div>
          <a href="#">
            <img src="facebook.png" alt="Facebook" className="h-[50px] mx-[5px]" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src="x.png" alt="Twitter" className="h-[50px] mx-[0px]" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src="google.png" alt="google" className="h-[50px] mx-[5px]" />
          </a>
        </div>
      </div>
      <p>
        <Link href="/">PG2</Link>
      </p>
    </div>
  );
}
