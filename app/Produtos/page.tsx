// @ts-ignore
import Link from 'next/link';
// @ts-ignore
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Café mania - Produtos",
  description: "PIT -2",
};

export default function Produtos() {
  return (
    <div className="w-[500px] h-[900px] bg-[url('/pg_03.png')] rounded-3xl m-auto bg-cover bg-no-repeat bg-center flex-row items-center ">
      <div className='text-center'>
      <h1 className="text-[60px] font-bold mb-2">Café Mania</h1>
      </div>
      <div>
        <div className='h-[200px] flex mb-1 bg-[#1613129f]'>
          <img className='rounded-lg ml-1' src="/Macchiato_de_Amendoas.png" alt="" />
          <div className='flex-row'>
          <div className='text-center text-[20px] font-bold mr-1'>
              <h3>Machiato de Amêndoas</h3>
          </div>
          <div className='p-2 font-semibold'>
              <p>
                Espresso encorpado com uma leve camada de espuma de leite e um toque de xarope de amêndoas, proporcionando uma Experiência Única.
              </p>
          </div>
          </div>
        </div>
        <div className='h-[300px]'>
          <hr className='bg-[#9e7259] h-1 mx-2 border-t-0'/>
          <div className='text-center text-[30px] font-bold'>
              <h2>Origem</h2>
          </div>
          <div className='bg-[#9e7259da] ml-1 mr-1 rounded-lg p-2'>
              <p className='text-[#000] font-semibold'>
              O Macchiato de Amêndoas tem suas raízes na tradição italiana, onde o macchiato, que significa "manchado", surgiu como um espresso "manchado" com uma pequena quantidade de leite. A versão com amêndoas é uma variação moderna que ganhou popularidade por incorporar o sabor suave e levemente doce do xarope de amêndoas. Essa combinação oferece uma experiência de sabor única, mantendo a intensidade do espresso enquanto adiciona um toque aromático e sofisticado, tornando-se uma escolha favorita entre os apreciadores de café gourmet.
              </p>
          </div>
        </div>
        <div className='h-[160px] mt-3'>
          <hr className='bg-[#9e7259] h-1 mx-2 border-t-0'/>
          <div className='text-center text-[30px] font-bold'>
              <h2>Sustentabilidade</h2>
          </div>
          <div className='bg-[#9e7259da] ml-1 mr-1 rounded-lg p-2 font-semibold'>
              <p className='text-[#000]'>
              O Macchiato de Amêndoas é feito com grãos de café e amêndoas de fontes sustentáveis. A embalagem e os utensílios são recicláveis e biodegradáveis. Esta bebida combina sabor delicioso com um compromisso ambiental. 
              </p>
          </div>
        </div>
      </div>
      <div className='absolute bottom-[50px] w-[500px] flex justify-center'>
        <Link href="/Home">
          <img src='Voltar.png' height="100px" width="200px"/>
        </Link>
      </div>
    </div>
  );
}
