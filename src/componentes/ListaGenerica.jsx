import React, { useState, useEffect } from "react"; // Importando useState e useEffect
import axios from "axios"; // Importação do axios para realizar a chamada API
import { Card } from "./Card"; // Certifique-se de que o caminho está correto
import { Modal } from "./Modal"; // Certifique-se de que o caminho está correto
import estilos from './Lista.module.css'; // Certifique-se de que o caminho está correto

const API_URL = 'https://api.themoviedb.org/3';
const API_key = '4a058f0aabb09d73b5bf9bb48a1c3060';


export function ListaGenerica({ apiEndpoint, mediaType }) {
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        axios.get(`${API_URL}${apiEndpoint}?api_key=${API_key}&language=pt-BR`)
            .then(response => {
                setItems(response.data.results);
            })
            .catch(error => {
                console.error(`Erro ao buscar ${mediaType}:`, error);
            });
    }, [apiEndpoint]);

    const handleOpenModal = (item) => {
        setSelectedItem(item);
    };

    const handleCloseModal = () => {
        setSelectedItem(null);
    };

    return (
        <div className={estilos.container}>
            <figure style={{ display: 'flex', flexWrap: 'wrap', width: '80%', gap: '3vw' }}>
                {items.map(item => (
                    <Card key={item.id} item={item} onOpenModal={handleOpenModal} />
                ))}
            </figure>
            {selectedItem && <Modal item={selectedItem} onClose={handleCloseModal} />}
        </div>
    );
}
