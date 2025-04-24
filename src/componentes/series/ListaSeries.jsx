export function ListaSeries() {
    const [series, setSeries] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        axios.get(`${API_URL}/tv/popular?api_key=${API_key}&language=pt-BR`)
            .then(response => {
                setSeries(response.data.results);
            })
            .catch(error => {
                console.error('Erro ao buscar séries:', error);
            });
    }, []);

    const handleOpenModal = (item) => {
        setSelectedItem(item);
    };

    const handleCloseModal = () => {
        setSelectedItem(null);
    };

    return (
        <div className={estilos.container}>
            <figure style={{ display: 'flex', flexWrap: 'wrap', width: '80%', gap: '3vw' }}>
                {series.map(item => (
                    <Card key={item.id} item={item} onOpenModal={handleOpenModal} />
                ))}
            </figure>
            {selectedItem && <Modal item={selectedItem} onClose={handleCloseModal} />}
        </div>
    );
}
