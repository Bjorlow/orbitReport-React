import React from 'react';// Import React
// Import satellite data
import satData from './satData';

//Buttons component 
// Iterate over unique orbit types and create buttons
//create a button to display all satellites
const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div>
      {displaySats.map((sat, id) => (
        <button onClick={() => filterByType(sat)} key={id}>
          {sat} Orbit
        </button>
      ))}
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  );
};

export default Buttons;
