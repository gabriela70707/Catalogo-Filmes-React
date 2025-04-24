// Componente Card corrigido
import estilos from './Card.module.css';

export function Card({ movie, onOpenModal }) {
    return (
        <div className={estilos.container}>
            <h3>{movie.title}</h3>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} onClick={() => onOpenModal(movie)} />
            <p>{movie.overview}</p>
        </div>
    );
}



/*
Anotações
useState = ele armazena a situação atual = ele seria como se fosse o i em um for 
ele grava a situação atual da variavel 

useEffect = o effect serve para mostrar  na tela o que esta armazenado no state naquele momento
estrutura:
useEffect ((parametros) {script} [oq eu quero que aconteça antes de executar o script])

*/