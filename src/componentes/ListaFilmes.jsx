// Importações necessárias
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "../Card"; // Componente genérico do Card
import { Modal } from "../Modal"; // Componente genérico do Modal
import estilos from '../Lista.module.css';

// Configurações da API
const API_key = '4a058f0aabb09d73b5bf9bb48a1c3060';
const API_URL = 'https://api.themoviedb.org/3';

export function ListaFilmes() {
    // Estado para armazenar os filmes
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null); // Estado para armazenar o item selecionado

    // useEffect para buscar os filmes na API
    useEffect(() => {
        axios.get(`${API_URL}/movie/popular?api_key=${API_key}&language=pt-BR`)
            .then(response => {
                setMovies(response.data.results); // Atualiza o estado com os filmes
            })
            .catch(error => {
                console.error('Erro ao buscar dados da API:', error);
            });
    }, []);

    // Função para abrir o modal ao selecionar um filme
    const handleOpenModal = (movie) => {
        setSelectedMovie(movie);
    };

    // Função para fechar o modal
    const handleCloseModal = () => {
        setSelectedMovie(null);
    };

    return (
        <div className={estilos.container}>
            <figure style={{ display: 'flex', flexWrap: 'wrap', width: '80%', gap: '3vw' }}>
                {movies.map(movie => (
                    <Card key={movie.id} item={movie} onOpenModal={handleOpenModal} />
                ))}
            </figure>
            {selectedMovie && <Modal item={selectedMovie} onClose={handleCloseModal} />}
        </div>
    );
}
