import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './assets/components/HomePage';
import CarList from './assets/components/CarList';
import CarDetail from './assets/components/CarDetail';
import { CarProvider } from "./assets/components/CarContext";
import CarsByMake from './assets/components/CarsByMake';
import "./App.css"

function App() {
  return (
    <CarProvider>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<CarList />} />
        <Route path="/cars/make" element={<CarsByMake />} />
        <Route path="/cars/:id" element={<CarDetail />} />
      </Routes>
    </Router>
    </CarProvider>
  );
};

export default App;

