// @ts-ignore
import Link from 'next/link';

export default function CompraConcluida() {
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
