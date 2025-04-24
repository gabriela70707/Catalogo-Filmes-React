import estilos from './Perfil.module.css'; // Estilo personalizado para o perfil

export function Perfil() {
    // Exemplo de estado para armazenar dados do perfil
    const user = {
        avatar: "https://via.placeholder.com/150", // URL de avatar do usuário
        name: "Usuário Disney", // Nome do usuário
        email: "usuario@email.com", // Email
        favorites: ["Série X", "Filme Y", "Série Z"], // Exemplo de lista de favoritos
    };

    return (
        <div className={estilos.perfilContainer}>
            {/* Cabeçalho do perfil */}
            <header className={estilos.header}>
                <img src={user.avatar} alt="Avatar do usuário" className={estilos.avatar} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </header>

            {/* Seção de favoritos */}
            <section className={estilos.favorites}>
                <h3>Favoritos</h3>
                <ul>
                    {user.favorites.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </section>

            {/* Configurações do perfil */}
            <section className={estilos.settings}>
                <h3>Configurações</h3>
                <button className={estilos.btn}>Alterar Avatar</button>
                <button className={estilos.btn}>Gerenciar Conta</button>
            </section>
        </div>
    );
}
