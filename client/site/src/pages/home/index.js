import React from "react";
import { Link } from "react-router-dom";

export default function Index() {
    return (
        <>
            <h1>Sistema de pets</h1>
            <br />
            <ul>
                <li><Link to='/cadastro'>Cadastro</Link></li>
                <li><Link to='/consulta'>Consulta</Link></li>
            </ul>
        </>
    );
}
