
import { Router } from 'express';
import { cadastrarPet, consultarPet, listarPets, alterarPet, deletarPet } from '../repository/petRepository.js';

const server = Router();


//Cadastrar um pet
server.post('/pet', async (req, res) => {
    try {
        const pet = req.body;
        if (!pet.nome) throw new Error('Insira o nome do pet');

        const resp = await cadastrarPet(pet);
        res.send(resp);
    } catch (err) {
        res.status(400).send({
            Erro: err.message
        });
    }
});

//Listar todos os pets
server.get('/pet', async (req, res) => {
    try {
        const resp = await listarPets();
        if (!resp) throw new Error('Não encontrado');
        res.send(resp);
    } catch (err) {
        res.status(400).send({
            Erro: err.message
        });
    }
});

//Consultar um pet por id
server.get('/pet/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const resp = await consultarPet(id);
        if (!resp) throw new Error('Não encontrado');
        res.send(resp);
    } catch (err) {
        res.status(400).send({
            Erro: err.message
        });
    }
});

//Alterar pet
server.put('/pet/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const pet = req.body;
        const resp = await alterarPet(pet, id);
        if (resp !== 1) throw new Error('Não foi possível fazer a alteração');

        res.status(204).send();
    } catch (err) {
        res.status(400).send({
            Erro: err.message
        });
    }
});

//Deletar pet
server.delete('/pet/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const resp = await deletarPet(id);
        if (resp !== 1) throw new Error('Não foi possível deletar o pet 😐');

        res.status(204).send();
    } catch (err) {
        res.status(400).send({
            Erro: err.message
        });
    }
});

export default server;
