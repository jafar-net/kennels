import React, { useState, useEffect } from 'react';
//import the components we will need
import { LocationCard } from './LocationCard';
import { getAllLocations, getLocationById } from '../../modules/LocationManager';
import { deleteLocation } from '../../modules/LocationManager';

export const LocationList = () => {
  console.log("LocationList Invoked")
	const [locations, setLocations] = useState([])

  const handleDeleteLocation = id => {
    deleteLocation(id)
    .then(() => getAllLocations().then(setLocations));
};

  const getLocations = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return getAllLocations().then(locationsFromAPI => {
      setLocations(locationsFromAPI)
    });
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
    getLocations();
  }, []);

  // Finally we use .map() to "loop over" the animals array to show a list of animal cards
  return (
    <div className="container-cards">
      {locations.map(location =>
        <LocationCard
          key={location.id}
          location={location}
          handleDeleteLocation={handleDeleteLocation} />)}
    </div>
  );
};
