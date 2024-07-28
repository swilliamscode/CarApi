import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Box, Button } from '@mui/material';
import Footer from './Footer';

const CarList = () => {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get('http://localhost:3000/cars');
        setCars(response.data);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    fetchCars();
  }, []);

  return (
    
   <Box sx={{ padding: 2 }}>
       
      <h1>Car List</h1>
      <Button variant="contained" onClick={() => navigate('/')}>Back to HomePage</Button>
    <Box
    sx={{ 
      display: 'flex', 
      flexDirection: 'row', 
      flexWrap: 'wrap', 
      justifyContent: 'space-around', 
      gap: 2, 
      padding: 2 
    }}
    >

      {cars.map(car => (
        <Card key={car._id} sx={{ maxWidth: 345, marginBottom: 2 }}>
          <CardMedia
            component="img"
            height="140"
            image={car.photo}
            alt={`${car.make} ${car.model}`}
          />
          <CardContent>
            <Typography variant="h5">{car.make} {car.model}</Typography>
            <Typography variant="h6">${car.price}</Typography>
            <Typography variant="body2">Rating: {car.rating || 'N/A'}</Typography>
            <Link to={`/cars/${car._id}`}>View Details</Link>
          </CardContent>
        </Card>
      ))}
    </Box>
    <Footer/>
  </Box>
  );
};

export default CarList;
