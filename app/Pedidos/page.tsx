// @ts-ignore
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getProducts } from '../services/productsService';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
}

export default function Pedidos() {
  const [products, setProducts] = useState<Product[]>([]); // Estado para armazenar os produtos
  const [loading, setLoading] = useState<boolean>(true); // Estado para indicar carregamento

  useEffect(() => {
    // Função para buscar os produtos
    const fetchProducts = async () => {
      try {
        const data = await getProducts(); // Chama o serviço
        setProducts(data); // Armazena os produtos no estado
      } catch (error) {
        console.error('Erro ao carregar produtos:', error);
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p className="text-center">Carregando...</p>; // Indicador de carregamento
  }

  return (
    <div className="w-[500px] h-[900px] bg-[url('/pg_02.png')] rounded-3xl m-auto bg-cover bg-no-repeat bg-center flex-row items-center">
      <div className="text-center">
        <p className="text-[60px] font-bold mb-10">Café Mania</p>
      </div>
      <div className="bg-[#1613129f] h-[60px] p-1 flex justify-between mx-2 mb-5 rounded-lg">
        <div className="flex">
          <div className="py-5 mx-6">
            <img className="h-[15px]" src="/-.png" alt="Diminuir" />
          </div>
          <div className="mx-6">
            <img className="h-[50px]" src="/+.png" alt="Adicionar" />
          </div>
        </div>
        <div className="flex">
          <img className="h-[50px] mr-2" src="/paymant.svg" alt="Pagamento" />
          <p className="text-[25px] font-bold py-2">R$: 25,00</p>
        </div>
      </div>

      {/* Renderização dos produtos */}
      {products.map((item) => (
        <div key={item.id} className="mb-2">
          <div className="h-[120px] flex ml-2 mr-2 bg-[#1613129f] rounded-lg">
            <div className="text-center text-[20px] font-bold mr-1">
              <img className="h-[120px] rounded-lg" src={item.image} alt={item.name} />
            </div>
            <div className="p-2 font-semibold rounded-[20px] max-w-[380px]">
              <div className="flex justify-between">
                <div>
                  <p>{item.name}</p>
                </div>
                <div>
                  <p>{item.price}</p>
                </div>
              </div>
              <hr className="bg-[#9e7259] h-[1px] border-t-0" />
              <div>
                <p className="font-normal">{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-[50px] w-[500px] flex justify-around">
        <div>
          <Link href="/Home">
            <img src="Voltar.png" height="100px" width="200px" alt="Voltar" />
          </Link>
        </div>
        <div>
          <Link href="/FinalizarPedido">
            <img src="Continuar.png" height="100px" width="200px" alt="Continuar" />
          </Link>
        </div>
      </div>
    </div>
  );
}
