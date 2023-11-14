import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('http://127.0.0.1:8000/search-results/');
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading ? <p>Loading...</p> : null}
      <ul>
        {results.map(result => (
          <li key={result.id}>
            <p>{result.someField}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
