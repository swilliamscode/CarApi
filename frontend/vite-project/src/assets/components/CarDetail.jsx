import React, { useEffect, useState } from 'react'; // Importing React and necessary hooks
import axios from 'axios'; // Importing axios for making HTTP requests
import { useParams, useNavigate } from 'react-router-dom'; // Importing hooks for accessing URL parameters and navigation
import { Button, Typography, Card, CardMedia, CardContent, CircularProgress, Box } from '@mui/material'; // Importing MUI components for UI

const CarDetail = () => {
  const [car, setCar] = useState(null); // State to hold the details of the car
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to hold error messages
  const { id } = useParams(); // Extracting car id from URL parameters
  const navigate = useNavigate(); // Hook to programmatically navigate between routes

  useEffect(() => {
    // useEffect hook to fetch car details when the component mounts or id changes
    const fetchCar = async () => {
      // Async function to fetch car details from the API
      try {
        const response = await axios.get(`http://localhost:3000/car/${id}`); // Making GET request to fetch car details
        setCar(response.data); // Updating state with the fetched car details
      } catch (error) {
        console.error('Error fetching car details:', error); // Logging error if the request fails
        setError('Error fetching car details'); // Setting error message in state
      } finally {
        setLoading(false); // Setting loading to false regardless of success or failure
      }
    };

    fetchCar(); // Calling the fetchCar function
  }, [id]); // Dependency array includes id to refetch if it changes

// Conditional rendering based on loading, error and data states
  if (loading) return <CircularProgress />; // Display a loading spinner while data is being fetched
  if (error) return <Typography color="error">{error}</Typography>; // Display error message if there's an error
  if (!car) return <Typography>No car found</Typography>; // Display message if no car details were found

  return (
    <Box sx={{ padding: '20px' }}> 
      <Button variant="contained" onClick={() => navigate('/cars')}>Back to Car List</Button>
      {/* Button to navigate back to the list of cars */}
      <Button variant="contained" onClick={() => navigate('/')}>Back to HomePage</Button>
      {/* Button to navigate back to the home page */}

      <Card sx={{ maxWidth: 600, marginTop: 2 }}> 
      {/* Card component to display car details */}
        <CardMedia
          component="img"
          height="300"
          image={car.photo} // Image source for the car photo
          alt={`${car.make} ${car.model}`} // Alt text for accessibility
        />
        <CardContent>
          <Typography variant="h4">{car.make} {car.model}</Typography>
          {/* Displaying car make and model */}
          <Typography variant="h6">Price: ${car.price}</Typography>
          {/* Displaying car price */}
          <Typography variant="body1">Year: {car.year}</Typography>
          {/* Displaying car year */}
          <Typography variant="body1">Mileage: {car.mileage} miles</Typography>
          {/* Displaying car mileage */}
          <Typography variant="body1">Rating: {car.rating || 'N/A'}</Typography>
          {/* Displaying car rating or 'N/A' if no rating is available */}
          <Typography variant="body1">Status: {car.status}</Typography>
          {/* Displaying car status */}
          <Typography variant="body1">One Owner: {car.oneOwner ? 'Yes' : 'No'}</Typography>
          {/* Displaying whether the car had one owner */}
        </CardContent>
      </Card>
    </Box>
  );
};

export default CarDetail; 


