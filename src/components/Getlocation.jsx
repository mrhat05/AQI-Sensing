import React, { useEffect } from 'react';

const GetLocation = ({ updateLocation }) => {
  useEffect(() => {
    // Get the user's location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        updateLocation(latitude, longitude); // Update the parent component with the coordinates
      },
      (error) => {
        console.error("Error getting location", error);
      }
    );
  }, [updateLocation]);

  return null; // This component doesn't need to render anything
};

export default GetLocation;
