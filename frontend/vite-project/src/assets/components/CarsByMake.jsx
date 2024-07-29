import React, { useState, useEffect } from 'react'; // Import React and necessary hooks
import axios from 'axios'; // Import axios for making HTTP requests
import { Box, Button, TextField, Typography, Card, CardContent } from '@mui/material'; // Import Material-UI components

// Define the CarsByMake functional component
const CarsByMake = () => {
    // State to store the car make input by the user
    const [make, setMake] = useState('');
    // State to store the list of cars fetched from the server
    const [cars, setCars] = useState([]);
    // State to store any error messages
    const [error, setError] = useState(null);

    // Function to fetch cars based on the specified make from the API
    const fetchCarsByMake = async () => {
        try {
            // Make a GET request to the API to fetch cars by the specified make
            const response = await axios.get(`http://localhost:3000/cars/make/${make}`);
            setCars(response.data); // Update state with the fetched cars
            setError(null); // Clear any previous error
        } catch (error) {
            // If an error occurs, set the error state
            setError('Error fetching cars by make');
            console.error('Error fetching cars by make:', error); // Log the error for debugging
        }
    };

    // Handle the form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        fetchCarsByMake(); // Call the function to fetch cars based on the make
    };

    // Render the component
    return (
        <Box sx={{ padding: 2 }}> {/* Box component for padding and layout */}
            <Typography variant="h6">Find Cars by Make</Typography> {/* Title for the section */}
            <form onSubmit={handleSubmit}> {/* Form for user input */}
                <TextField 
                    label="Car Make" // Label for the input field
                    variant="outlined" // Style variant for the input field
                    value={make} // Bind the value of the input field to state
                    onChange={(e) => setMake(e.target.value)} // Update state on input change
                    required // Make the input field required
                />
                <Button type="submit" variant="contained" sx={{ marginLeft: 1 }}>Search</Button> {/* Button to submit the form */}
            </form>
            {error && <Typography color="error">{error}</Typography>} {/* Display error message if it exists */}
            <Box sx={{ marginTop: 2 }}> {/* Box to contain the list of cars */}
                {cars.map(car => ( // Map over the cars array to display each car
                    <Card key={car._id} sx={{ maxWidth: 345, marginBottom: 2 }}> {/* Card for each car */}
                        <CardContent>
                            <Typography variant="h5">{car.make} {car.model}</Typography> {/* Display car make and model */}
                            <Typography variant="h6">${car.price}</Typography> {/* Display car price */}
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};

// Export the CarsByMake component as the default export
export default CarsByMake;

