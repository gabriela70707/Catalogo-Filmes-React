import estilos from './Card.module.css';

export function Card({ item, onOpenModal }) {
    return (
        <div className={estilos.card}>
            <h3>{item.title || item.name}</h3> {/* 'name' é usado para séries */}
            <img 
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} 
                onClick={() => onOpenModal(item)} 
                alt={item.title || item.name} 
            />
            <p>{item.overview}</p>
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