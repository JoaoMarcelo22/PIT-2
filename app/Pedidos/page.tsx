// @ts-ignore
import Link from 'next/link';

export default function Pedidos() {
  return (
    <div className="w-[500px] h-[900px] bg-[url('/pg_02.png')] rounded-3xl m-auto bg-cover bg-no-repeat bg-center flex-row items-center ">
      <div className='text-center'>
      <p className="text-[60px] font-bold mb-10">Café Mania</p>
      </div>
      <div className='bg-[#1613129f] h-[60px] p-1 flex justify-between mx-2 mb-5 rounded-lg'>
        <div className='flex'>
        <div className='py-5 mx-6' >
          <img className='h-[15px]' src="/-.png" alt="" />
        </div>
        <div className='mx-6'>
          <img className='h-[50px]' src="/+.png" alt="" />
        </div>
        </div>
        <div className='flex'>
        <img className='h-[50px] mr-2' src="/paymant.svg" alt="" />
        <p className='text-[25px] font-bold py-2'>R$: 25,00</p>
        </div>
      </div>
      <div className='mb-2'>
        <div className='h-[120px] flex ml-2 mr-2  bg-[#1613129f] rounded-lg'>
          <div className='text-center text-[20px] font-bold mr-1'>
              <img className='h-[120px] rounded-lg' src="/Expresso_Italiano.png" alt="" />
          </div>
          <div className='p-2 font-semibold rounded-[20px] max-w-[380px]'>
              <div className='flex justify-between'>
                <div className=''><p>Expresso Italiano</p></div>
                <div className=''><p>R$:10,00</p> </div>
              </div>
              <hr className='bg-[#9e7259] h-[1px]  border-t-0'/>
              <div>
                <p className='font-normal'>
                Um clássico espresso italiano com sabor intenso e aroma marcante, perfeito para os amantes de café forte e encorpado.
                </p>
              </div>
          </div>
        </div>
      </div>
      <div className='mb-2'>
        <div className='h-[120px] flex ml-2 mr-2  bg-[#1613129f] rounded-lg'>
          <div className='text-center text-[20px] font-bold mr-1'>
              <img className='h-[120px] rounded-lg' src="/Cappucino_de_Avela.png" alt="" />
          </div>
          <div className='p-2 font-semibold rounded-[20px] max-w-[380px]'>
              <div className='flex justify-between'>
                <div className=''><p>Cappucino de Avelã</p></div>
                <div className=''><p>R$:12,00</p> </div>
              </div>
              <hr className='bg-[#9e7259] h-[1px]  border-t-0'/>
              <div>
                <p className='font-normal'>
                Espresso encorpado misturado com leite vaporizado e uma pitada de xarope de avelã, coberto com uma espuma cremosa.
                </p>
              </div>
          </div>
        </div>
      </div>
      <div className='mb-2'>
        <div className='h-[120px] flex ml-2 mr-2  bg-[#1613129f] rounded-lg'>
          <div className='text-center text-[20px] font-bold mr-1'>
              <img className='h-[120px] rounded-lg' src="/Macchiato_de_amendoas.png" alt="" />
          </div>
          <div className='p-2 font-semibold rounded-[20px] max-w-[380px]'>
              <div className='flex justify-between'>
                <div className=''><p>Macchiato de Amêndoas</p></div>
                <div className=''><p>R$:15,00</p> </div>
              </div>
              <hr className='bg-[#9e7259] h-[1px]  border-t-0'/>
              <div>
                <p className='font-normal'>
                Espresso encorpado com uma leve camada de espuma de leite e um toque de xarope de amêndoas, proporcionando uma experiência única.
                </p>
              </div>
          </div>
        </div>
      </div>
      <div className='mb-2'>
        <div className='h-[120px] flex ml-2 mr-2  bg-[#1613129f] rounded-lg'>
          <div className='text-center text-[20px] font-bold mr-1'>
              <img className='h-[120px] rounded-lg' src="/Affogato_classico.png" alt="" />
          </div>
          <div className='p-2 font-semibold rounded-[20px] max-w-[380px]'>
              <div className='flex justify-between'>
                <div className=''><p>Affogato Clássico</p></div>
                <div className=''><p>R$:18,00</p> </div>
              </div>
              <hr className='bg-[#9e7259] h-[1px]  border-t-0'/>
              <div>
                <p className='font-normal'>
                Uma bola de sorvete de baunilha "afogada" em um espresso quente, criando uma deliciosa fusão de sabores.
                </p>
              </div>
          </div>
        </div>
      </div>
      <div className='absolute bottom-[50px] w-[500px] flex justify-around'>
        <div>
        <Link href="/Home">
          <img src='Voltar.png' height="100px" width="200px"/>
        </Link>
        </div>
        <div>
          <Link href="/FinalizarPedido">
          <img src='Continuar.png' height="100px" width="200px"/>
        </Link>
        </div>
      </div>
    </div>
  );
}
