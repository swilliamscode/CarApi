// Import necessary components and hooks from React Router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './assets/components/HomePage'; // Import the HomePage component
import CarList from './assets/components/CarList'; // Import the CarList component
import CarDetail from './assets/components/CarDetail'; // Import the CarDetail component
import { CarProvider } from "./assets/components/CarContext"; // Import the CarProvider for context API
import CarsByMake from './assets/components/CarsByMake'; // Import the CarsByMake component
import "./App.css"; // Import CSS styles for the application

// Define the main App component
function App() {
  return (
    <CarProvider> {/* Wrap the application in CarProvider to provide car-related context to components */}
      <Router> {/* Set up the Router to manage routing within the application */}
        <Routes> {/* Define the different routes available in the application */}
          <Route path="/" element={<HomePage />} /> {/* Route for the home page */}
          <Route path="/cars" element={<CarList />} /> {/* Route to display the list of cars */}
          <Route path="/cars/make/:make" element={<CarsByMake />} /> {/* Route to display cars by make, with dynamic URL parameter */}
          <Route path="/cars/:id" element={<CarDetail />} /> {/* Route to display details of a specific car, with dynamic ID parameter */}
        </Routes>
      </Router>
    </CarProvider>
  );
}

// Export the App component as the default export
export default App;


