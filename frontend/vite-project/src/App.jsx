import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './assets/components/HomePage';
import CarList from './assets/components/CarList';
import CarDetail from './assets/components/CarDetail';

import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<CarList />} />
        <Route path="/cars/:id" element={<CarDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

