import { Routes, Route } from "react-router-dom";
import { Inicial } from "../paginas/inicial";
import { Serie } from "../paginas/serie";
import { Perfil } from "../paginas/perfil";
import { ListaGenerica } from "../componentes/ListaGenerica"; // Importando o componente genérico

export function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Inicial />}>
                {/* Exibe filmes populares */}
                <Route index element={<ListaGenerica apiEndpoint="/movie/popular" mediaType="Filmes" />} />
                
                {/* Exibe séries populares */}
                <Route path="serie" element={<ListaGenerica apiEndpoint="/tv/popular" mediaType="Séries" />} />

                {/* Perfil */}
                <Route path="perfil" element={<Perfil />} />
            </Route>
        </Routes>
    );
}
