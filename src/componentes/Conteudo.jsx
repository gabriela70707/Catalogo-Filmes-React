import estilos from './Conteudo.module.css';
import { ListaGenerica } from './ListaGenerica'; // Certifique-se de importar corretamente o componente

export function Conteudo() {
    return (
        <main className={estilos.container}>
            {/* Exibindo filmes populares */}
            <ListaGenerica apiEndpoint="/movie/popular" mediaType="Filmes" />

            {/* Exibindo séries populares */}
            <ListaGenerica apiEndpoint="/tv/popular" mediaType="Séries" />
        </main>
    );
}
