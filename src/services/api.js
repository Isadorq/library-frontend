import axios from 'axios';  // Importa Axios para requisições HTTP

// Cria instância do Axios com URL base da API
const apiClient = axios.create({
    baseURL: 'http://localhost:3000/api/books',  // URL da API
    headers: {
        'Content-Type': 'application/json', // Define o tipo de conteúdo como JSON
    },
});

// Exporta funções CRUD utilizando Axios
export default {
    getBooks() {
        return apiClient.get('/');  // GET para listar livros
    },
    addBook(book) {
        return apiClient.post('/', book);  // POST para adicionar livro
    },
    updateBook(id, book) {
        return apiClient.put(`/${id}`, book);  // PUT para atualizar livro pelo ID
    },
    deleteBook(id) {
        return apiClient.delete(`/${id}`);  // DELETE para excluir livro pelo ID
    },
};