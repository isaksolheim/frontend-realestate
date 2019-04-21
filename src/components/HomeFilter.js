import React from 'react';

function HomeFilter(props) {
  return(
    <div className="filter">
        Home Type:
        <select onChange={props.changeHandler} id="homeType">
          <option>All</option>
          <option>Apartment</option>
          <option>Loft</option>
          <option>Room</option>
          <option>Condo</option>
        </select>
        State:
        <select onChange={props.changeHandler} id="state">
          <option>All</option>
          <option>NY</option>
          <option>CA</option>
          <option>CHI</option>
        </select>
        Elevator:<input type="checkbox" onChange={props.changeHandler} id="elevator" />
        Gym:<input type="checkbox" onChange={props.changeHandler} id="gym" />
        Pool:<input type="checkbox" onChange={props.changeHandler} id="pool" />
    </div>
  );
}

export default HomeFilter;