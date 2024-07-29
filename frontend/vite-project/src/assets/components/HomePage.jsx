
import React, { useState } from 'react';
import { Button } from '@mui/material';
import CarList from './CarList';
import NavBar from './NavBar'; 
import CarsByMake from './CarsByMake';

const HomePage = () => {
  const [showCarList, setShowCarList] = useState(false); // State to control car list visibility

  const handleViewAllClick = () => {
    setShowCarList(true); // Show the car list when the button is clicked
  };

  return (
    <div>
      <img src="https://cdn.dealerwebsites.com/p/dealer/acct/1996/logo/final-scenic-city-logo.png.jpg"/>
      
      <NavBar/>
      
      <div className="image-container" >
        <img
          className="homephoto"
          src="https://media.istockphoto.com/id/161819647/photo/new-cars.jpg?s=612x612&w=0&k=20&c=0sxj9xq_35F1iIWTcHVOXGu3Ho-iE3ojIWdjPzOIRUI="/> 
        
      
      
      <Button
        className="view-all-button"
        variant="contained"
        onClick={handleViewAllClick}
        style={{ position: 'absolute', top: '25%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 10 }} // Center the button
      >
        View Inventory
      </Button>
      
</div>
      {/* Conditionally render the CarList component */}
      {showCarList && <CarList />}
    </div>
    
  );
};

export default HomePage;
