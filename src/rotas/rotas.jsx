import { Routes, Route } from "react-router-dom";
import { Inicial } from "../paginas/inicial";
import { Serie } from "../paginas/serie";
import { Perfil } from "../paginas/perfil";
import { Lista } from "../componentes/Lista";

export function Rotas(){
    return(
        <Routes>
            <Route path="/" element={<Inicial/>}>
                <Route index element={<Lista/>}/>
                <Route path="perfil" element={<Perfil/>}/>
                <Route path="serie" element={<Serie/>}/>                                                                                                                                                                                                                                                                                                                                                                  
            </Route>
        </Routes>
    )
}

