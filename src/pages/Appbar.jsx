import React from 'react';
import { Link } from 'react-router-dom';

const Appbar = () => {
  return (
    <nav className="bg-green-500 flex items-center text-xl md:text-3xl">
      <div className="flex-grow"></div> {/* Spacer to push content to the center and right */}
      <Link to="/" className="text-white font-bold font-poppins px-4 py-2">
        Homem ou Mulher
      </Link>
      <div className="flex-grow flex justify-end">
        <Link to="/favorites" className="text-white px-4 py-2">
          ⭐
        </Link>
      </div>
    </nav>
  );
};

export default Appbar;
