import React, {useState} from "react";
import { Link } from "react-router-dom";
import { cadastrarPet } from "../../api/petApi";


export default function Index() {
    const [nome, setNome] = useState('');

    async function salvarPet() {
        try {
            const r = await cadastrarPet(nome);

            if (r !== 200) throw new Error('Não foi possível cadastrar o pet 😐');
            alert('🚀 Pet cadastrado com sucesso!');
        } catch (err) {
            alert(err.message);
        }
    }
    
    return (
        <>
            <h1>Cadastrar pet</h1>
            <Link to='/'>Página inicial</Link>
            <br />
            <section>
                <input placeholder='Nome do animal' type='text' value={nome} onChange={e => setNome(e.target.value)} />
                <br />
                <button onClick={salvarPet}>Salvar Pet</button>
            </section>
        </>
    );
}
