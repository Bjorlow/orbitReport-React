import React, { useState } from 'react'; // Import useState
import Banner from './components/Banner';
import Buttons from './components/Buttons';
import Table from './components/Table';
import satData from './components/satData';
 //  import necessary modules and components. You're importing React, useState from React, and three components: Banner, Buttons, and Table.
//also importing satData from the satData.js module (file that contains satellite data).

function App() {
   // Set up state to manage satellite data
   const [sat, setSat] = useState(satData);// Use useState to hold satData
   // Create an array of unique orbit types from satData
   const displaySats = [...new Set(satData.map((data) => data.orbitType))];

   // Function to filter satellite data by orbit type
   const filterByType = (currentType) => {
      // Use filter to create a new array with satellites of the selected type
      const displaySats = satData.filter((newSatDisplay) => {
         return newSatDisplay.orbitType === currentType;
      });
      setSat(displaySats);// Update sat state with filtered data
   };

   // Render the UI components
   // Render the Banner buttons components and pass necessary props 
   // Render the Table component and pass satellite data
   return (
      <div>
         <Banner />
         <Buttons
            filterByType={filterByType}
            setSat={setSat}
            displaySats={displaySats}
         />
         <Table sat={sat} />
      </div>
   );
}

export default App;// Export the App component as the default export
