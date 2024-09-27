import React from 'react'
import "./Filter.css"


 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Filter({callback}:any) {

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    callback(event.target.value); // Pass the selected filter back to App
  };


  return (


    <div className='filter-box'>
      
      <label>Aus Welchem Land:</label>
      <select id="filter" onChange={handleSelectChange}>
        <option value="Canadian">Canadian</option>
        <option value="Italian">Italian</option>
        <option value="Indian">Indian</option>
        <option value="Mexican">Mexican</option>
        {/* Add more options as needed */}
      </select>

    
    </div>
  )
}

export default Filter