import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./pages";
import AppBar from './pages/Appbar'; // Import AppBar component

const App = () => {
  return (
    <Router>
      <AppBar /> {/* Include AppBar */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;