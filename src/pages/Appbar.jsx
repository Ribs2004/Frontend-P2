import React from 'react';
import { Link } from 'react-router-dom';

const Appbar = () => {
  return (
    <nav className="bg-green-500 flex justify-between items-center p-4 text-xl md:text-3xl"> {/* Adjusted padding and text size */}
      {/* Placeholder to keep the space on the left */}
      <div></div>

      {/* Centered and styled "Tempo" text */}
      <Link to="/" className="text-white font-bold font-poppins">
        Homem ou Mulher
      </Link>

      {/* Right-aligned star icon */}
      <Link to="/favorites" className="text-white">
        ⭐
      </Link>
    </nav>
  );
};

export default Appbar;
