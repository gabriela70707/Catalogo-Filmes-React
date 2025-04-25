import estilos from './BarraNavegacao.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faFilm, faUser } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function BarraNavegacao() {

    return (
        <nav className={estilos.container}>
            <ul>
                <Link to="/filmes">
                    <li><FontAwesomeIcon icon={faFilm} /> Filmes</li>
                </Link>
                
                <Link to="serie">
                    <li><FontAwesomeIcon icon={faFilm} /> Séries</li>
                </Link>

                <Link to="perfil">
                    <li><FontAwesomeIcon icon={faUser} /> Mudar Perfil</li>
                </Link>

            </ul>
            {/* Renderiza a seção de filmes ou séries com base no estado */}
        
        </nav>
    );
}