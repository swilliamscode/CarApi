// src/assets/components/CarContext.js
import React, { createContext, useState, useContext } from 'react';

const CarContext = createContext();

export const useCarContext = () => {
    return useContext(CarContext);
};

export const CarProvider = ({ children }) => {
    const [cars, setCars] = useState([]);

    return (
        <CarContext.Provider value={{ cars, setCars }}>
            {children}
        </CarContext.Provider>
    );
};
