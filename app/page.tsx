// @ts-ignore
import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-[500px] h-[900px] bg-[url('/assets/pg_01.png')] rounded-3xl m-auto bg-cover bg-no-repeat bg-center flex-row items-center">
      <div className='text-center'>
      <p className="text-[60px] font-bold mb-20">Café Mania</p>
      </div>
      <div className="flex justify-evenly absolute bottom-[50px]  w-[500px]">
        <div>
          <Link href="/Home">
            <img src="/assets/facebook.png" alt="Facebook" className="h-[50px] mx-[5px] z-02" width={50} height={50}/>
          </Link>
        </div>
        <div>
          <Link href="/Home">
            <img src="/assets/x.png" alt="Twitter" className="h-[50px] mx-[0px] z-02" width={50} height={50}/>
          </Link>
        </div>
        <div>
        <Link href="/Home">
            <img src="/assets/google.png" alt="google" className="h-[50px] mx-[5px] z-02 " width={50} height={50} />
        </Link>
        </div>
      </div>
    </div>
  );
}
