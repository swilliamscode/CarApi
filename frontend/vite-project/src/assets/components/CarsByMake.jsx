// src/assets/components/CarsByMake.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, TextField, Typography, Card, CardContent } from '@mui/material';

const CarsByMake = () => {
    const [make, setMake] = useState('');
    const [cars, setCars] = useState([]);
    const [error, setError] = useState(null);

    const fetchCarsByMake = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/cars/make/${make}`);
            setCars(response.data);
            setError(null); 
        } catch (error) {
            setError('Error fetching cars by make');
            console.error('Error fetching cars by make:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`submitting make: ${make}`);
        fetchCarsByMake();
    };

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h6">Find Cars by Make</Typography>
            <form onSubmit={handleSubmit}>
                <TextField 
                    label="Car Make" 
                    variant="outlined" 
                    value={make} 
                    onChange={(e) => setMake(e.target.value)} 
                    required 
                />
                <Button type="submit" variant="contained" sx={{ marginLeft: 1 }}>Search</Button>
            </form>
            {error && <Typography color="error">{error}</Typography>}
            <Box sx={{ marginTop: 2 }}>
                {cars.map(car => (
                    <Card key={car._id} sx={{ maxWidth: 345, marginBottom: 2 }}>
                        <CardContent>
                            <Typography variant="h5">{car.make} {car.model}</Typography>
                            <Typography variant="h6">${car.price}</Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

export default CarsByMake;
