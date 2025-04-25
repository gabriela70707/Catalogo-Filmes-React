import { Routes, Route } from "react-router-dom";
import { Inicial } from "../paginas/inicial";
import { Serie } from "../paginas/serie";
import { Perfil } from "../paginas/perfil";
import { ListaGenerica } from "../componentes/ListaGenerica"; // Importando o componente genérico
import { Navigate } from "react-router-dom";


export function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Perfil />} />
            <Route path="/filmes" element={<Inicial />}>
                <Route index element={<ListaGenerica apiEndpoint="/movie/popular" mediaType="Filmes" />} />
                <Route path="serie" element={<ListaGenerica apiEndpoint="/tv/popular" mediaType="Séries" />} />
            </Route>

            {/* Redirecionar para `/` caso nenhuma rota seja encontrada */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}
