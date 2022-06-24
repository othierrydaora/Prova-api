import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home';
import Cadastro from './pages/cadastro';
import Consulta from './pages/consulta';

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/cadastro' exact element={<Cadastro />} />
                <Route path='/consulta' exact element={<Consulta />} />
            </Routes>
        </BrowserRouter>
    );
}
