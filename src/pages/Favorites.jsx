import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Favourites = () => {
    const [favourites, setFavourites] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/search-results/')
            .then(response => {
                setFavourites(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('There was an error fetching the data:', error);
                setError(error);
                setIsLoading(false);
            });
    }, []);

    const formatProbability = (probability) => {
        return (probability * 100).toFixed(0) + '%';
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="max-w-2xl mx-auto p-6">
                <h2 className="text-gray-900 text-2xl font-bold text-center mb-6">Buscas Recentes</h2>
                {favourites.map((item, index) => (
                    <div
                        key={index}
                        className={`mt-4 p-6 rounded-lg shadow-lg text-white text-lg ${item.gender === 'male' ? 'bg-blue-500' : 'bg-pink-500'}`}
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                        <p className="font-semibold">Nome: {item.name}</p>
                        <p className="font-semibold">Gênero: {item.gender}</p>
                        <p className="font-semibold">Probabilidade: {formatProbability(item.probability)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Favourites;
