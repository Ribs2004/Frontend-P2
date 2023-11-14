import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';

const Home = () => {
  const [genderData, setGenderData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (name) => {
    setIsLoading(true);

    axios.get(`https://api.genderize.io?name=${name}`).then((response) => {
      setGenderData(response.data);
      setIsLoading(false);

      const postData = {
        name: response.data.name,
        gender: response.data.gender,
        probability: response.data.probability
      };

      axios.post('http://127.0.0.1:8000/search-results/', postData).then(response => {
        console.log(response.data);
      }).catch(error => {
        console.error("Error while fetching data:", error);
      })

    })
  };

  const formatProbability = (probability) => {
    return (probability * 100).toFixed(0) + '%';
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-2xl mx-auto p-6">
        <SearchBar onSearch={handleSearch} />
        {isLoading && <div className="text-center my-2">Loading...</div>}
        {genderData && (
          <div
            className={`mt-6 p-6 rounded-lg shadow-lg text-white text-lg ${genderData.gender === 'male' ? 'bg-blue-500' : 'bg-pink-500'}`}
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <p className="font-semibold">Nome: {genderData.name}</p>
            <p className="font-semibold">Gênero: {genderData.gender}</p>
            <p className="font-semibold">Probabilidade: {formatProbability(genderData.probability)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
