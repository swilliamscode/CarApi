import React, { createContext, useState, useContext } from 'react'; // Import React and necessary hooks

// Create a new context for car data
const CarContext = createContext();

// Custom hook to use the CarContext in other components
export const useCarContext = () => {
    return useContext(CarContext); // Access the context value using useContext
};

// CarProvider component to wrap the part of the app that needs access to car data
export const CarProvider = ({ children }) => {
    // State to store the list of cars, initialized to an empty array
    const [cars, setCars] = useState([]);

    return (
        <CarContext.Provider value={{ cars, setCars }}> {/* Provide the cars state and setCars function to the context */}
            {children} {/* Render the child components that are wrapped by this provider */}
        </CarContext.Provider>
    );
};

