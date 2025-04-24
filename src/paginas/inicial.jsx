import { Cabecalho } from "../componentes/Cabecalho";
import { BarraNavegacao } from "../componentes/BarraNavegacao";

// Outlet é um espaço que serve para redenrizar o componente da rota, então se clicar no Link "perfil"
//Vai exibir o componente que corresponde ao endereço
import { Outlet } from "react-router-dom";


//estrutura 
export function Inicial(){
    return(
        <>
            <Cabecalho />
            <BarraNavegacao />            
            <Outlet />
        </>
    )
}