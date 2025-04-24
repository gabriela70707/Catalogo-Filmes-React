import estilos from "./Modal.module.css";

export function Modal({ item, onClose }) {
    if (!item) {
        return null;
    }
    return (
        <div className={estilos.modalback}>
            <div className={estilos.modalContainer}>
                <div className={estilos.modalHeader}>
                    <h2>{item.title || item.name}</h2>
                    <button onClick={onClose}>x</button>
                </div>
                <div className={estilos.imgDetails}>
                    <img 
                        className={estilos.imgModal} 
                        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} 
                        alt={item.title || item.name} 
                    />
                    <ul className={estilos.movieDetails}>
                        <li>{`Popularidade: ${item.popularity || "Não disponível no momento"}`}</li>
                        <li>{`Data de lançamento: ${item.release_date || item.first_air_date || "Sem informações"}`}</li>
                        <li>{`Quantidade de Votos: ${item.vote_count || "Sem votos registrados"}`}</li>
                        <li>{`Sinopse: ${item.overview || "Sem informações"}`}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
