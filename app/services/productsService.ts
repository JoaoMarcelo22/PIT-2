import axios from 'axios';

// Base URL da API
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://sua-api.com', // Variável de ambiente para a URL base
});

// Função para buscar os produtos
export const getProducts = async () => {
  try {
    const response = await api.get('/products'); // Endpoint da API
    return response.data; // Retorna os dados da API
  } catch (error) {
    console.error('Erro ao buscar os produtos:', error);
    throw error; // Repassa o erro para o componente lidar
  }
};
