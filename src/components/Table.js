import React from 'react'; // import React

const Table = ({ sat }) => {
  return (
    <table>
      <thead>
        {/* Table header with column labels */}
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {/* Map through sat data and create rows */}
        {sat.map((data, id) => (
          <tr key={id}>
             {/* Cell for satellite name */}
            <td>{data.name}</td>
            {/* Cell for type of satellite */}
            <td>{data.type}</td>
             {/* Cell for launch date */}
            <td>{data.launchDate}</td>
             {/* Cell for status (active or inactive) */}
            <td>{data.operational ? 'Active' : 'Inactive'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table; // Export the Table component
