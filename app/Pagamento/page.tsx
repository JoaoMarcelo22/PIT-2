// @ts-ignore
import Link from 'next/link';

export default function Pagamento() {
  return (
    <div className="w-[500px] h-[900px] bg-[url('/pg_02.png')] rounded-3xl m-auto bg-cover bg-no-repeat bg-center flex-row items-center ">
      <div className='text-center'>
      <p className="text-[60px] font-bold mb-10">Café Mania</p>
      <div className='p-2 font-semibold  max-w-[400px] bg-[#1613129f] rounded-lg m-auto'>
        <div className='flex justify-between'>
          <div className=''><p>Pedido: XPTO004</p></div>
              <div className=''><p>Total R$:18,00</p> </div>
          </div>
          <hr className='bg-[#9e7259] h-[1px]  border-t-0'/>
          <div className='mt-2'>
            <p className='font-normal'><strong>QTD:</strong>  2 - Affogato Clássico.</p>
            <p className='font-normal'><strong>QTD:</strong> 1 - Expresso Italiano.</p>
            <p className='font-normal'><strong>QTD:</strong> 3 - Cappucino de Avelã.</p>
            <p className='font-normal'><strong>QTD:</strong> 2 - Macchiato de Amêndoas.</p>
          </div>
        </div>
      </div>
      <hr className='bg-[#9e7259] h-[2px]  border-t-0 mx-2 mt-4'/>
      <div className='max-w-[400px] bg-[#1613129f] rounded-lg m-auto text-center mt-4'>
        <h3 className='font-bold text-[30px]'>Pagamento</h3>
      </div>
      <div className='w-[400px] h-[200px] flex justify-center bg-[#1613129f] rounded-lg m-auto mt-4'>
        <img  className='max-w-[400px] h-full' src="/pix.png" alt="" />
      </div>
        <div className='flex flex-col max-w-[400px] m-auto'>
        <div className='border-neutral-50 border px-1 mt-6 bg-[#1613129f] rounded-lg'>
          <h3 className='text-center text-[18px] font-bold'>
            Cartão de Credito
          </h3>
        <div>
            <p className='text-[#ffffff] bg-[#9e7259ad] rounded-lg p-1 font-semibold w-[160px] mt-4'>Nome Completo</p>
            <div className='max-w-[400px] bg-[#9e7259ad] rounded-lg text-center mt-1 h-10'>-</div>
          </div>
        <div className='flex justify-between my-2'>
          <div className='flex flex-col items-start w-5/6'>
            <p className='text-[#ffffff] bg-[#9e7259ad] rounded-lg p-1 font-semibold'>Numero do Cartão</p>
            <div className='w-full bg-[#9e7259ad] rounded-lg text-center mt-1 h-10'>-</div>
          </div>
          <div className='flex flex-col items-start w-1/6 ml-1'>
            <p className='text-[#ffffff] bg-[#9e7259ad] rounded-lg p-1 font-semibold'>Codigo</p>
            <div className='w-full bg-[#9e7259ad] rounded-lg text-center mt-1 h-10'>-</div>
          </div>
        </div>
        </div>
        <div className='my-4'>
          
        </div>
      </div>

      <div className='absolute bottom-[50px] w-[500px] flex justify-around'>
        <div>
        <Link href="/FinalizarPedido">
          <img src='Voltar.png' height="100px" width="200px"/>
        </Link>
        </div>
        <div>
          <Link href="/CompraConcluida">
          <img src='Continuar.png' height="100px" width="200px"/>
        </Link>
        </div>
      </div>
    </div>
  );
}
