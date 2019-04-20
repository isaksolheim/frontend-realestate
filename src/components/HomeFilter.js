import React from 'react';

function HomeFilter(props) {
  return(
    <div className="filter">
      <select onChange={props.changeHandler} id="homeType">
        <option>All</option>
        <option>Apartment</option>
        <option>Loft</option>
        <option>Room</option>
        <option>Condo</option>
      </select>
      <select onChange={props.changeHandler} id="state">
        <option>All</option>
        <option>NY</option>
        <option>CA</option>
        <option>CHI</option>
      </select>
    </div>
  );
}

export default HomeFilter;