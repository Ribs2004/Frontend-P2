import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Favourites from './pages/Favorites'; // Import the Favourites component
import AppBar from './pages/Appbar';
import FinalExam from './pages/Anuncios';

const App = () => {
  return (
    <Router>
      <AppBar />
      <FinalExam />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/favorites" element={<Favourites />} /> {/* Add the Favourites route */}
      </Routes>
    </Router>
  );
};

export default App;
