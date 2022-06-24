import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { consultarPets } from "../../api/petApi";


export default function Index() {
    const [pets, setPets] = useState([]);

    async function listarPets() {
        const r = await consultarPets();
        setPets(r);
    }

    useEffect(() => {
        listarPets();
    }, []);
    
    return (
        <>
            <h1>Consultar pets</h1>
            <Link to='/'>Página inicial</Link>
            
            <section>
                <table>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Nome</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pets.map(item =>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.nome}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </section>
        </>
    );
}
