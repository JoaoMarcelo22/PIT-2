import axios from 'axios';

// Base URL da API (diretamente para o JSON)
const api = axios.create({
  baseURL: 'https://raw.githubusercontent.com/JoaoMarcelo22/cafe_mania/refs/heads/main/public/data/data.json',
});

// Função para buscar os produtos
export const getProducts = async () => {
  try {
    const response = await api.get(''); // Remove o '/products', pois estamos acessando o JSON diretamente
    return response.data; // Retorna os dados da API
  } catch (error) {
    console.error('Erro ao buscar os produtos:', error);
    throw error; // Repassa o erro para o componente lidar
  }
};
