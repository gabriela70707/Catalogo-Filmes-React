import estilo from './serie.module.css'
import { ListaSeries } from '../componentes/series/ListaSeries'
export function Serie(){
    return(
        <div className={estilo.container}>
            <ListaSeries/>
        </div>
    )
}