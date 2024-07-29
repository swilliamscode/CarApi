import React, { useEffect, useState } from 'react'; // Importing React and necessary hooks
import axios from 'axios'; // Importing axios for making HTTP requests
import { Link, useNavigate } from 'react-router-dom'; // Importing Link for navigation and useNavigate for programmatic navigation
import { Card, CardContent, CardMedia, Typography, Box, Button } from '@mui/material'; // Importing MUI components for UI
import Footer from './Footer'; // Importing Footer component
import CarsByMake from './CarsByMake'; // Importing CarsByMake component for filtering cars

const CarList = () => {
  // Defining CarList component
  const [cars, setCars] = useState([]); // State to hold the list of cars
  const navigate = useNavigate(); // Hook to programmatically navigate between routes

  useEffect(() => {
    // useEffect hook to fetch data when the component mounts
    const fetchCars = async () => {
      // Async function to fetch car data
      try {
        const response = await axios.get('http://localhost:3000/cars'); // Making GET request to the server
        setCars(response.data); // Updating state with the fetched car data
      } catch (error) {
        console.error('Error fetching cars:', error); // Logging error if the request fails
      }
    };

    fetchCars(); // Calling the fetchCars function
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <Box sx={{ padding: 2 }}> 
      <CarsByMake /> 
      <h1>INVENTORY</h1> 
      
      <Button variant="contained" onClick={() => navigate('/')}>Back to HomePage</Button>
      {/* Button to navigate back to the home page */}

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
        {/* Flexbox container for displaying the car cards */}

        {cars.map(car => (
          // Mapping over the cars array to create a Card for each car
          <Card key={car._id} sx={{ maxWidth: 345, marginBottom: 2 }}>
            {/* Card component for each car, using car's unique id as key */}
            <CardMedia
              component="img"
              height="140"
              image={car.photo} // Image source for the car photo
              alt={`${car.make} ${car.model}`} // Alt text for accessibility
            />
            <CardContent>
              <Typography variant="h5">{car.make} {car.model}</Typography>
              {/* Displaying car make and model */}
              <Typography variant="h6">${car.price}</Typography>
              {/* Displaying car price */}
              <Typography variant="body2">Rating: {car.rating || 'N/A'}</Typography>
              {/* Displaying car rating or 'N/A' if no rating is available */}
              <Link to={`/cars/${car._id}`}>View Details</Link>
              {/* Link to view detailed information about the car */}
            </CardContent>
          </Card>
        ))}
      </Box>
      <Footer /> 
    </Box>
  );
};

export default CarList; // Exporting CarList component for use in other parts of the application

