import estilos from "./Modal.module.css";

export function Modal({movie, onClose }){
    if (!movie){ //se clicar em algum lugar que nao tenha o card
        return null;
    }
    console.log("Modal renderizada")
    return(
        <div className={estilos.modalback}>
            <div className={estilos.modalContainer}>
                <div className={estilos.modalHeader}>
                    <h2>{movie.title}</h2>    
                    <button onClick={onClose}>x</button>
                </div>    
                <div className={estilos.imgDetails}>
                    <img className={estilos.imgModal} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                    <ul className={estilos.movieDetails}>
                        <li>{`Popularidade: ${movie.popularity || "Não disponível no momento"}`}</li>
                        <li>{`Data de lançamento: ${movie.realease_date || "Sem informações"}`}</li>
                        <li>{`Quantidade de Votos: ${movie.vote_count}`}</li>
                        <li>{`Sinopse: ${movie.overview || "Sem informações"}`}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}