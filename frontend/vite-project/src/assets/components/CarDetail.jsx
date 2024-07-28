import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Typography, Card, CardMedia, CardContent, CircularProgress, Box } from '@mui/material';

const CarDetail = () => {
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/car/${id}`);
        setCar(response.data);
      } catch (error) {
        console.error('Error fetching car details:', error);
        setError('Error fetching car details');
      } finally {
        setLoading(false);
      }
    };

    fetchCar();
  }, [id]);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;
  if (!car) return <Typography>No car found</Typography>;

  return (
    <Box sx={{ padding: '20px' }}>
      <Button variant="contained" onClick={() => navigate('/cars')}>Back to Car List</Button>
      <Card sx={{ maxWidth: 600, marginTop: 2 }}>
        <CardMedia
          component="img"
          height="300"
          image={car.photo}
          alt={`${car.make} ${car.model}`}
        />
        <CardContent>
          <Typography variant="h4">{car.make} {car.model}</Typography>
          <Typography variant="h6">Price: ${car.price}</Typography>
          <Typography variant="body1">Year: {car.year}</Typography>
          <Typography variant="body1">Mileage: {car.mileage} miles</Typography>
          <Typography variant="body1">Rating: {car.rating || 'N/A'}</Typography>
          <Typography variant="body1">Status: {car.status}</Typography>
          <Typography variant="body1">One Owner: {car.oneOwner ? 'Yes' : 'No'}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CarDetail;



