import React from "react";
import { useNavigate } from "react-router-dom";
import "./Perfil.css";
import { Footer } from "../componentes/Footer";

export const Perfil = () => {
    const navigate = useNavigate();
    const profiles = ["Joyce", "João", "Nico", "Ge"];

    const handleProfileClick = () => {
        navigate("/filmes"); // Redireciona para a página de filmes
    };

    return (
        <div className="profile-container">
            <h1>Escolha seu perfil</h1>
            <div className="profile-grid">
                {profiles.map((profile, index) => (
                    <div
                        key={index}
                        className="profile-card"
                        onClick={() => handleProfileClick(profile)}
                    >
                        <img src={`./src/assets/${profile.toLowerCase()}.jpg`} alt={`Foto do perfil de ${profile}`}/>
                        <h2>{profile}</h2>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};
