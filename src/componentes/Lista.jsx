//endpoint series: axios.get(`${API_URL}/tv/popular?api_key=${API_key}&language=pt-BR`)

// Importações necessárias
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import { Modal } from "./Modal";
import estilos from './Lista.module.css';
// Configurações da API
const API_key = '4a058f0aabb09d73b5bf9bb48a1c3060';
const API_URL = 'https://api.themoviedb.org/3';


export function Lista() {
    // Estado para armazenar os filmes
    const [movies, setMovie] = useState([]);

    //mostra se foi selecionado um filme para a visualização 
    const [SelectedMovie, setSelectedMovie] = useState(null)

    // useEffect para buscar os filmes na API
    useEffect(() => {
        axios.get(`${API_URL}/movie/popular?api_key=${API_key}&language=pt-BR`)
            .then(response => {
                console.log('API Response:', response.data.results);
                setMovie(response.data.results); // Atualiza o estado com os filmes
            })
            .catch(error => {
                console.error('Erro ao buscar dados da API:', error);
            });
    }, []);
    //useEffect ((parametros) {script} [oq eu quero que aconteça antes de executar o script])

    //houve alguma ação para que o modal fosse aberto?
    const handleOpenModal = (movie) =>{
        setSelectedMovie(movie);
    };

    const handleCloseModal = () =>{
        setSelectedMovie(null);
    };


    return (
        <div className={estilos.container}>
            <figure style={{ display: 'flex', flexWrap: 'wrap' ,width:'80%', gap:'3vw'}}>
                {movies.map(movie => (
                    <Card key={movie.id} movie={movie} 
                    onOpenModal = {handleOpenModal}/>

                ))}
            </figure>
            {setSelectedMovie && (<Modal movie={SelectedMovie} onClose={handleCloseModal}/>)}
        </div>
    );
}
