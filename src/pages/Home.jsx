import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';

const Home = () => {
  const [genderData, setGenderData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (name) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://api.genderize.io?name=${name}`);
      setGenderData(response.data);
      console.log(response.data)
    } catch (error) {
      console.error("Erro ao  obter dados:", error);
    }
    setIsLoading(false);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {isLoading && <div className="text-center my-2">Loading...</div>}
      {genderData && (
        <div 
          className={`mt-4 p-4 rounded-lg text-white ${genderData.gender === 'male' ? 'bg-blue-500' : 'bg-pink-500'}`}
        >
          <p>Nome: {genderData.name}</p>
          <p>Gênero: {genderData.gender}</p>
          <p>Probabilidade: {genderData.probability.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
