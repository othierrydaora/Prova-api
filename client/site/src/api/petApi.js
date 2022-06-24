import axios from 'axios';

const api = axios.create({ baseURL: "http://localhost:5050" });

export async function cadastrarPet(nome) {
    const answer = await api.post('/pet', {
        nome: nome
    });
    return answer.status;
}

export async function consultarPets() {
    const answer = await api.get('/pet');
    return answer.data;
}

export async function consultarPet(id) {
    const answer = await api.get(`/pet/${id}`);
    return answer.data;
}

export async function deletarPet(id) {
    const answer = await api.delete(`/pet/${id}`);
    return answer.status;
}
