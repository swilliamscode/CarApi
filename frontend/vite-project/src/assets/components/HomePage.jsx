import React, { useState } from 'react'; // Importing React and the useState hook
import { Button } from '@mui/material'; // Importing Button component from Material-UI
import CarList from './CarList'; // Importing CarList component from another file
import NavBar from './NavBar'; // Importing NavBar component from another file

// Defining the HomePage functional component
const HomePage = () => {
  // State to control the visibility of the CarList component
  const [showCarList, setShowCarList] = useState(false); 

  // Function to handle the click event of the "View Inventory" button
  const handleViewAllClick = () => {
    setShowCarList(true); // Update state to show the CarList when the button is clicked
  };

  // Render the component
  return (
    <div>
      {/* Logo Image */}
      <img src="https://cdn.dealerwebsites.com/p/dealer/acct/1996/logo/final-scenic-city-logo.png.jpg" alt="Logo" />
      
      {/* Navigation Bar */}
      <NavBar/>
      
      {/* Container for the main image and button */}
      <div className="image-container">
        {/* Main Image */}
        <img
          className="homephoto"
          src="https://media.istockphoto.com/id/161819647/photo/new-cars.jpg?s=612x612&w=0&k=20&c=0sxj9xq_35F1iIWTcHVOXGu3Ho-iE3ojIWdjPzOIRUI="
          alt="Cars"
        /> 
        
        {/* Button to view inventory */}
        <Button
          className="view-all-button"
          variant="contained" // Material-UI style for a contained button
          onClick={handleViewAllClick} // Attach click event handler
          style={{ 
            position: 'absolute', // Position the button absolutely within the container
            top: '25%', // Place the button 25% from the top
            left: '50%', // Center the button horizontally
            transform: 'translate(-50%, -50%)', // Center the button vertically
            zIndex: 10 // Bring the button in front of other elements
          }} 
        >
          View Inventory
        </Button>
      </div>
      
      {/* Conditionally render the CarList component based on showCarList state */}
      {showCarList && <CarList />}
    </div>
  );
};

// Exporting HomePage component as the default export
export default HomePage;

