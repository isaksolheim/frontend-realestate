import React from 'react';

function HomeFilter(props) {
  return(
    <div className="filter">
      <select onChange={props.changeHandler}>
        <option>All</option>
        <option>Apartment</option>
        <option>Loft</option>
        <option>Room</option>
        <option>Condo</option>
      </select>
    </div>
  );
}

export default HomeFilter;